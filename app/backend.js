const { execFile } = require('child_process');
const util = require('util');

const execFileAsync = util.promisify(execFile);
const MAX_BUFFER = 10 * 1024 * 1024;

async function commandExists(cmd) {
  try {
    await execFileAsync('which', [cmd]);
    return true;
  } catch {
    return false;
  }
}

async function detectSources() {
  const [apt, flatpak, snap] = await Promise.all([
    commandExists('apt-cache'),
    commandExists('flatpak'),
    commandExists('snap'),
  ]);
  return { apt, flatpak, snap };
}

async function searchApt(term) {
  const { stdout } = await execFileAsync('apt-cache', ['search', term], { maxBuffer: MAX_BUFFER });
  return stdout
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const idx = line.indexOf(' - ');
      const name = idx === -1 ? line : line.slice(0, idx);
      const description = idx === -1 ? '' : line.slice(idx + 3);
      return { name, description, installCommand: `sudo apt install ${name}` };
    });
}

async function searchFlatpak(term) {
  const { stdout } = await execFileAsync('flatpak', ['search', term], { maxBuffer: MAX_BUFFER });
  const lines = stdout.split('\n').filter(Boolean);
  if (lines.length && /^Name\s/.test(lines[0])) lines.shift();
  return lines.map((line) => {
    const cols = line.split('\t');
    const name = cols[0] || '';
    const id = cols[2] || '';
    const remote = (cols[5] || 'flathub').split(',')[0].trim() || 'flathub';
    return {
      name,
      description: cols[1] || '',
      id,
      installCommand: `flatpak install ${remote} ${id}`,
    };
  });
}

async function searchSnap(term) {
  const { stdout } = await execFileAsync('snap', ['find', term], { maxBuffer: MAX_BUFFER });
  const lines = stdout.split('\n').filter(Boolean);
  if (lines.length && /^Name\s/.test(lines[0])) lines.shift();
  return lines.map((line) => {
    const parts = line.trim().split(/\s{2,}/);
    const name = parts[0] || '';
    return {
      name,
      version: parts[1] || '',
      publisher: parts[2] || '',
      description: parts[parts.length - 1] || '',
      installCommand: `sudo snap install ${name}`,
    };
  });
}

module.exports = { detectSources, searchApt, searchFlatpak, searchSnap };
