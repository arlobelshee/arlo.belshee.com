---
id: 153
title: "Architecture --- Scaling Design"
date: 2013-08-27T08:39:19+00:00
author: Arlo
layout: post
guid: http://arlobelshee.com/?p=153
permalink: /architecture-scaling-design/
category: techies
tags:
  - Agile
  - architecture
  - design
  - scaling
---
My position on architecture is different from most peoples'. My view works really well at scale (much better than the traditional view, in my experience), but it is very different.

I start with one traditional definition of architecture: _any decision that would be costly to change_. However, I also know that I (and those on my teams) learn quickly. Every problem that I found difficult at some point has later been found to be easy---once we learned more. This gets me to my final definition.

> Architecture is any decision you make that you are not yet smart enough to be able to change on a whim.

The best large systems have no architecture, under my definition, at all.

<!--more-->

Instead, these systems have good design. Good design comes from the following:

  * The cost and risk of local design change is low. Each design flaw, when found, will be cheaper and less risky to fix than to work around. **Disciplined Refactoring** (especially via tools) gives you this.
  * Each local team is empowered and able to execute arbitrary design changes. Ability comes from proficiency at local refactoring (the first bullet). Empowerment comes from your **org structure** and **source control sharing** practices.
  * Each design change is made by people with detailed knowledge, and in a way that will, over time, converge with other design changes. **Pairing** or **mobbing** give you this within any one team. **Encapsulation** and **marketplaces** reduce the need for this between teams. **Cross org networks** and **transparent, high-bandwidth communications** give you this between teams.
  * Design changes tend to be local. **Encapsulation**, **duplicate implementations**, and **independent teams** give you this.
  * The cost of integrating design change is low. **Single-branch development** and **ultra-high-frequency full-system integration** gives you this.

Good design techniques can eliminate all architecture in a system. This is harder to do as the number of people increases. It is easier to do as discipline (work tiny + prove it) increases (and errors decrease). It is easier to do as decentralization and transparency increases.

## Great. How do we get this design?

I could call on Conway's Law here. Most people would. But people are still creating architecture instead of design after more than a decade, so I'm going in a different direction.

First, I'm going to assume that we can deliver small software well in small teams. If this is a challenge in your organization, then go do Extreme Programming. It is a solved problem. There's a recipe for it, and those that follow the recipe _by the book for at least 3 months_ (I prefer James Shore's book) before they start customizing it get the same result every time. So if delivery is your challenge, just go fix it.

Now that your organization is able to reliably deliver single-team projects with high reliability, let's discuss larger projects. If you've done XP, at this point your organization consists of cross-functional teams of 8±2 people each. Each of these is delivering one or more products end-to-end. They ship to the market on the market cadence with almost no bugs. They each own a value stream, and each is generating value for your business (not necessarily revenue, but probably that too). They each produce well-designed software and can change that design whenever they want.

There is significant duplication of effort (inefficiency): often multiple teams will be doing the same thing. This is especially true with dev tools: each team has hand-crafted its own. Many utility classes will be re-implemented by multiple teams. Teams may copy and paste code from each other, but they don't share it.

In this fabled (but straightforward to attain) large company, there is not yet any way to ship huge projects. There is no way for the teams to come together to do something massive. So there are no large projects. But there are lots of small ones, each of  which is independently shippable, provides value to its customers, and is (hopefully) profitable.

## What is the effective architecture we have here?

In other words, what is hard to change?

Well, first let's look at the overall picture. We see complete independence. Lots of little apps. Looks a lot like an app marketplace, actually.

Pieces of business value for customers are discovered / invented in a decentralized fashion. This, with transparency of information in the organization, results in the maximum number and value of innovations (see SemCo, Dutch Sociocracies, Open Source ecosystem, and the ecosystem of mobile apps for examples. I think Amazon's internal marketplace of services is also an example, but have not seen it myself).

Each project guards its source from other projects. They don't have a way to share. This makes systemic changes both easier and harder.

Assume that we wanted to make a global change. For example, assume we were back in the time before cloud providers. Each app has been storing its data in different places. Now cloud providers enter the picture. We want to move all of our data to AWS in order to decrease our costs. There are hundreds or thousands of apps, and each does data in its own way. We have a lot of work to do.

However, we also have a lot of people to do that work. If we can convince everyone that it is worthwhile, then everyone will independently move their app to use AWS. Each change is easy, because there are no dependencies between apps. Everyone makes the change in a decentralized fashion, in their own timeframe. The ecosystem ends up making a gradual but rapid transition to the new storage provider. If it doesn't work for some teams, those teams don't move. This is a system that is very good at trying experiments.

But we glossed over the hard bit: getting everyone to make that shift. And the next shift. And the shift from 500 ways to do things to only 3, but where you have to pick the right one of the 3 for your context. So our architecture here is in a place that people don't think to look for it. It isn't in the code.

Our architecture is the time & effort it takes for the teams to take concerted action. Our architecture is *poor information exchange between teams*. It is the opacity that prevents each team from seeing what others do. And it is the lack of a system-wide decision-making approach (whether than be a charismatic leader with passionate ideas or a set of shared values and a shared understanding of the economics, or whatever else).

## So let's fix the architecture

Optimally, we want to replace this architecture with good design. Which means we need a final system that is flexible and which is also changeable by local action.

Well, good thing people have already found some (actually several) for just this situation. They've even tested them out in a business context.

As a reminder, the architecture bits to solve are:

  1. Hard to see what others are doing
  2. Hard to share efforts to reduce development costs (tools & code)
  3. Hard for information about successes and failures to flow between teams (hard to learn from each other)
  4. Hard to coordinate efforts to achieve larger objectives

Well, #2 sounds a lot like open source software to me. OSS communities solve this problem between companies; let's apply the same solution within the company. We just need to have a good, single repository. It needs to hold shared code, shared binary packages, and ways to communicate between producers and consumers. GitHub is a great solution. We can just ape it (better yet, use it).

#1 and #3 are susceptible to the same solution: working out loud. This means that the work products of each small team are located in a place where anyone in the organization can see them and (optimally) contribute to them---probably the same repository we use for our internal open source stuff. The conversations around those work products are held where anyone can join. Both conversations and products are searchable and maintain history. And each team curates its conversations and products, making the best stuff available to others in a condensed form (with back-links to the full detail).

This leaves #4. Interesting note: until this point, we have not yet needed any specific organization between teams at all. In fact, we had the same org structure and roles whether we assumed this to be a single massive organization or a marketplace of little app companies.

This is an organization where 100% of the people work on small, cross-functional XP teams directly delivering value into the marketplace and getting paid to do so. There are no managers or human cross-connections. There are communication systems (the working out loud stuff). Those allow each individual group to make local decisions based on non-local data. But we haven't needed anyone to staff those communication channels. After all, they just move data.

So how do we get #4? There are at least 3 options:

  * Charismatic people with clear broadcast channels (Apple led its app ecosystem this way)
  * Decision-making economics to define shared understanding of trade-off costs (Donald Reinertsen's books, and the teams which he describes, do this)
  * Decision-making process that transforms system problems into local ones (Sociocracies do this. So does James Shore's large-scale agile by using kanban to coordinate the work of XP teams)

Pick one. I don't care which. Personally, I love the third option (especially Sociocracies). I find the second pretty good. And I find the first problematic (charismatic people, like any other individuals, are more often wrong than right). But I'm an individual here and you all aren't, so you'll make a better decision than I would.

## So where are we now?

Each piece of value is delivered, full-stack, by a small team. These small teams have visibility into each other's work. They can choose to share efforts / code when that would speed them up (after including blocking costs). They can also choose to duplicate efforts when that would speed them up. Because they all refactor (aka design) all the time, they can reverse the make/buy decision at any time with tiny cost.

Such an organizational system results in a system-wide emergent design. Each part of the system can independently go in a new direction or continue to pursue its current direction, with approximately equal cost. There is no architecture, but there is design all the way up. The design is not the result of thinking by some small group of people who are isolated from the details of particular problems (even if you chose the Charismatic Leader option, since he only has influence, not control). It is the result of design thinking on an ongoing basis by every single person in the ecosystem. It tends towards very loose coupling (as each team is incented to isolate itself from others' problems) and very high cohesion (as each team has its own profit motive and seeks to deliver real business value, not just some technical component).

There is a small cost in efficiency. Parts of the ecosystem will be redoing work that others have already done. But there are huge gains in throughput and effectiveness (more stuff gets done per unit time, and more value gets delivered per unit time). Higher profit, with some duplicate labor.

And because each individual group is constantly re-evaluating and has a way to share work, the scope of each inefficiency is limited. If it gets large, then removing it becomes a profitable endeavor and someone creates a product to eliminate it. The system, as a whole, accepts small inefficiencies to maximize throughput and encapsulation, but guards against large inefficiencies.

## What this means for business

These ecosystems beat large projects nearly every time that we've seen them compete (read The Starfish and the Spider for a bunch of examples). Over time, I expect that to continue.

This is a disruptive change. The question for large companies  is how they can organize to start running internal ecosystems rather than large projects.

## Wait, I've seen this before...

Yup, this is the same advice I gave last week, in [Scaling Agile --- The Easy Way](http://arlobelshee.com/post/scaling-agile-the-easy-way "Scaling Agile – the Easy Way"). It's also describing one way to shift from [fluency at delivering to fluency at optimizing](http://agilefluency.com/ "Fluency model for agile companies.").

First you excel at shipping. Then you solve the few remaining problems by following your nose. Excelling at shipping locally gives you a powerful, decentralized ecosystem. Add transparency and decision support and you've got everything you need for a decentralized organization.

In the end scaling design to encompass large systems is exactly the same problem as enabling your business to optimize value (across multiple teams). Once you enable each team to do good design, your architecture is the organization. Not "your architecture reflects your organization" (a rephrasing of Conway's Law). Your architecture is your organization: the only hard decisions to reverse are the organizational problems.

So you fix those.
