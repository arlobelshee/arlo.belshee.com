---
id: 35
title: "Architecture That Doesn't Make Arlo Sad"
date: 2011-05-24T07:34:05+00:00
author: Arlo
layout: post
guid: http://arlobelshee.com/?p=35
permalink: /architecture-that-doesnt-make-arlo-sad/
tt_tweeted:
  - http://twitter.com/arlobelshee/status/73034158800240640
tt_tweeted_date:
  - 2011-05-24 14:34:35
category: techies
tags:
  - architecture
  - loose coupling
  - vertical slices
---
Layers make Arlo a [Sad Panda](http://www.dailytravelphotos.com/images/2009/090204_wulong_sichuan_china_sad_panda_bear_tree_top_cute_IMG_4765.jpg "So sad!"). They result from, and reinforce, thinking of the product in terms of technical components. They make it hard to vertical-slice the problem.

So what pattern is the architectural correlate for planning and building in vertical slices? This question makes sense on the surface, seems nonsensical once you get to details, and then, I think makes sense again once you go deep. Or maybe that's just oxygen narcosis.<!--more-->

After all, building in thin vertical slices means that you're often just adding one more thin aspect into each of 15 methods, then refactoring 4 of them. Isn't architecture supposed to mean that you make each change in only one place?

But step back. What is a vertical slice? It's everything required to solve a business problem. It is an intelligent combination of data, operations on that data, and executions of those operations to provide business value.

It is, in other words, an agent or an actor. So, building in vertical slices means building one actor at a time. And loose coupling between vertical slices matches actor pattern's independent, intelligent processes that communicate asynchronously.

So, you want to plan in thin vertical slices? Use a design that is more like actor and less like layer. Go ahead and "duplicate" code between actors (same source, but different code paths / compositions / conditions). After all, each actor is fundamentally its process and its outputs, not the code that makes it up.

Refactor domain models in to the actors as needed --- if they were intelligent agents, the domain model would be their shared perception of the world and a way of communicating about it. But they'd each also have a whole bunch of other code --- the stuff that describes their thinking.

Examples of such structures: HTTP servers (each agent is not only identifiable but addressable), mesh networks, almost anything written in [Erlang](http://www.erlang.org/ "The Agent Smith of programming languages.") or [Minions](http://sourceforge.net/projects/minions/ "Need Minions? We can help!"), almost anything designed for the cloud, strongly asynchronous apps, many MVVM apps, and event-based programs. Oddly, most of the types of apps that I enjoy writing and testing.
