+++
id = "technique:ddq"
author = "Arlo"
+++

_Use Data-Driven Quality Improvement to fund and support you solving your team's most important quality challenges._

We all have quality problems we want to solve, but each of us has a different context and needs. Data-Driven Quality Improvement helps teams and leaders align to ensure that each team defines and attains its own most impactful quality improvements.

Use this guide to get started with concrete improvement today, then customize for your team. Avoid common anti-patterns like unnecessary uniformity, bias towards analysis, group-think, and waiting for approval.

### Sections

----------

{{< toc >}}

----------

## The Big Picture

![Shows the interaction between tactical and strategic thinking with area quality syncs](/img/technique/data-driven-quality/data-driven-quality-improvement.png)

There are 5 concepts to the Data-Driven Quality Improvement process. The **Strategic Loop** defines and executes **Improvement Targets** to improve your understanding of quality. The **Tactical Loop** defines and executes **Investments** to improve your quality. Leaders use the **Quality Sync** to support your Investments and provide feedback to improve your team's ability to own quality.

### Tactical Loop

This is the heart of Data-Driven Quality Improvement. In the tactical loop, a team defines investments, runs them, assesses the outcome, and keep any that achieve the objective.

{{% expanding-example id="tactical-loop" %}}

Team A spends a lot of time helping others fix bugs in shared code.

**Primary Improvement Target:** reduce time spent consulting on bugs.

In the first iteration, the team defines the following Investment:

* **Action:** cross team pairing to get more people up to speed on the shared code.
* **Duration:** 2 sprints (in parallel with other investments).
* **Failure criteria:** no reduction in time consulting on bugs.

Outcome:

Over the sprints, the team sees that the other teams are now handling easy bugs, but moderate or harder ones still require consulting, and the team feels that is unlikely to change without major investment. They also notice that the hardest bugs to resolve involve four particular classes.

Next Iteration:

Having completed one Tactical Loop iteration, the team now defines 3 new Investments (to be done in parallel) for the same Improvement Target:

1:

* **Action:** continue cross team pairing.
* **Duration:** until done.
* **Failure criteria:** we are seeing no change in number of investigation consultations done per sprint.
* **Completion criteria:** other teams can consistently complete an investigation that doesn't hit the 4 ugly classes.

2:

* **Action:** refactor those 4 classes for legibility and to learn them. As a result, find a rough design that would decompose at least a couple of those classes.
* **Duration:** 1 sprint (in parallel with other investments).
* **Failure criteria:** unable to see any way to decompose the classes.

3:

* **Action:** define a new investment (for the following cycle) to break up some of those four classes into parts that can each be owned by one team.
* **Duration:** 1 sprint (in parallel).
* **Completion criteria:** design changes are tasked out, with a refactoring plan to get there incrementally. Most impactful (based on number of consults needed for defects) responsibilities will be refactored out first.

{{% /expanding-example %}}

### Strategic Loop

After the Tactical Loop is executing reasonably well, the Strategic Loop allows the team to continually re-assess its context and adjust its quality goals as needed.

{{% expanding-example id="strategic-loop" %}}

Team B currently feels they spend all their time struggling to check in. This delay is the largest waste in their development cycle.

In the first iteration of the loop, the team decides to create a value-stream map for a typical story. They place guesses for the amount of delay caused by various activities and more guesses for the probability of various risks happening. This includes the check-in delays, but also a whole bunch of others.

Then they decide to try to mitigate the impact of check-in delays. They measure what they spend time on and see that it is mostly waiting for code reviews, doing code reviews, and needing to wait for full builds in order to do the next piece of work.

They start trying a series of investments over multiple tactical loop iterations: feature branches, smaller code reviews, comments that indicate risk levels, pairing, code pre-views. Some work, some don't.

During the first iteration they also put in measurement for the cost of delay due to commits and for a number of other delays. As they progress, they are surprised to see that they actually spend less time on commit delays than they thought. They have a greater delay in trying to get a decision made when they discover that the original UX design for the feature won't work. So, having done a couple cycles on the Tactical Loop, they can now see they are solving the wrong problem!

They stop any further experiments on improving check-in delays, and instead choose to focus on their higher-impact problem. But they keep monitoring both delays (and a bunch of others), so they'll know when to come back to focus on commit time.

{{% /expanding-example %}}

### Quality Sync

This discussion supports the teams in improving quality. It is a forum for teams to learn how to make quality needs visible, to show their understanding, plans, and results, and to see opportunities to learn from each other. This provides a concrete structure for leaders to enable teams to do the right thing.

## Step 1: Getting Started

First, teams will start with a simplified form of Data-Driven Quality Improvement. We leave out the strategic loop and pre-define the first experiment.

![](img/starting-components.png)

[Getting Started with Quality Improvement](starting/) helps an area start its Quality Syncs well, and helps teams in that area start making observable improvements in their quality.

## But Different Teams Face Different Problems

Here are some examples:

* Some teams **add automated tests**, because their manual test pass misses regressions in less-obvious parts of the product.
* Others **delete automated tests**, because test overcoverage means many unrelated tests fail when something changes, and it is impossible to distinguish failures from false positives.
* Others **replace strings with strong types**, because they commonly face invalid data bugs.
* Others **make their dependencies explict**, because they commonly face spooky action at a distance bugs.
* And some **delegate a problem to technical leaders and management**, because they are stewards for a large directory that everyone puts a couple files in, which makes it impossible to steward well, and any solution requires either resourcing a dedicated team or changing a design that impacts >30% of teams.

Data-driven Quality Improvement needs to allow each team to do the right thing, while also allowing leaders to identify which teams are solving their problems well and which need help solving their problems.

## Step 2: Customize

Once the Tactical Loop is working, each team adds the Strategic Loop. The Strategic Loop lets each team continually inspect and adapt, focusing on its specific obstacles.

![](img/customizing-components.png)

[Customizing Quality Improvement](customizing/) helps teams make the right improvements for their context and helps areas see that each team is making good choices based on their own data, without requiring all teams to make the same choices.

{{% grid-three %}}

{{% grid-item %}}

**Get Help**

* Request **[Coaching](#url-tbd)**
* Slack Channel - [#channel-tbd](#url-tbd)
* Request a **[Workshop](#url-tbd)**

{{% /grid-item %}}

{{% grid-item %}}

**Data-Driven Quality Improvement**

1. [Getting Started with Quality Improvement](starting/)
2. [Customize Quality Improvement for your Team](customizing/)
3. [Data-driven Quality Improvement FAQ](faq/)

{{% /grid-item %}}

{{% grid-item %}}

**Related Resources**

* Your company progress tracking goes here

{{% /grid-item %}}

{{% /grid-three %}}
