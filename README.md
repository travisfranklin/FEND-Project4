# Project Overview

This project tested my ability to use [Jasmine](http://jasmine.github.io/) testing suite to validate a simple RSS feed app.

Although I would advise viewers to [run this locally](#using-locally) for testing, [here is a link to the GitHub pages site for this repo](https://travisfranklin.github.io/FEND-Project4/).

## Using Locally

To begin, open `index.html` in a browser.

You'll see your feedreader app once it loads in. The Jasmine testing suite will be visible at the bottom of the page.

Tests should be green, but if they are red, you'll know there is a problem.


### Creating a Test

It's entirely possible for you to create your own tests right in your browser. Here's an example:

```javascript
describe('Major Part Name', function () {
    it('should do a thing', function () {
        expect(something).toBe(true);
    });
    it('should do another thing', function () {
        expect(somethingElse).toBeDefined();
    });
});
```
#### Here's the major parts of a test:
##### describe
Creates a group of specs (often called a suite).
Calls to describe can be nested within other calls to compose your suite as a tree.

## Dependencies

The code for this site was primarily from [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader), and a few common external resources were used.

- [Google Fonts](http://handlebarsjs.com)
- [Handlebars](http://handlebarsjs.com)
- [Jasmine](https://jasmine.github.io)
- [jQuery](http://jquery.com)

## How will this help my career?

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.

Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

# Development Strategy

For a refresher (or reference) before you begin writing code, we recommend reviewing the content from [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549). Your project will be evaluated by a Udacity code reviewer according to the [Feed Reader Testing project rubric](https://review.udacity.com/#!/rubrics/18/view). Please review for detailed project requirements.

1. Familiarize yourself with the starter code
    * Open up `index.html` and review the functionality of the application within your browser
    * What is all the code in `app.js` doing? Be sure to read all code comments
    * Check out `style.css`. How is styling applied to the application?
2. Explore the Jasmine spec file in `feedreader.js`
    * This is the file in which you'll be writing your tests
    * Make sure to read all code comments here as well
    * Review the [Jasmine documentation](http://jasmine.github.io) if needed
3. Edit the `allFeeds` variable in `app.js` to make the provided test fail
    * See how Jasmine visualizes this failure in your application
    * Return the `allFeeds` variable to a passing state after reviewing the failed test
4. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
    * For example, how would you use a `for...of` loop in this test?
5. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
    * Think about how you wrote the previous test. What are you testing for this time?
6. Write a new test suite named `"The menu"`
    * What are you `describe`-ing in this test suite?
7. Write a test that ensures the menu element is hidden by default
    * You'll have to analyze the HTML and the CSS to determine how the hiding/showing of the menu element is implemented
    * What code in `app.js` is directly involved with toggling the menu on and off?
8. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
    * Think about how you wrote the previous test. What is different this time around?
    * Which clickable element are you checking for?
    * How do you "simulate" a mouse click that element without actually clicking it?
9. Write a test suite named `"Initial Entries"`
    * What are you `describe`-ing in this test suite?
10. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
    * How does Jasmine's `beforeEach()`function work?
    * How does the `loadFeed()` function in `app.js` work? Is it synchronous or asynchronous?
11. Write a test suite named `"New Feed Selection"`
    * What are you `describe`-ing in this test suite?
12. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes
    * How is this test different from the previous test?

Additionally, note that:

 * No test should be dependent on the results of another
 * Callbacks should be used to ensure that feeds are loaded before they are tested
 * Error handling should be implemented for undefined variables and out-of-bound array access
 * When complete, all of your tests should pass

When you're all finished, write a `README` file detailing all steps required to successfully run the application. If you have added additional tests, provide documentation for what these future features are and what the tests are checking for.

# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
