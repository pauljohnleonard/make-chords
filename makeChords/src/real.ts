import iRealReader from 'ireal-reader';
// const iRealReader = require('ireal-reader');

import * as fs from 'fs';

export function parseReal() {
  const data = fs.readFileSync('data/Petrichora.html', 'utf8');

  const playlist = iRealReader(data);

  console.log(JSON.stringify(playlist, null, 2));
}
