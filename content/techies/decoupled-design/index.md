---
id: 19
title: Decoupled Design
date: 2011-03-12T11:15:05+00:00
author: Arlo
layout: post
guid: http://arlobelshee.com/?p=19
permalink: /decoupled-design/
category: techies
tags:
  - design
  - no mocks
  - tdd
---

Recently, I've had a large number of discussions around the use of mocks for testing, probably because I keep saying that Mocks are Evil.

As a result, I've had to articulate how I design systems.<!--more--> This has forced me to wordify my design instincts. Now they are are concepts that I can manipulate consciously, not just execute subconsciously. So, thank you to those who have argued in favor of occasionally using mocks. You're still all wrong, of course.

This, then, is how I design systems.

A system has its static structure and its run-time structure. An application also has two relevant time frames: initialization and running (with appropriate patterns, shutdown can be made boring). Finally, my design criteria are testability, namability, and lack of duplication.

My perfect system is a set of highly namable (aka cohesive) and independent units (often classes or lone functions). Each of them is independently testable, which tends to mean that they have few (but still some) dependencies and side effects. This is the entire static structure of the program, as regards normal execution. These units are not statically attached to each other at all. They expose a bunch of events, take functions as args, avoid interfaces, and have almost no inheritance relationships.

The only other static components are initialization / binding functions. These functions create the run-time structure. They create instances of the independent units and bind them together. The binding functions execute during program initialization, and sometimes during program transformation (in response to an event, sometimes the program alters the way it will respond to future events).

One of the key elements in such a design is that, at runtime, elements are bound directly together. There is no conditional logic, or any other logic, that happens between elements. For example, assume that I'm creating a dialog box which will invoke some action. There's a "go" button, and a bunch of controls that provide inputs, as well as one where some results go. Here's one way I might write that:

```csharp
class TheView(Dialog) {
  Button go;
  Spinner some_input;
  ListBox more_input;
  TextBox results_display;
}

string the_model_function(int a, List b) {
  return "did something";
}

TheView prepare_view() {
  result = new TheView();
  result.go.click += () => result.results_display.value =
    the_model_function(
      result.some_input.value,
      result.more_input.selected_items);
  return result;
}

// wherever I show the dialog...
prepare_view().show_as_dialog()
```

Of course, I can do better than that in GUI frameworks with command objects (or, better yet, the [Reactive Extensions](http://channel9.msdn.com/tags/Rx/ "Rx for the win!")), but this version can be written in most modern languages (including C++).

Each of these elements is independently testable. There are no dependencies. The only bit that would actually be at all difficult to test is the line that is labeled "wherever I show the dialog." Typically, I have a very small number of such lines, turn them into one-liner functions that I supply to components when needed, and don't bother to test. A test of that one line isn't going to buy me anything.

Even prepare_view is fairly easy to test. It is a pure function. The test could look like this:

```csharp
[Test]
void verify_dialog_initialization() {
  view = prepare_the_view();
  Assert.That(view.go.click,
    Has.property(evt => evt.handlers.count).equal_to(1));
  Assert.That(view.go.click.handlers[0],
    Is.delegation(
      ()=>view.result.value,
      the_model_function,
      ()=>result.some_input.value,
      ()=>result.more_input.selected_items));
}
```

Where `Is.delegation()` is a general-purpose condition generator that I write to extend my assertion capabilities in whatever test framework I'm using:

```csharp
TestCondition delegation(
    LambdaExpression result, Func function, LambdaExpression *args)
{
  return (Object actual) => {
    Assert.That(actual, Is.of_type(delegate));
    body = actual.function_body;
    Assert.That(body.statements.count, Is.equal_to(1));
    dispatch = body.statements[0];
    Assert.That(dispatch, Is.assignment
      .from(rhs =>
        Assert.That(rhs, Is.function_call(function, *args))
      .to(result.body as VariableReference));
  };
}
```

All of assertions are simple static analysis. I don't need to run the code that results from calling `prepare_view`. I just need to ensure that it is bound to the right values. After all, that's all the init functions do: set up bindings between already-tested elements.

Creating this library of helper assertions can take more or less effort depending on my programming language's support for reflection and code analysis. However, it is doable in most modern languages, and I actually don't need that many assertions. I'm really only dealing with assignments, functions, dispatchers, and events. I don't do other logic in my bindings, which means I don't need to verify it.
