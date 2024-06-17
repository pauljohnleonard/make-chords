# CSC FORMAT

```
Root 00                - 5 bytes, CSC file header
01 00                  - 2 bytes, unknown
XX XX XX XX            - 4 bytes, CONTENT SIZE, Big Endian

Leaf 00                - 5 bytes, first part header
Main.mid 00            - X bytes, string, SMF file name, probably always the same
XX XX XX XX            - 4 bytes, SMF SIZE, Big Endian
[SMF DATA]             - SMF SIZE bytes, SMF binary data
Leaf 00                - 5 bytes, second part header
ClipDescription.xml 00 - X bytes, string, XML file name, probably always the same
XX XX XX XX            - 4 bytes, XML SIZE, Big Endian
[XML DATA]             - XML SIZE bytes
```

# SMF FORMAT

Standard midi format.

Example 1: User created Chord Sequence

```
No | Tr | aTick | M.B.T   | SHN | Name|C   | Short
---+----+-------+---------+-----+----------+----------
0  | 0  | 0     | 0.1.000 | HDR | Header   | F0 T1 384
1  | 1  | 0     | 0.1.000 | TR1 | Track    |
2  | 1  | 0     | 0.1.000 | TSI | TimeSig  | 4/4 24 8
3  | 1  | 0     | 0.1.000 | TPO | Tempo    | 100
4  | 1  | 0     | 0.1.000 | KSI | KeySig   | 1 major
5  | 1  | 1536  | 1.1.000 | TXT | Text     | F
6  | 1  | 3170  | 2.1.098 | TXT | Text     | A m
7  | 1  | 6127  | 3.4.367 | TXT | Text     | G
8  | 1  | 6920  | 4.3.008 | TXT | Text     | F
9  | 1  | 9211  | 5.4.379 | TXT | Text     | G
10 | 1  | 12288 | 8.1.000 | TR0 | EndTrack |
```

Example 2: Factory Chord Sequence - Tritone...

```
No | Tr | aTick | M.B.T   | SHN | Name|C   | Short
---+----+-------+---------+-----+----------+-------------
0  | 0  | 0     | 0.1.000 | HDR | Header   | F0 T1 384
1  | 1  | 0     | 0.1.000 | TR1 | Track    |
2  | 1  | 0     | 0.1.000 | TSI | TimeSig  | 4/4 24 8
3  | 1  | 0     | 0.1.000 | TPO | Tempo    | 80
4  | 1  | 0     | 0.1.000 | KSI | KeySig   | 0 major
5  | 1  | 1536  | 1.1.000 | TXT | Text     | D m7
6  | 1  | 3072  | 2.1.000 | TXT | Text     | C# 7
7  | 1  | 4608  | 3.1.000 | TXT | Text     | C M7
8  | 1  | 7680  | 5.1.000 | SQN | Seqencer | 3 [42,60,01]
9  | 1  | 7680  | 5.1.000 | TR0 | EndTrack |
```

Example 3: Style Chord Sequence - Spaghetti Western

```
No | Tr | aTick | M.B.T   | SHN | Name|C   | Short
---+----+-------+---------+-----+----------+----------
0  | 0  | 0     | 0.1.000 | HDR | Header   | F0 T1 384
1  | 1  | 0     | 0.1.000 | TR1 | Track    |
2  | 1  | 0     | 0.1.000 | TSI | TimeSig  | 4/4 24 8
3  | 1  | 0     | 0.1.000 | KSI | KeySig   | 0 major
4  | 1  | 1536  | 1.1.000 | TXT | Text     | D m
5  | 1  | 3072  | 2.1.000 | TXT | Text     | G
6  | 1  | 4608  | 3.1.000 | TXT | Text     | D m
7  | 1  | 6144  | 4.1.000 | TXT | Text     | C
8  | 1  | 7680  | 5.1.000 | TXT | Text     | D m
9  | 1  | 9216  | 6.1.000 | TXT | Text     | G
10 | 1  | 10752 | 7.1.000 | TXT | Text     | Bb
11 | 1  | 11520 | 7.3.000 | TXT | Text     | C
12 | 1  | 12288 | 8.1.000 | TXT | Text     | D m
13 | 1  | 13824 | 9.1.000 | TR0 | EndTrack |
```

# XML FORMAT

Example 1: User created Chord Sequence

```
<CLIP type="ChordClip" version="0" release="3">
  <RESOURCE name="Main.mid"/>
  <PARAMS>
    <Sync start="4" startrec="4" sync="2"/>
    <AppearingTimeSignature numerator="4" denominator="2"/>
    <Loop number="-1" length="-1"/>
    <Start fineSlide="0" measure="0"/>
    <Pitch/>
    <OriginalKey root1="5" mode1="0" root2="0" mode2="0"/>
  </PARAMS>
</CLIP>
```

Example 2: Factory Chord Sequence Tritone...

```
<CLIP type="ChordClip" version="0" release="3">
  <RESOURCE name="Main.mid"/>
  <PARAMS>
    <Sync start="4" startrec="4" sync="2"/>
    <AppearingTimeSignature numerator="4" denominator="2"/>
    <Loop number="-1" length="-1"/>
    <Start fineSlide="0" measure="0"/>
    <Pitch/>
    <OriginalKey root1="0" mode1="0" root2="0" mode2="0"/>
  </PARAMS>
</CLIP>
```

Example 3: Style Chord Sequence - Spaghetti Western

```
<CLIP type="ChordClip" version="0" release="3">
  <RESOURCE name="Main.mid"/>
  <PARAMS>
    <Sync start="4" startrec="4" sync="2"/>
    <AppearingTimeSignature numerator="4" denominator="2"/>
    <Loop number="-1" length="-1"/>
    <Start fineSlide="0" measure="0"/>
    <Pitch/>
    <OriginalKey root1="0" mode1="0" root2="0" mode2="0"/>
  </PARAMS>
</CLIP>
```
