# Why do we need documentation app?

There are already many non-standard technologies in our template, such as Monorepo and NX,
so why do we need documentation?
In a few words, we need a knowledge base.

It's a very important thing that solves a critical problem inherent in almost every project—
we don't have an easy way to share project knowledge, even within the established team.

## Project knowledge

Let's introduce some key types of documentation that every team member needs to access:

- Task management: dashboards, rules, metrics, goals, etc.
- Process guidelines: rules for daily meetings, retrospectives, planning, grooming, etc.; requirements and agreements for each process
- Communication and responsibility guidelines: simple diagrams explaining roles and goals, problem-solving approaches, etc.
- List of current technology state: our tech stack, pros and cons, summaries of discussions, issues, decision rationale and criteria, etc.
- Internal code style: a list of non-automated (e.g., with eslint) coding rules in general or specific to particular technologies
- Application architecture
- Repository structure
- Internal documentation
- Deployment documentation
- Links and descriptions of related resources: design, style guide, contracts, etc.
- ... and so on.

Yes, there are many points, but you might still wonder why we need a documentation app in the first place.
Can't we just create a "docs" folder, use old-school markdown, and write whatever we need?
What's the problem?

## The problem with markdown

Yes, Markdown is a relevant solution. However, it's important to establish criteria before proceeding:

- Consistency: All pages should have the same style guide, theme, and page patterns.
- Navigation: It should be easy to navigate through the entire document.
- Nested clean structure: Our knowledge base should display all documents in an organized manner.
- Developer Experience (DX): The documentation writing process should be comfortable to ensure that no knowledge is lost due to a lack of interest in formalizing it.
- Scalability/Customization: Complex documents require appropriate tools for description, and we should have the ability to utilize them.
- Easy to read: Pages should have structured formatting, interlinking, and custom elements that enhance readability.
- Single source of knowledge: All documentation should be centralized in one location, ensuring that users always know where to find the information they need.
- ... and so on.

If your project uses regular Markdown and you have considered these criteria,
ask yourself, "Does our solution meet at least one of these criteria fully? Should we consider making any revisions?"
If your answer is yes, stay tuned for our upcoming articles on creating a documentation app.
