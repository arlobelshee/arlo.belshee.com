---
id: 158
title: "Being Awesome Step 1: Stop Making Dumb Choices"
date: 2013-09-10T09:36:26+00:00
author: Arlo
layout: post
guid: http://arlobelshee.com/?p=158
permalink: /being-awesome-step-1-stop-making-dumb-choices/
category: techies
tags:
  - Agile
  - catalyst
  - champion
  - mind-shift
  - transitions
---
Most teams are perpetually only 3-6 months from being able to ship low-bug software when desired and delivering end-to-end business value out of each single team (making decoupling trivial).

But they choose to go a different, more costly direction.

They aren't dumb. So why do they repeatedly make a dumb decision? And what can we do about it (whether we are on such a team or not)?<!--more-->

## First, what are we talking about here?

We now have a decades-old, battle-tested, well-known way to produce better software. It won't help you build the right thing, but it will help you build anything better (lower cost, lower risk, higher quality, and higher predictability). We have explored it from every angle, and have not found a downside. We've not even found any specific context in which there is a downside.

The only "downside" is that it requires changing the way devs work. That transition takes time (about 3-6 months) and reduces productivity slightly (about 40% for the first ~2 months, then back to normal productivity until productivity gains start kicking in at around ~6 months). You have to pay this cost on a per-team basis, not on a per-product basis. So even companies that do small products gain large long-term benefits for a small, short-term investment.

What is this magical method? I call it Adaptive Engineering. It is the set of interdependent practices at the heart of XP that relate to writing software. It excludes the XP practices that relate to planning software or knowing what the customers want (also useful stuff, but can be done separately).

  * Constant Informal Learning & Discipline (Sit Together + Pair Programming or Mob Programming)
  * Check Your Work Quickly (all 7 levels of TDD, Demos)
  * Reduce Cost of Change (Disciplined Refactoring, Emergent Design, etc)
  * Empower the Team to Do What's Right (Action-oriented Retrospectives, Cross-Functional Team, etc)
  * Work Tiny (the measure to use when making improvements)

That's it.

## OK, assume we agree that works. How do we get there without boiling the ocean?

None of these "practices" are actually one practice. They are each a series of practices that build on each other. For example, TDD has 7 distinct practices / levels that I have identified. It is actually a series of 7 practices, not a single practice.

It takes years to master each series. The first practice in each series can be mastered in a week or less, and the second in about a month. Inside of 3 months we can have mastery of the first couple practices in each chain. It can take years to master any one chain fully, but we get value starting from the first couple steps.

This is the secret to transitioning safely.

Don't bring in the practices in one series at a time. The series depend on each other. You will fail (or at least take a long time to succeed). This approach would attempt to bring in 5-10 practices at once (the various steps in the series), many of which the team is not yet ready to learn. And it would bring them in without support.

Instead, bring in the practices one level at a time. Bring in all the level 1 practices, then the next level, and so on (at higher levels, this gets a little more complicated, as my [Agile Engineering Fluency Stages of Practice map](http://bit.ly/AgileEngineeringStages) ([pdf](http://bit.ly/AgileEngineeringStagesPdf)) illustrates). You will still be bringing in 5-7 practices at once, but they will all be designed to work together. They are all things the team is ready to learn, and they are all supported by other things the team is doing.

## If this is so well-known and easy, why haven't teams done it?

Let's ask them. When I do, I usually get one of the following answers:

  * Be practical: "That sounds great in theory, but in the real world it would never work."
  * We're special: "OK, I see how that would work for other teams, but it would never work for our team."
  * We're helpless: "That's a great place to be and I'd love to be there. But we've got legacy code; we can't afford to get there from here."
  * Too busy to improve: "Great idea, but we're under too much pressure right now. We don't have time to improve our productivity --- we have to produce. Perhaps later (which will never come)."

And how have we responded to these in the past? One of two ways:

  * Directly answer the point they raised. Usually by contradicting it with more assertions.
  * Try to teach them some skill (the one which would invalidate their point, or TDD if we don't have a better idea).

Most people trying to help someone adopt any new practice go for the practice directly (code retreats), they talk about values and then try to use those to drive the practice (Scrum training), or they try to set up a system that requires a change and hope that makes people open to change (require shipping on a short cadence or change the planning process).

None of these work consistently.

I accidentally hit on an insight last year that does work: Mindshifts + safety.

First, a big part of safety is helping teams see that others have gone before. Every single team that has successfully transitioned has started by stating one (or usually all) of the above reasons to fail. I answer the objections by telling specific stories that show that this team is neither alone nor special. Sure they have their own context, but even that is very similar to the context of some large subset of teams who have gone before.

I assume that the team wants to get better, management is fully aware that better approaches exist, and each skill that is needed is already known by some IC on the team (a different one for each skill). The challenge is that the system as a whole is preventing forward motion. Everyone wants to move; no one can cause it to happen.

## Unlocking the system

Movement seems to happen very quickly as soon as 2 criteria are met:

  * Everyone wants to make a change to solve the same problem.
  * Each person feels that it will be at least as safe to make the change as to keep going with the current approach.

These are obvious & you can find them in any change management book. They are also hard to define, which makes them un-actionable.

Let's admit that the people changing are all humans, and bring these to practical monkey space.

  * Each person needs to look around the room and see all the other monkeys that could (and have in the past) threatened / beaten them for trying to make things better. This includes both management and individual contributors. It includes everyone they will be working with.
  * They need to hear the change proposed and see those monkeys nod. Each monkey needs to watch the other monkeys decide, all together and at once, to go the new way.

Now we have real safety. Going with the group and making the change is the obvious, safe choice. We have second-order safety: not only will it generally be safe to act in the new way, but if we find an influence that would make the old way safer, we can trust all the other monkeys to gang up on the threat and change it so that the new way is safer.

## That's all?

These days, yes. A change agent on technical practices used to have to bring in a ton of skill building. Now you already have someone on the team who knows the skill. You don't have to teach it; you just have to unlock the ability of the team to learn from each other.

There is one more thing the team needs: mind-shifts. The team is now moving & they have a ton of information available. But how can they choose among that sea of information and decide where to go? Their experience is with the old way of doing things, and will tend to drag them towards old (planning-centric) approaches.

Someone needs to alter the criteria that the team uses to evaluate incoming options.

This can be the change agent. The change agent can also point to a champion. In any case, the team needs to find someone it can trust. This person needs to:

  1. Listen before speaking.
  2. Understand the team's circumstance and give evidence of that understanding.
  3. Distill complex topics into simple rules that the team can use to evaluate options.
  4. Be able to tie specific changes in behavior to specific improvements in capability to achieve business outcomes, in both directions (performance chain analysis).
  5. Not take responsibility for the outcome away from the team.

Lots of people can do the middle three. The first and last are the hard ones. If you want more specifics, read [The Starfish and the Spider](http://www.starfishandspider.com/). The change agent is the catalyst; he (actually usually she---in the US, women are better trained at this) understands group emotions and make change possible. The champion is simply a voice that gives direction to that change.

And if you want to know the series of mind-shifts that I recommend a team execute, talk with me (especially if you work at my company). Perhaps I'll even get it into a blog entry someday.
