Individuals will work on their own forks branching from ______   and submitting a pull request to the ______ branch.


Will there be a development branch cut off of master off of which feature branches will be cut, or, will feature branches simply be cut off of master?

As PR's are submitted,  team member  A submitting the changes will communicate their interest in merging in features to the  team member B. Then time will be allotted for member B to review the changes and ask for clarification from member A. Discussion will ensue and pull requests will be resolved as team mambers A and B get back on the same pages with new features.



------------------------------------------- added


What are the guidelines for making a PR? Here's a recommended flow:
When you are ready to submit a PR, do an interactive rebase on your branch to clean up your commit history as needed
Checkout master (or dev depending on your team's workflow) and pull down from upstream to make sure your local master (or dev) has the latest work
Checkout your feature branch again and rebase it onto the now-up-to-date master (or dev)
Push your feature branch up to origin
Submit a PR from origin's feature branch into upstream's master (or dev)
Will all team members have the right to merge PRs?
What kinds of communications are required to indicate a PR is ready, or has been merged?
Will there be a review process prior to accepting PRs?
What are the requirements for writing and passing tests in order for a PR to be accepted?
If working off of a dev branch, what is the plan for merging it into master?
How should the repo's issues be utilized specifically
