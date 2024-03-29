---
id: 71
title: Agile vs Design
date: 2012-05-10T07:55:18+00:00
author: Arlo
layout: post
guid: http://arlobelshee.com/?p=71
permalink: /agile-vs-design/
tt_tweeted:
  - http://twitter.com/arlobelshee/status/200603732994568192
tt_tweeted_date:
  - 2012-05-10 15:10:31
category: techies
tags:
  - Agile
  - design
  - feedback
---
An overheard conversation at work got me thinking while I was headed home. I’ve now got to send some of those thoughts your way.

The one guy was arguing against agile on the basis that it "throws the baby out with the bathwater" with respect to design. Me made several commonly-believed statements. Some are true, some are partially true, and some are flat false.<!--more--> These statements are:

  * There is still a role for design when trying to release quickly (true).
  * Agile throws design out the window (mostly false).
  * Agile only works with 5 people, in one room (false).
  * Agile ships prototypes, not real code (false, but an easy misinterpretation from a true statement: agile teams always ship the simplest thing that could possibly give them the feedback they need).

Assuming the above represents his position, I would respond as follows.

First, I agree that there is a strong role for design when you are trying to release quickly. It can help with communications and understanding. All agile processes highly value these things. Agile doesn’t eliminate design.

Much to the contrary: the entire design patterns movement arose from the same people as did Extreme Programming, at the same time. TDD and design for testability also came into software from the Agile community, as did the software craftsmanship movement and the “tell don’t ask” and "no setters" approaches to OO design. Go to a technical agile conference and you will hear a lot about design. The agile community values design a lot; we just think about it differently.

## Iterative Building

In agile teams, the goal is always to “do the absolute best implementation you possibly can of absolutely the smallest scope you possibly can.” This is more tersely stated as "do one thing really well, then iterate." The process is simple (and pretty much identical to the planning horizon concept in emergency management):

  1. **Do one thing:** Pick a small problem. It has to be big enough to validate a single assumption but no bigger.
  2. **Really well:** Implement it to the maximum of my capability. But don’t expand the scope at all. Assume that this problem is the entire scope of the product; look no further.
  3. **Then iterate:** Get feedback. See whether the assumption is correct & record the answer. Whether or not it is, update my thinking and return to step 1.

Over time I change the way I get feedback. At first I just ask my customer representative & testers. Then I ask a customer advisory board (CAB). Then I create a beta and measure whether people ask to join the beta --- and what they do with your product and who they recommend it to. Then I ask them to pay and I measure who will pay for what. Perhaps I can then improve the ability to measure by paying --- micro-payments that work?

At each step, I am simply trying to get more accurate feedback. Eventually people start paying me to give feedback, which is a good thing. But from the team’s perspective the validation or repudiation of assumptions is the most valuable thing.

## What does this mean for quality?

Well, it means that each step is fully designed, documented, supported, and production worthy --- for whatever audience expectations exist.

When I’m showing to my manager and testers, I just need enough docs that my teammates can understand how to use it. I only need it to run on their dev box.

When I get to the CAB, I need enough support and docs that the CAB contacts (not on my team) can take a meeting and explain things---without dragging in one of my devs. And I need it working on live servers without any bugs.

## What does this mean for design?

The design follows a similar progression, but it is the place where I record the learning that has happened (validated and violated assumptions) so that I can incorporate those in future decisions. At first, I don’t have any learnings. So I don’t have a design. I certainly shouldn’t be trying to lock down interfaces. I don’t know which of my assumptions are valid.

Over time, I learn which assumptions are true in my domain. I learn how my domain really works. So I accrue high-level design. I start developing the [core entities and their interactions](http://en.wikipedia.org/wiki/Domain-driven_design). I start seeing the core theory of computation.

I store my design in lightweight media because I expect to improve it as I continue to get feedback and learn more. I use a 5 minute video of a chalk-talk plus a one-page picture. Cheap to update, and the constraints force me to get to the essence.

I don’t need any low-level design. The high-level design hits the general approach and the details that matter. The rest is guided by testability. I do the minimum necessary to ensure that the code is unit testable.

This requires that every business requirement be testable without an integration test. That forces cohesion. I force each unit to be tested without other units, and without mocks. That forces decoupling. I let each piece of the code use whatever local design achieves these goals, as long as it meets the high-level design.

Working this way, teams have scaled to hundreds or thousands of people. They've made releases hundreds of times per day. They've gotten bug rates down to one per month or so---with all bugs fixed within 12 hours. Agile certainly scales. But only when the team is highly disciplined, values design, and lives its values.

Agile teams simply recognize that design isn’t a phase to be done once early on and then protect from changes.

Design is the transcript of a continuous conversation between the code and the customer, with the dev team operating as translator.

It changes continually as the code learns to understand the customer better and better. It starts out blank. It grows quickly at first, and then gets deeper and more profound for a long time after that. It never assumes that it is complete --- just like no one can ever presume to fully understand a person, the code can never presume to fully understand the customer.

Or, well, that’s how I’d argue it. Feel free to comment if you want to talk more or think that my argument misses the mark.
