# loveslocator

The Love's locator is an app that allows users to search for Love's locations based upon 4 criteria:

- Location
- Store Type
- Amenities
- Restaurants

The previous team of developers has created feature branches for each one of these 4 features, and done a partial implementation, before they were all swept away at sea in a great storm.

Fortunately, they left `// TODO:` blocks indicating what work is unfinished.

The job of your team will be to pick up where they left off. As a team, begin where any team should: setting up your CI pipeline. 

Work ***together*** to:

1. [Fork](https://www.youtube.com/watch?v=dYBjVTMUQY0) [this repository](https://github.com/gSchool/loveslocator)
1. Clone ***your fork*** (`git clone https://github.com/you/your_fork_name)
1. Create a new app in heroku (`heroku create --org loves`)
1. Create a new pipeline
1. Add your app to your pipeline
1. Create your staging app
1. Add your staging app to the pipeline
1. Connect your pipeline to github
1. Enable automated tests
1. Enable automated deploys
1. Enable review apps

Now that you have configured your team's CI pipeline, you are ready to begin development!

**From now on, all team members should work *in tandem* to maximize productivity!**

1. Each member should pick 1 feature branch (use git `branch --all`)
1. Check out that branch (`git checkout branch_name`)
1. Run the tests (`npm test`)
1. Observe the test failure
1. Create a Pull Request in GitHub
1. Check the Heroku dashboard to verify a new review app has been created
1. Check the PR to verify tests fail in CI

Now that you have completed the TDD ceremony, it's time to begin work:

1. Search the code to find the unimplemented `TODO`
1. Follow the `TODO`'s instructions to complete the feature
1. Run the tests locally, and observe success (`npm test`)

Once tests pass, it's time to push:

1. Commit your changes (`git commit -am "Completed feature"`)
1. Push your changes (`git push origin my_branch`) ***Do not push to master!***
1. Check heroku and watch the build in progress for your review app
1. When the build completes, check your PR in github, observe passing tests!
1. Have at least one other member of your team review your work
1. If your team member approves, they will click the "merge" button on your PR

***Reassemble as a team, to QA your release***

Once all four features are in staging, open the staging app, and try each type of search, to ensure all the enhancements work together. If your team is satisfied that the staging app is an improvement to what is currently in production, click "Promote to Production".

Congratulations on delivering your first delivery using GitHub Flow!
