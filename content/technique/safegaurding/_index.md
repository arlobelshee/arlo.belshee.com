+++
id = "technique:safeguarding"
author = "Arlo"
+++

_Avoid RCA anti-patterns and ship incremental improvements that make it safer to code._

Safeguarding is a powerful habit that can help you identify factors that contributed to creating a defect and to make incremental improvements that make it safer to code over time.

Use this guide to improve your ability to address underlying hazards and avoid common anti-patterns like over-investing in improvements, deciding to 'be more careful,' or over-focusing on tests.

### Sections

----------

{{< toc >}}

----------

## The Big Picture



--------

## Step 1. Get Ready (15 min.)

After the defect is fixed and tests have been added to prevent regression, create a Hazard identification item and add it to your sprint. Additionally, create a Google doc (from the Safeguarding template) for real-time-collaborative-editing use in your meeting.

{{% tip %}}

Remember to invite everyone involved and needed to schedule the work and remind them to bring a laptop.

{{% /tip %}}

{{% guidance kind="how-to" title="Create a Hazard identification item" verb="Directions" %}}

From your Defect work item, find the Safeguarding tab: ![](/img/technique/safeguarding/locate-hazards.png)

Create a Hazard identification work item from there: ![](/img/technique/safeguarding/create-hazards.png)

{{% /guidance %}}

{{% guidance kind="how-to" title="Create a Safeguarding document" verb="Directions" %}}

![](/img/technique/safeguarding/create-document-from-template.png)

1. Navigate to the drive folder you want to be your team's Safeguarding collection
2. ...Directions go here.

Now you can create new Safeguarding documents from the template by clicking on the button on the page and they will be automatically added to your team's collection.

{{% /guidance %}}

Choose a facilitator for the Safeguarding session.

Add a summary and a link to the defect but don't fill out anything in advance. Creating the page together will increase the insight and collaboration.

Share the Safeguarding document link and invite the right people to a 30 minute meeting. Try to hold the session within a couple days of resolving the defect, so we don't forget what happened. **Remind everyone to bring a laptop so you can collaboratively edit.**

{{% guidance kind="how-to" title="Meeting attendees and duration" verb="Consider" %}}

The first meeting will take 45-60 minutes, and it helps to have a trained facilitator. After 2-3, the meeting will regularly complete in 25-30 minutes.

Invite all those who need to provide info about hazards, will implement safeguards, or could obstruct executing safeguards if they disagreed. Examples:

* Bug writers & code reviewers
* Bug finder
* People on other teams if relevant
* Managers & Product Owners (until they trust the team to pick an appropriate budget)
* (Initially) Uninvolved people on the team, so they can learn how to do a Safeguarding session by doing.

{{% /guidance %}}

--------

## Step 2. Collaborative Hazard Analysis (10 min.)

At the beginning of the Safeguarding session, choose a facilitator then set a timer for 10 minutes and get started collaboratively editing the Safeguarding page you created, adding items to the Hazards section **silently**.

{{% tip %}}

Benefits of silent collaborative editing:

* Work in parallel and save time
* Equalizes participation
* Prevents rat-holing

{{% /tip %}}

{{% guidance kind="how-to" title="Discover effective contributing factors" verb="Start with these questions" %}}

The first is the most powerful, so spend most of your time there, but do use all 3.

* What set us up to make the defect? What hazards set up a well-meaning, careful developer to make the original mistake?
* After the bug was written, what made this bug harder to test for / discover than we would like? Consider code, test systems, how we approach testing, skills, and other factors.
* Once we had found the symptom, what factors made it harder to triage and investigate? What information was not available to the right person at the right time?

{{% /guidance %}}

Good Root Causes should be within your control, focus on system issues that contributed to the human errors, and include things other than tests. While the team is filling out the document, facilitators can help the team uncover better contributing factors by asking questions that help shift thinking from common anti-patterns.

{{% warning %}}

Watch out for common anti-patterns and ask questions to uncover better root causes.

{{% /warning %}}

### Questions to Uncover Better Hazards

{{% guidance kind="anti-pattern" title="Stopping at identifying a process that wasn't followed." verb="Ask" %}}

Can this process be automated or made easier to do without thought?

{{% /guidance %}}

{{% guidance kind="anti-pattern" title="Deciding to be more careful instead of changing something about the system." verb="Ask" %}}

This mistake was made by a careful, well-meaning, informed developer. What about the system was so hazardous that it caused even such a person to make a mistake?

{{% /guidance %}}

{{% guidance kind="anti-pattern" title="Focusing on tests as the solution." verb="Ask" %}}

What was the state when the defect occurred and why is that state allowed at all?

How could you change design to prevent the bad state at compile-time?

{{% /guidance %}}

{{% guidance kind="anti-pattern" title=">Defining tests narrowly." verb="Ask" %}}

How could you detect this category of problems universally?

{{% /guidance %}}

{{% guidance kind="anti-pattern" title="Missing the role non-modular design played." verb="Ask" %}}

Why do these two parts have to interact?

{{% /guidance %}}

----------

## Step 3. Pick Most Significant Hazards (3 min.)

From all the contributing causes the team generated, vote to pick the ones that fixing would significantly reduce the likelihood of similar bugs in the future. Vote by putting your initials by an item; initial as many as you want.

Bold or change the color of items with many votes and copy them to the Hazards section.

{{% tip %}}

Don't worry if a cause doesn't seem solvable, Safeguards will focus on making progress.

{{% /tip %}}

----------

## Step 4. Set the Safeguard Timebox (5 min.)

Start by asking: **was the total internal + external impact of this bug small, medium, or large?** Have everyone hold up 1, 2, or 3 fingers. Pick the most common answer. Then propose an initial time box:

{{% tip %}}

You will not be trying to fully address all key Hazards in this time-box. You will use it to make incremental progress, reducing the risk some.

{{% /tip %}}

* Small = 1/2 person-day
* Medium = 2 person-days
* Large = person-sprint

Use [thumb-voting and decider protocol](http://aigamedev.com/open/article/decider-protocol/) on the proposal. If there are no thumbs down and at least 50% thumbs up, the proposal passes. Otherwise discuss how the proposal could be modified and re-vote to pass it.

{{% tip %}}

Use [thumb-voting and decider protocol](http://aigamedev.com/open/article/decider-protocol/) to streamline discussion and decision making.

{{% /tip %}}

Record the final Safeguard time-box in the Safeguard document.

{{% guidance kind="anti-pattern" title="Discussing Safeguards before setting the box." verb="Interrupt with" %}}

* The Safeguards will not **solve** the root cause. They will make it **less bad**.
* The time-box allows us to make incremental progress this sprint without having to do expensive budgeting.
* If another bug comes up from the same cause again, then we'll more Safeguarding on that cause.
* This guides our investment, over time, to focus on whatever generates the most (and most impactful) bugs.
* The budget depends on how important the hazard is to fix, not the cost of the fix. It determines the rate at which we address the hazard over time.
* So, was this bug's impact small, medium, or large?
* How much time did we spend finding and fixing this bug?

{{% /guidance %}}

----------

## Step 5. Identify Safeguards (7 min.)

Set a timer for 7 minutes and silently add Safeguard ideas under the most significant Hazards. Each should be scoped to be smaller than **1/4 of the time-box**.

{{% tip %}}

Try on the [Bias toward Action](https://dschool-old.stanford.edu/groups/k12/wiki/548fb/bias_toward_action.html) mindset when discussing Safeguards. Think of trying a small improvement as a way to learn, make progress, and build agreement.

{{% /tip %}}

Safeguards are:

* **Targeted** to only problems we have as they come up.
* **Incremental** improvements that build up over time.
* **Small enough** to finish several within our budget.
* **Actionable** by the people in the room.
* Improvements to the **System**, not to the regression test.

Have each person vote with initials on the Safeguards they endorse. From that information, make a proposal that you add those Safeguards, with the total time-box, to the current sprint right now. Use [thumb-voting and decider protocol](http://aigamedev.com/open/article/decider-protocol/) to check for the final group approval.

## Step 6. After the Meeting

{{% tip %}}


{{% /tip %}}

{{% guidance kind="how-to" title="Record Results into Hazards item" verb="Directions" %}}

Copy the contents of the Safeguards section into the Safeguard item. Link to your full document.

Record the Safeguard time-box (from step 4) in person-half-days onto the work item.

{{% /guidance %}}

{{% guidance kind="how-to" title="Create Safeguard Items" verb="Directions" %}}

Create a Safeguard item for each approved Safeguard. Link them to the Hazards identification item. Add them to the current sprint.

The intent is to complete Safeguards within 1-2 weeks of fixing the defect.

From your Hazards identification work item, use _Add link_ and select _New item_:

![](/img/technique/safeguarding/add-safeguard.png)

The Description of the Safeguard should be about two things:

1. What is the Hazard this is safeguarding?
2. What is the work that's being done?

{{% /guidance %}}

Send out emails or other notifications to anyone who needs to be informed, such as managers who didn't attend the meeting.

To analyze how you did, you can use [Assessing the Quality of Your Safeguarding](assessing/).

{{% warning %}}

If you run into someone blocking work on the Safeguards, that's a sign they should be attending the Safeguarding meeting.

{{% /warning %}}


----------

## Variations and More

* Do Safeguards on positive successes too! When you are surprised by your success, Safeguard it! Identify something that could be made stronger.
