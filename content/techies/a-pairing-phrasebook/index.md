---
id: 113
title: A Pairing Phrasebook
date: 2012-07-24T08:11:39+00:00
author: Arlo
layout: post
guid: http://arlobelshee.com/?p=113
permalink: /a-pairing-phrasebook/
category: techies
tags:
  - Agile
  - fluency
  - pair programming
  - proficiency
---
I see pairing as similar to a language. So I figured I'd put together a phrasebook for those who are just learning to pair. You might find these useful as you are trying to locate the bathroom, train station, and restaraunt in PairingLand.

<!--more-->

## Some Phrases I Use

> An example would be useful here

Used when you are confused or when you loop in a conversation. Typically comes out when you feel that the other person doesn't understand your idea, or you think they don't think you understand their idea. Concrete is easier than abstract.

I stole this one from Brian Marick.

> Bookmark!

Meaning: let's remember this point in the conversation. Go on for now, but I'm going to want to come back to here.

Used when you want to fork the conversation. Your partner continues exploring one idea, but should come quickly to a close. You might disagree with him bu want to give him a chance to play his idea through. Or you may agree and see an elaboration. Or you might just want to go into left field.

J.B. Rainsberger, who first used this on me, has a gesture to go with it. Often you can train the team to just use the gesture instead. This further reduces the disruption to the conversation. J.B.'s gesture is a 2-finder & thumb pinch, with a motion like reaching out and dropping a bookmark into the air (sort of like making a dippy-bird moion with your hand).

> I have an alternate idea. But let's keep following yours. I want to see how it turns out. We can always come back to mine if you're interested or we run into trouble.

This one really needs a phrase form. It's too long. With teams where I've already used it a lot, I can safely shorten it to "alternative available" or something like that. But it is important to introduce it with the full phrasing.

Used when you honestly do intend to see your partner's idea through, but you have a backup. You should stop thikning about your idea and do your best to get your partner's to work. Only come back to yours if your partner's fails. If you think your idea is better and want to try it first / in preference, then use Bookmark or Let's take this to a whiteboard or something similar.

Ward Cunningham first used this one on me. Gentle but very effective. He used it twice before I noticed.

> I see a refactoring for this. Keep going; let’s finish what we’re doing. Once we’re done, I think I may see a clean-up simplification.

Again, this needs a short form. Perhaps something like "clean up on aisle 12!"

Use this when you are currently making the test green and you see a less-sloppy approach. Don't interrupt the efforts to get to green; celebrate the shortcutting sloppiness for now. Bu make sure that your partner is aware of the option so that you can clean up as soon as you get back to green.

> YAGNI!

Use any time that your partner is gold-plating. Yelling yagni is fun. Just make sure that everyone thinks it is fun and everyone yells it on everyone else. Optimally, his can get to be a competition. Who can yagni something the smallest? This can really help when you are trying to sork in smaller chunks. Yagni work that you are going to need in 5 minutes, but not _right now_.

> Note taken. / Take a note.

Meaning: record this bit so that we can forget about it for a while. Note taken is used by the navigator, who then writes the note down. Take a note is used by the driver to ask the navigator to write the note down.

Use when you see something that you want to come back to later but don't want to think about right now. For example, if you see a significant refactoring in existing code, you might take a note. Once you finish the story in the most yagni way, you then go back through the notes and address some of them.

These notes are effectively extra tasks that you are adding to the story. You will decide later which ones you are or are not going to do. But for now you want to clearly separate the work from the task that you are working on, so that you can get one thing done and then start on another.

> Simplest Thing!

This is not the same as yelling yagni. Often this is a call for a refactoring. Use it when you see code with too many edge cases and exceptions. It's a call to arms for the pair: see if you can come up with a design that removes the special cases (or other problem).

> Work tiny

Use this any time that you see yourself or someone else taking a big bite. Also used frequently in retrospectives or other times where we're trying to improve our practice. Work tiny / shorter cycles is almost always the right approach.

Kim Wallmark named this one and first used it on me.

> I smell something

Use when you sense a code smell but can't quite pinpoint it yet. When your partner says this, respect that there is something wrong. His intuition / experience has identiied a bad pattern, but has not yet presented it in a way that his rational mind can phrase. See if you can see a smell too.

Smells, at this point, can be very fragile. Depending on your partner, your best bet may be to ask clarifying questions when he notices a smell or to just note it (take a note: code smell in XXX function) and move on. In either case, respect that something funny is going on but that the smeller can't quite diagnose what it is yet.

Kim Wallmark first used this one on me. She's a person with loads of intuition, but whose intuitive glimpse can be destroyed if she tries to wordify an idea too early. This gives her a way to alert me that something is there before she can say what it is and before I notice it at all.

> How long has it been since we last checked in?

Use any time that you sit down with a new pair partner, join a task in process, or if it has been more than 5-10 minutes since your last commit.

If the answer is more than 15 minutes, then you are likely in the weeds. Consider shelving the changes and reverting all local changes. Odds are, you made a subtle mistake early and restarting will avoid the mistake. You can probably get to green faster by reverting than by continuing.

Also use this any time that you feel you are in the weeds. In other words, if you did a depth-first traversal of something and are 3 levels down. It is a call to quickly wrap up and get to a known-clean point or to realize that you can't.

> How can we cheat here?

This is like calling yagni when you can't see how you could get away without it. It's a call for creativity. It should spark a quick conversation about available shortcuts.

Use this any time that you see a large task (anything you think will take an hour or more). There's got to be a cheat that will let you break it down. And some of these cheats let you get off without doing the second half.

> What can we do to get checked in right now? We can always clean it up in the next commit.

This is a follow-up when "how long since we last checked in?" doesn't work. It's a more explicit statement. If you don't know exactly where you are and what you are doing, it is more important to get back to a known state than it is to save your current progress or to finish in a clean manner.

If you need to use more than 2 conjunctions or conditions to describe where you are, then you don't know exactly where you are: work smaller.

All of us fall in love with our code and feel we've "almost got it working." When that happens, we need a pair partner to call this on us and force us to get back to a known state. We can always try again or continue from there.

> Don’t explain. Just tell me what to type. Explain it once we’ve got something working that you can point at.

Use when your partner starts telling you how their idea works or why it is good. Avoid how and why questions (and statements). Stick to what.

This is an explicit request to become a dummy typist. If accepted, you will become driver with the agreement that you'll execute whatever your partner tells you to. Your goal is to see what he's seeing. Once it is implemented, you can always hold the why and how conversations. But they'll be easier with the code in front of you. And most of them will evaporate entirely as you can re-invent how and why from writing the what.

> Let’s take this to a whiteboard.

Use this any time that you feel a need to draw or feel that a conversation isn't going anywhere. It is similar to "an example would be useful here" or "just tell me what to type" but is appropriate for a different set of communication breakdowns.

I use it most often when we've already done an example or two and each typed the other guy's idea, but we still need to figure something out. I also use it when one partner knows a concept that the other lacks. For example, I use it when my partner names a design pattern that I don't know and can't figure out from context.

> Technique!

I stole this from the Where Are Your Keys language learning game. That game consists of a whole bunch of [techniques](http://www.whereareyourkeys.org/techniques.html#start "useful techniques for learning"), such as Tq: "no thinking, no suffering." The core technique is Tq: Technique! This is recognition that skill learning is a game with an infinite variety of techniques. We can use this technique to teach each other our techniques.

If you haven't played Where Are Your Keys, you really should follow the above link and then find and play a game. Their techniques are a more organized, battle-tested, complete, and broadly-applicable version of this phrasebook.

If you have played it, feel free to use all of its techniques while pairing. Most of them apply. And since they all have both names and hand signs, they can be easily thrown into a conversation without disrupting its flow.

> You type.

The meaning of this phrase depends on which pairing style you are using. If you're doing driver / navigator, then this means that you recognize you've been driving too long. If you're doing strong pairing, then this means that you have an idea and so now you are no longer allowed to type.

Llewellyn Falco first used this one on me, as part of his strong-pairing style. He also told me when to use it as part of that style.

> How long has it been since you last pair swapped (or keyboard swapped)?

We all need reminders to swap partners and roles. Many swaps happen organically. the better things are flowing the more organically they happen. However, often the best way to get unstuck is to change roles or to swap in a new partner. And these are the times when we forget to do so.

Use this when you see that another pair has gone dark. If they haven't committed in a while, aren't talking much, or seem low-energy or confused, it's probably time for a partner swap. A little promiscuity usually brings back the fun (and the effectiveness).

## Make up your own

Formally or informally, as a group or by yourself, notice the phrases that commonly help a pair session go better. If you note them then you can repeat them. And if you've got some great ones, please add them to the comments below so that I can include them in my own phrasebook.
