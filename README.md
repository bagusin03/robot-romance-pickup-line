# All My Attention

[![make.fun](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/bagusin03/robot-romance-pickup-line/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/bagusin03/robot-romance-pickup-line/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

One line, 91 characters, a pickup line aimed at an AI: a transformer joke where "attention" is both flirtation and the mechanism itself.

`main.ts` writes the single 91-character line to `/output/entry.txt`:

> Are you a transformer? Because you've got all my attention — every single head, no dropout.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–200 character single-line gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
