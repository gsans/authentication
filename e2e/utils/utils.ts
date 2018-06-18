import * as fs from 'fs';
import * as path from 'path';
const FOLDER = './screenshots/';

export function parseQueryParams(url) {
  return url.split('?')[1]
    .split('&')
    .map(p => p.split('='))
    .reduce((obj, pair) => {
      const [key, value] = pair.map(decodeURIComponent);
      return ({ ...obj, [key]: value })
    }, {});
}

export function screenshot(data, filename) {
  if (!fs.existsSync(FOLDER)) {
    fs.mkdirSync(FOLDER, '744');
  }
  if (fs.existsSync(FOLDER)) {
    const filePath = path.resolve(FOLDER, filename);
    fs.writeFileSync(filePath, data, { encoding: 'base64' });
  }
}
