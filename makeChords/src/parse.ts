#!/usr/bin/env zx

import * as midiManager from 'midi-file';
import * as fs from 'fs';

export function parse(file) {
  const buf = fs.readFileSync(file);

  console.log(buf.toString());

  const contentSizeOffset = 7;

  const contentSize = buf.readInt32BE(contentSizeOffset);

  const midiSizeOffset = 25;

  const midiSize = buf.readInt32BE(midiSizeOffset);

  const midiFileStart = 29;

  const headerBuf = buf.slice(0, midiFileStart);

  console.log(JSON.stringify(headerBuf));

  const midiBuf = (buf as Uint8Array).slice(
    midiFileStart,
    midiFileStart + midiSize
  );

  const parsed = midiManager.parseMidi(midiBuf);

  const parsed2 = JSON.parse(JSON.stringify(parsed));

  const output = midiManager.writeMidi(parsed2);

  const xmlBuf = buf.slice(midiFileStart + midiSize);

  fs.writeFileSync('XML.json', JSON.stringify(xmlBuf));

  // console.log(JSON.stringify(parsed, null, 2));

  // console.log(file, buf.length, contentSize, midiSize);
}
