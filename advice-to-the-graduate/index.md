## Advice to the Graduate

**Context**: I work at Mapbox and help to hire for developer positions. Mapbox is
a SaaS company that does geo technology. It's ~80 people currently, growing
fast, and heavily encourages role-switching internally. Mapbox is in DC,
SF, Peru, and Bangalore, but also has key team members in many other places
and countries.

**Caveats**: I don't know about other tech companies. I've been at Mapbox a long
time, have seen a lot of people apply, have interviewed and trialed many, but
I've never hired for another tech company or worked for another tech company.
Hiring dynamics at smaller and larger companies will be different than the
one I describe. I'm also not the only person who hires at Mapbox, nor
free of mistakes and biases.

## The Inside of the System

You apply to a job at jobs@mapbox.com. That email goes into HelpScout. 68
Mapbox employees have access to the HelpScout mailbox, and 8 regularly garden
it, roughly sorting into development, design, support, and business tasks.

Promising applications turn into GitHub issues in our `/recruiting` repository.
One team member shows interest, summarizes and links the application, and
notifies others to review.

A typical recruiting ticket will look like

```md

## Person Name

* Position type
* Location, willingness to travel
* Relevant previous job, or student status,
  or other fact
* Link to GitHub

Paragraph that states any relevant context - whether the
team member has met that person, worked with them, heard
about them - and potential way they might fit on the team.
```

If someone shows promise, a typical hiring progression goes from

* Quick call, skype, or chat as a first-contact. This is _never a technical interview_:
  it's to gauge what people are doing currently, interested in doing in the future,
  and their expectations around work.
* Set up a 2-6 day onsite at a main office - DC, SF, Bangalore, Peru

The onsite consists of a project that's 'propped up' - heavily explained
and presented - by a Mapbox employee who is your buddy for that time. The
projects are real projects that aim to actually go into production at Mapbox:
we don't have people work on toy software or technical challenges.

During the onsite, we do "show & tells": essentially reverse-interviews
where people who work at Mapbox talk about what they're working on currently.
This is to help candidates get a grasp of what our overall goals and style
is like, as well as giving them time to ask questions and offer their own
thoughts on what we could improve.

## Resume Patterns

Common trends in resumes:

* Wall of text
* Bullet points only
* One sentence

The most successful resume type is

* 1-4 paragraphs of straightforward prose
* Bullet points for skills, links, and experience

## Lists

Learning specific skills at a bootcamp sets your perspective in a certain
way. Basically after struggling with some framework and some language
for a while might make you think that you learned how to "work with X"
and companies will hire you because you "know X".

Don't reduce yourself to a list of frameworks. This is a scary trend and it's
unproductive to the hiring process.

At the very least, if you want to think about specifics, think
about them vertically, not horizontally: in order from least applied
to most is

* Teamwork
* Algorithms
* Testing
* Shipping Applications
* Programming languages
* Patterns
* Frameworks

## Code as Resume

Demos as resumes are a good idea but **not just because they are code**. Your
code can be great, but there are red flags I see every day.

* If you have a link to a live demo, it **should be live**. Using a Heroku box
  that goes down? Pay for a dyno to keep it online, for the time you're applying
  to jobs.
* GitHub repos **must have README.md** and it **must be explanatory**: saying
  * what it does: what is the function? in plain English
  * how it does what it does: is it node? ruby? etc.
  * how would one set it up? at least a basic minimum of
    installation instructions
* Commits **must have real messages**, especially for teamwork. If every commit
  has a message of `-`, that is a significant issue.
* Team projects **must have GitHub issues, or a link to a bug tracker**. Team
  projects should demonstrate that you can work on a team: if there's no actual
  evidence of you working on a team, then there's no point.

A GitHub page always has structure: there is

* project title
* description
* url
* readme
* license

**your project should have all of these**.

## Experiences

People have stories: they're works in progress. Too often resumes are flat,
as if you've always written Ruby on Rails and when you're hired somewhere
at a Ruby shop, you'll always do it forever.

At the very least, think about

* Why you made the effort to learn what you know now
* How you learned that thing: did you teach yourself, learn in college,
  work on projects?
* What you want to learn next

A really good way to record this kind of thing is by blogging: whether it's
a blog you keep during a bootcamp, or taking the time to write a few standalone
posts afterwards, explaining what you've learned - seeing someone's writing
and thinking is essential.

Why? Because programming jobs involve a lot more writing than you think, and
some of the forms are really complex. How do you have a technical discussion
with someone across the world without derailing or getting your ideas
lost in the language? What about explaining technical concepts, to your
team, open source community, or customers?

The make-or-break qualification at Mapbox is _ability to grow_: with the 'grow'
buzzword meaning 'improve and expand': whether a dev can pick up business
or design chops, or become great at communication, or anything of that
sort. Demonstrating that you want to learn and develop skills is vital:
the ideal are people who need a little support but are ready to learn
on their own as well.

## Do You Have Questions?

When someone asks you in an interview "Do you have questions?", you better
have some questions. The questions you ask are generally not super groundbreaking,
but they show the other person that you're interested, and that you've been
thinking. I'll throw out a few examples.

**Ask the interviewer about their own experience.** Have they been working
at the company for long? What did they do before that? What about the rest
of the company - is there lots of turnover, or did everyone go to the same
school, or come from an unusual background?

**What's the plan for the next couple of months?** Is there product
vision at the company? New projects that you would be working on?

**What about the company's business?** You should, pre-interview, check
the basics - CrunchBase to figure out if/when/howmuch funding or profitability.
But who are the customers, and what problem does the company actually
solve for them?
