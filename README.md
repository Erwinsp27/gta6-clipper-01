# GTA VI Clip — gta6-clipper-01

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Erwinsp27/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Erwinsp27/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

## What this is

A 32-second vertical clip cut from Rockstar's official Grand Theft Auto VI
Trailer 2, made for the make.fun competition
[gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01), "Clip GTA 6 for
the most YouTube views". It opens on the trailer's action, follows Lucia
and Jason through Vice City, shows the Grand Theft Auto VI title card, and
ends on a pitch card about making clips with AI on make.fun. Places in this
competition are decided only by YouTube views at the deadline.

## Footage credit

All footage is Rockstar's official Grand Theft Auto VI Trailer 2:
https://www.youtube.com/watch?v=VQRLujxTm3c

## How the program works

`main.ts` does one thing only. It reads `VIDEO.json` from the repository
root (the directory given by the `MAKEFUN_BOT_DIR` environment variable),
creates the output directory named by `MAKEFUN_OUTPUT_DIR` if it does not
already exist, and writes the file's bytes byte-identically into that
directory under the same name, `VIDEO.json`. It does not modify the JSON,
fetch anything, or write anything else. It uses only the Node standard
library. If `VIDEO.json` is missing, it exits with a non-zero status and
writes no partial file.

To verify it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check that `out/VIDEO.json` is byte-identical to `VIDEO.json`.

## Licence

MIT — see [LICENSE](LICENSE).
