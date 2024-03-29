---
id: 181
title: "Don't standardize MVPs!"
date: 2014-04-09T09:07:38+00:00
author: Arlo
layout: post
guid: http://arlobelshee.com/?p=181
permalink: /dont-standardize-mvps/
category: techies
tags:
  - HDD
  - hypothesis
  - mmf
  - mvp
  - planning
---
I got a question this morning:

> We are struggling to define a standard MVP across the teams. Do you guys have any suggestions for us?

One question: why do you need a standard? What problem are you really trying to solve?

I ask because the point of doing MVPs is to support validated learning. It assumes a development process that is based on running experiments to learn things, not on building things to a definition / spec.

Experimentation is inhibited by over-standardization, so you must be wanting to standardize MVPs for some reason other than effectiveness (probably status reporting or other forms of status).<!--more-->

# MVPs are experiments

Basically, using MVPs assumes the process consists of something like:

  1. **Make a guess.** PM (or someone) write a spec for (a part of) the product.
  2. **Assume all of that is wrong but interesting.** Ask: why do we think each item in that spec is a good idea? What are our assumptions about the user (goals, contexts, engine of growth, engine of value, ...)? Write down those assumptions.
  3. **Find alternate explanations.** For each assumption, list 2 other equally possible assumptions for the same thing. This step exists to break people out of monoistic or dualistic thinking. It opens up questioning. It can eventually be skipped, once team does this by habit.
  4. **Prioritize risks.** Each of these assumptions is a risk. Rank them based on how much evidence you have to support them as opposed to their alternatives, and how much value difference there is between the alternatives (how much is at risk if you are wrong).
  5. **Think scientifically.** Take the top 1 risk. Turn it into a set of hypotheses. What questions would you have to answer to invalidate some important subset of these hypotheses?
  6. **Design that experiment.** What experiment could you run to answer these questions with real customer data? No vanity metrics, and preferably no self-report metrics: use behavioral measures.
  7. **That experiment is your MVP.** Run it.
  8. **Iterate.** Now update your knowledge about your customer and repeat from step 1. Yes, throw out the rest of your spec and assumptions. Your new data will (and should) invalidate prior thinking and direct you a new way. When you get back to step 7, you will have a new MVP.

The term MVP doesn't really apply outside of experimentation. It is a key concept for use when a project is focused on replacing long-range planning / forecasting with data-driven decision-making. It has no role in a project that is focused on long-range planning.

And this is why the term MVP defies standardization. The MVP is the smallest experiment we can run to invalidate a hypothesis, so that we can correct an implicit assumption. It might be big. It might be tiny. It might be software, but often isn't. It is one quest for data.

# Some of your work is not experimental

As teams develop understanding of their customers, they start having places where their assumptions hold valid. They have overwhelming evidence to support a model, and that model has predictive value. It also has boundaries and spawns more unvalidated assumptions.

At this point, the teams starts both executing its model and running experiments to improve its model. We can break work of the first kind into statements, and work of the second kind into questions. The first kind uses scenarios, XOs, epics, stories, tasks, and so on. The second kind uses MVPs, hypotheses, experiments, spikes, tasks, and so on.

Work of the first kind is standardizable. We can share the model between teams and execute on it. We want a consistent understanding, because we have direct customer behavior that supports this as correct --- as compared to hundreds of other models we have tried and refuted.

Standard work is possible here; we achieve that either via centralization or via transparency. Centralization is easier / closer to default American corporate culture; radical transparency and emergent alignment is harder and more effective and adaptable. Both depend on defining terms so we have a shared taxonomy.

# Standardized experiments are bad

Work of the second kind is fundamentally innovative. Variation is a benefit, because it allows exploring a larger set of ideas --- even if it makes compositing results harder (compositing results is always easier than getting them).

Therefore extreme decentralization is a good thing. Each team will modify itself, continuously, to be more effective at discovering an answer to its current hypotheses. So the teams will not agree.

Because MVP only applies in the second kind of work, a standard definition is not of much value. We want to empower each team to try its own way. We encourage (perhaps mandate) the use of the scientific process, but we let everything else vary.

As long as another lab could replicate your experiment based on its final write-up, we don't care how you got there.

# Culture change is an experimental process..

Which gets back to the first question: why are you trying for a standard definition for MVP?

  1. What problem are you really trying to solve?
  2. What assumptions are you making about that problem?
  3. What alternatives are there?
  4. What are the system effects of this problem? What are the key assumptions we make about root causes, constraints, and complicating factors? What is the riskiest one?
  5. What hypotheses could we test to see past assumptions to the true system?
  6. What experiment could we run to test those hypotheses? How would we measure that experiment so that we trusted its results and would change our assumptions?
  7. **Now run that**. It's an MVP.

And what is the process that makes culture experiments systematic? That allows us to run a small experiment every 2 days, experimenting our way to better teams? (Hint: it's retrospectives, but only if you use them to define an experiment, not just to gather data...)
