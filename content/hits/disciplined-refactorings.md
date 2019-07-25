Some contents that might go on a cheat sheet + persuasive essay.

* The insight loop
	1. Choose where to look.
	2. Have an insight.
	3. Write it down.
		* Check: safe, better, and no worse
	4. Commit

* List of the core refactorings. With links to recipes (& per-IDE cheat sheets?).

* Key definitions:
  * Disciplined Refactoring
	* Bug-for-bug Compatible

* Levels of proof and when to use each

* One key insight: it is not possible to change functionality and know, for a fact, that you didn't also change functionality in some unintentional way. It is, however, possible to change the code and prove you didn't change functionality (even functionality you don't know about), and it is possible to change very simple code with high reliability (low risk of unintentional change). So each commit *either* changes the design in some way (can be complex), *or* changes functionality without altering more than one line in the code.
