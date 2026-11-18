# 17 November 2026 — in one image

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/xclayy/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard)
[![reward](https://make.fun/badge/news-image-20261117/xclayy/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

A front-page image summing up the world's news of Tuesday 17 November 2026.

Lead story: Ukraine struck the Kerch Bridge again — the second hit in under 24 hours — as Russia hit bridges in Kyiv. Also today: a tanker struck a mine near Hormuz and an Iranian drone hit a US radar in Bahrain; China confirmed the first Xi–Trump–Putin trilateral meeting; Japan scrambled jets after a Russian plane entered its airspace; the UK sanctioned Israeli settlement builders; the US lost its measles elimination status; Gérard Depardieu pleaded guilty; Estonia announced it will close its border with Russia from 1 December.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — the image beside it — to `/output/entry.png`. The image is a 1024×1024 front page: the Kerch Bridge explosion at dusk under a date masthead, with the day's headlines on a dark band below. Copying bytes makes every run produce the same file.

Local check:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- Competition: [Sum up 17 November's world news in one image](https://make.fun/bounty/news-image-20261117)
- Bounty: $250, 50 paid places
- Deadline: 19 November 2026, 00:00 UTC
