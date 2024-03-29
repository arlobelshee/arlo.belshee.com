---
id: 27
title: An Agility Index (of Goodness)
date: 2011-05-19T19:39:25+00:00
author: Arlo
layout: post
guid: http://arlobelshee.com/?p=27
permalink: /an-agility-index-of-goodness/
category: techies
tags:
  - agility
  - KPI
  - measurement
---
Someone at work today asked someone else for an Agility index / KPI. The response was a link.

I followed the link. I was underwhelmed.

  * It measured practices, not outcomes.
  * It ignored engineering (the most important practices of all),
  * and learning (the second most important category).
  * It heavily stressed planning (only slightly less important than head cheese to a well-run software organization),
  * and management structure (mostly important in that it can really screw up an otherwise good team).

I figured that I could come up with a metric that's at least as wrong<!--more--> as that one (I've been reading a

[book on wrongology](http://beingwrongbook.com/ "Being Wrong") recently). Here goes:

Pick a random day. Measure the following:

  1. How long since your last public release (in weeks)?
  2. How long since your last useful retrospective (in weeks)?
  3. How long since you learned something new at work (in days)?
  4. How long since you talked directly with a customer (email counts, but has to be with actual customer) (in days)?
  5. How long does it take you to complete a typical task (from when you finish selecting your task until when you know you will never have to touch it again) (in 30-minute chunks)?
  6. How long does it take to commit & know that there were no problems with the integration (in 5-minute chunks, from when you stop coding & start the pre-commit process)?
  7. How long does it take to refactor a common problem (say, split a dual-responsibility class in two or rename a DB column) (in 5-minute chunks)?
  8. How far away is your nearest teammate from you right now (in 5-foot increments, doubled if that person is not immediately visible to you --- eg, through a wall or behind you)?
  9. Do you love your job (1=love it; 5=it’s fine; 10=hate it)?

Measure durations in wall-clock time. It doesn’t matter whether you spend the time waiting (for human or computer), doing something else, or working. Round all fractions up (yes, that includes you continuous deployment people who answered 0.01 to the first question).

On several of these, I feel I’m being rather generous with the unit intervals, but it’s about right. And better to have too-wide intervals: it means that the metric is useless for distinguishing among the top 1% of teams, but allows lesser teams to see progress.

Average them. Subtract the value from 6. Yes, you might get a negative score. That’d be an accurate depiction, and probably worth fixing!

And no, my current team wouldn’t score a perfect 5 on this metric. But I’ve been on two who would.
