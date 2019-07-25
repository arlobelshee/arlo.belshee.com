+++
id = "technique:knowability-planning"
author = "Arlo"
+++

_Support ongoing funding and prioritization choices even though different projects have different degrees of unknowns._

Different features have different degrees of knowability. During execution, some features have clear, known work left to do, some have clear unknowns that are addressed over time, and some perpetually have an unknown number of unknowns. Each category needs to be planned, managed, and funded in a different manner. A project often has features of each kind. Knowability-Based Planning allows your team to get a cohesive view of what is going on, and know when to make what kinds of promises and decisions in the face of uncertainty.

This guide helps you categorize your features, fund, plan, and manage each of them appropriately, and get a cohesive picture of the whole. Avoid common anti-patterns such as using roadmaps, burn-down charts, milestones, best practices, or using Agile for features where efficiency matters.

[Map of project management needs to solutions by project kind](map-project-needs-to-solutions-by-kind)

**Runbooks**

* [Running an Obvious Project (Runbook)](#need-page)
* [Running a Complicated-Known Project (Runbook)](#need-page)
* [Running a Complicated-Unknown Project (Runbook)](#need-page)
* [Running a Complex Project (Runbook)](#need-page)
* [Managing a Portfolio of Different Project Types (Runbook)](#need-page)

----

### Sections

{{< toc >}}

----

## The Big Picture

Trend of estimated work remaining over time ([in viz](https://public.tableau.com/profile/arlo.belshee#!/vizhome/how-projects-progress-over-time/Progressionovertime)):

{{% flowing %}}

{{< img-with-caption url="obvious-over-time.png" caption="Obvious" >}}

{{< img-with-caption url="complicated-over-time.png" caption="Complicated" >}}

{{< img-with-caption url="complex-over-time.png" caption="Complex" >}}

{{% /flowing %}}

Actual final cost of project, by initial scope:

{{% flowing %}}

{{< img-with-caption url="obvious-cost-vs-scope.png" caption="Obvious" >}}

{{< img-with-caption url="complicated-cost-vs-scope.png" caption="Complicated" subcaption="(sorted by scope)" >}}

{{< img-with-caption url="complicated-cost-vs-model.png" caption="Complicated" subcaption="(sorted by best-fit model)" >}}

{{< img-with-caption url="complex-cost-vs-scope.png" caption="Complex" subcaption="(sorted by anything)" >}}

{{% /flowing %}}

_Note: all 7 images use bogus data to characterize the behavior of projects._

## Step 1: Categorize Each Feature

1. Is it Obvious, Complicated, or Complex?
2. If it is Complicated, what expertise do you need and do you have it?

Note: a feature can shift right for any of 3 reasons:

* **Inherent** complexity. The problem itself is inherently more complex.

    For example, predicting the weather includes inherent randomness.

* **Incidental** complexity. We have made the problem harder by means of our current or past solutions.

    For example, technical debt in a code-base adds randomness and expertise requirements to every task. Each layer of debt also masks other debt, so you can't know what debts are in the next layer in until you address those in the first layer. You can't predict when this will complete.

* **Environmental** complexity. Something outside of us randomizes the problem space.

    For example, a competitor that releases more frequently than us can change the problem definition on us frequently by changing customer expectations.

## Step 2: Plan & Fund Each Feature Appropriately

How to best manage each kind of feature:

{{% flowing cssclass="proj-management-overview" %}}

{{% flow-item %}}

![Use best practices](img/best-practices.jpg)

#### Obvious

_Key problem: minimize cost \
to develop a target solution._

Use design docs to clarify problem & align.

Look for best practices.

Manage to dates, using \
roadmaps, gantt charts, and velocity.

{{% /flow-item %}}

{{% flow-item %}}

![Surround experts with helpers](img/surgery-team.jpg)

#### Complicated-Known (with expertise)

_Key problem: engineer a solution \
to a defined problem._

Surround an expert with helpers, \
and cross-train those helpers.

Use the engineering design process.

Iterative development \
(Scrum, but not Agile).

Manage your risk profile, \
by probability distribution.

{{% /flow-item %}}

{{% flow-item %}}

![Do a discovery phase](img/discovery-phase.jpg)

#### Complicated-Unknown (missing expertise)

_Key problem: develop expertise,<br />then change approach._

First create expertise \
(as if the problem was Complex)

Then solve \
(It is now Complicated-Known)

{{% /flow-item %}}

{{% flow-item %}}

![Use Agile methods](img/lean-startup-feedback-loop.png)

#### Complex

_Key problem: respond quickly<br />to continuous change._

Use Agile (Scrum or other).

Build, Measure, Learn - fast!

Manage as a value stream, \
not a project.

Use throughput accounting \
to maximize RoI.

{{% /flow-item %}}

{{% /flowing %}}


* Obvious problems have best practices and known solutions. If we agree on the problem, then we generally agree on the solution.
* Complicated problems have multiple good models, depending on specific problem characteristics. Experts can analyze a situation, pick (or extend) the right models, and engineer a good solution.
* Complex problems depend on the context in un-knowable ways. Patterns exist, but they change over time or other context. The project can never end, because any solution that is perfect for today will become terrible at some point.

### Obvious Problems

This will be a project (known scope), managed by dates.

There is a straightforward mapping between work done and value delivered. You will know the date and scope from fairly early on, and can make trade-offs in terms of work vs cost.

{{% guidance kind="how-to" verb="Planning" %}}

Identify all the work that needs to get done. You can either identify everything at once, or just identify all the big chunks and then elaborate each big chunk over time.

In any case, plan to execute for 3 weeks without a known end date. Plan a go/no-go decision for the middle of week 4.

Estimate your work in relative size units. Measure your velocity in the first 3 weeks to determine how those units map to team-weeks (you will use a 3-week rolling average for velocity from here on out).

If you are using incremental elaboration, then use 2 different relative units: one for the large chunks that you haven't broken down yet, and another one for the smaller chunks that you actually work on and deliver. Measure two different velocities.

Be ready for the go/no-go decision meeting with a date prediction and a list of work expected by that date (alternatively, with multiple such, if the work has natural phases or priority levels and you want to offer more funding options). Predicted date = today + sum(remaining broken-down work in relative units) * most recent broken-down velocity + sum(remaining large-chunk work in relative units) * most recent large-chunk velocity.

{{% /guidance %}}

{{% guidance kind="how-to" verb="Funding and Governance" %}}

Prioritize this against other knowable work. Fund the most important project(s) for 3 weeks so that the team can pin down key unknowns (such as how they work together and their typical velocity).

Make a go/no-go decision during week 4. If no-go, then keep the team together and have them take the next item on the list.

Obvious work is usually low-value (because anyone could do it), so look for ways to cut scope or buy instead of build.

Request estimates in dates, and govern the project by date.

{{% /guidance %}}

### Complicated-Known Problems

This will be a project (known problem definition), managed by probability distributions. It will have an end date and end scope, but you won't actually know either until the project is more than half-way complete.

The mapping between value and work is knowable to experts, but not to everyone. Therefore you will make trade-offs in terms of performance envelopes, outcome measures (including cost), and probability distributions.

{{% guidance kind="how-to" verb="Planning" %}}

Make sure your experts are available for the whole project. Don't try to start without them. Other people could be added later, but the experts really need to be there the whole time. Refuse to start the project until you can ensure experts access.

Make sure your plans include cross-training, to develop secondary experts. This will cost you time. It will also mitigate risk --- losing an expert mid-stream will greatly hamper this kind of project. Make sure to cross-train on each area of expertise. Pairing and mobbing are effective & efficient ways to cross-train; having experts explain things (lecture, whiteboard, code review) is not.

Plan to have your experts doing analysis and updating models throughout, as well as doing execution work. Also plan to have a number of non-experts doing more execution work, as well as feeding data back to experts. Decide how you are going to set up the communication flows for the various kinds of info you will need. This includes:

* Current models and plans.
* Current work based on those models, tracked back to the model - so we know what to change when the model changes or what part of the model to change when work has an unexpected result.
* Unexpected outcomes and data - things that indicate the model needs adjusting or replacement (aka, the expert was wrong).

Make sure to set a culture of challenging the experts. These projects will naturally create resistance to challenge those with obviously-critical expertise. Plan how you are going to look out for that and some ways to address it when it arises.

Expect that the problem will start out very fuzzy, and only gain predictability over time. Ask for all estimates in probability distributions. Refuse to accept or give an estimate for anything in terms of a date (or even a date range). Keep the language in probabilities, no matter what x-axis you are using (even scope comes in a probability distribution, as you will both find and remove stuff along the way).

Expect that probability distributions on all axes will collapse together, over time. Therefore, plan for a plan. But not in terms of dates: plan in terms of shape of the distribution. For example, put milestones like "we have an initial scope distribution we could talk about," "we have evidence that we've worked through more than 50% of the known unknowns, and are seeing rapid decrease in rate of new unknowns per week," and "the probability distribution has collapsed to the point that the standard-deviation is within +/- 5% of the median." Communicate progress in terms of which of those have been hit, or about how you look against the next one ("we are finding about 1-2 new unknowns per week, and have currently addressed about 1/3 as many as we currently know. Based on this arrival rate and a linear regression in unknown arrival rate, I'd guess that we have identified about 60% of the unknowns we will eventually see").

Set expectations that this will be the form of your plan.

{{% /guidance %}}

{{% guidance kind="how-to" verb="Funding and Governance" %}}

Make sure you retain your expertise. Explicitly fund cross-training, so you can lose experts without losing expertise.

Be present throughout the project. Expect to make several partial funding decisions along the way, as the experts figure out the real costs.

Request estimates in probability distributions, and govern the project by variability. Ensure that the probability distribution is narrowing over time, but don't be surprised if the median shifts around.

{{% /guidance %}}

### Complicated-Unknown Problems

This will have two phases. The first will look a lot like a Complex problem (but with an arbitrarily-chosen end date). The second will be a Complicated-Known problem.

{{% guidance kind="how-to" verb="Planning" %}}



{{% /guidance %}}

{{% guidance kind="how-to" verb="Funding and Governance" %}}

Fund phase 1 like you would a Complex problem, but with a fixed date. Expect them to build a real, working system that addresses the highest risks and exposes the most unknowns, not just a plan or analysis. Move the project to another team if they address phase 1 like a Complicated problem.

Expect to cancel many projects during or at the end of phase 1. Once you develop sufficient expertise, many projects that used to look like good ideas will no longer be viable. Celebrate teams who kill projects this early, and give them a new one.

Fund and govern phase 2 exactly like a Complicated-Known problem, as you now have that expertise.

{{% /guidance %}}

### Complex Problems

This will be a continuous flow of value (not a project - known value function, but unknown set of problems), managed by cash flow or throughput accounting.

There is no mapping between work and value: some work has positive value, some negative, and you can't tell which is which until you try them and measure. You will be running an ongoing experiment, updating a set of models, data, and assumptions as you go. You will make trade-off decisions between experiments based on past data, and will still regularly choose the wrong experiment to run first.

{{% guidance kind="how-to" verb="Planning" %}}



{{% /guidance %}}

{{% guidance kind="how-to" verb="Funding and Governance" %}}

Plan to fund this as a stream, not a project. You will adjust funding up or down over time based on the value returned. If you stop funding, expect return to drop over time as the context changes away from the feature.

Fund one increment at a time. Continue the project as long as enough increments are profitable. Expect some increments to deliver 0 value. Expect some to actually be negative value, then rolled back so that they deliver 0.

Stop when further development is no longer profitable. Shift your strategy to a "cash cow" business --- extract revenue with minimal investment, while attempting to replace the market with a new one.

Govern the project by visibility. Expect the team to make the current state and context visible at all times (through working software + business and ops data). Expect to see experiments that succeed and others that fail. Expect about 1/3 of all features to be kept, while the others are built enough to sense and identify that they are not worth having, so rolled back.

{{% /guidance %}}


## Step 3: Manage &amp; Communicate Each Feature Appropriately

## Step 4: Combine Multiple Features into a Cohesive View
