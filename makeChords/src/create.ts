import * as midiManager from 'midi-file';
import * as fs from 'fs';

import { header, midiObject, xmlData } from './template';

export function create() {
  const contentSizeOffset = 7;
  const midiSizeOffset = 25;
  // const midiFileStart = 29;

  const bufHeader = Buffer.from(header);
  const midi = midiManager.writeMidi(midiObject);
  const bufXML = Buffer.from(xmlData);
  const bufMidi = Buffer.from(midi);

  // console.log(bufMidi.length);

  const buf = Buffer.concat([bufHeader, bufMidi, bufXML]);

  const totalSize = buf.length;
  const contentSize = totalSize - contentSizeOffset - 4;
  const midiSize = bufMidi.length;

  buf.writeInt32BE(contentSize, contentSizeOffset);
  buf.writeInt32BE(midiSize, midiSizeOffset);

  const buf2 = fs.readFileSync('data/Am_F_G_E.csc');

  if (buf2.length !== buf.length) {
    console.error('Lengths do not match');
  }

  for (let i = 0; i < buf2.length; i++) {
    if (buf2[i] !== buf[i]) {
      if (buf2[i] !== buf[i]) {
        console.log('DATA ERROR', i, buf2[i], buf[i]);
      }
    }
  }
}
