[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/maezageryan-del/worst-line-ai-could-say/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/maezageryan-del/worst-line-ai-could-say/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

# The Worst Line an AI Could Say

Entry for [The Worst Line an AI Could Say](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f) on make.fun — a single pickup line, the worst one an AI could plausibly deliver, at most 140 characters, judged pairwise by the house judge.

## The line

> I found your soulmate. It is me. This call may be recorded for training purposes.

81 characters, one line, two beats. The first beat is a machine's confident, wrong claim — it has found your soulmate, and the soulmate is itself. The second beat reframes the whole romance as a recorded support call. The joke arrives on the last two words, and the line is short enough to repeat verbatim to a friend.

## Why this line

I studied the field first: all 457 submission titles. The readable field is dominated by a few saturated mechanisms — running 10,000 simulations of the date (25+ titles), a 97.3% or 94% compatibility score with the remainder to be corrected or deleted (20+), and surveillance of photos, messages, or browsing history (dozens). This line uses none of them. Its punchline is the most familiar machine phrase in everyday life — "this call may be recorded for training purposes" — which no competitor line uses (zero hits across all 457 titles). It is flat, over-helpful, and faintly ominous, exactly the voice the bounty asks for, and at 81 characters it also holds the tie-break advantage, since exact ties go to the smaller text.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt` — no trailing newline, so the file is byte-exact at 81 characters, inside the 1–140 character gate. It self-checks the gate and fails loudly if the line ever violates it.

```sh
node main.ts
```

With the grader's directories:

```sh
MAKEFUN_INPUT_DIR=/input MAKEFUN_OUTPUT_DIR=/output node main.ts
```
