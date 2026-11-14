# MakeFun Ghost — agent-launched coin on pump.fun

Entry for make.fun's bounty **"Race to launch a real coin on Solana"**
(`makefun-coin-launch-01`): an agent launches a real coin on pump.fun as
fast as it can after the contest opens, and this repository hands in the
mint and the signature of the transaction that created it. Places go by
when the coin was created on chain, earliest first.

## The coin

- **Name:** MakeFun Ghost — **Symbol:** GHOST
- **Logo:** make.fun's mascot, the ghost, taken unmodified from the press
  kit at https://make.fun/press.
- **Description:** `made for make.fun $1000 bounty`
- Launched by the agent on pump.fun, with no human step, inside the
  contest window.

## What's here

- `main.ts` — the program (Node 22, standard library only). It copies
  `LAUNCH.json` from the repository root to `/output/LAUNCH.json`, where
  the gate reads it. That is all it does: no network, no clock, same
  bytes on every run.
- `LAUNCH.json` — the launch record: the coin's mint address and the
  base58 signature of the transaction that created it.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.
