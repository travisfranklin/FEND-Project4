# Project Overview

This project tested my ability to use [Jasmine](http://jasmine.github.io/) testing suite to validate a simple RSS feed app.

Although I would advise viewers to [run this locally](#using-locally) for testing, [here is a link to the GitHub pages site for this repo](https://travisfranklin.github.io/FEND-Project4/).

## Using Locally

To begin, open `index.html` in a browser.

You'll see your feedreader app once it loads in. The Jasmine testing suite will be visible at the bottom of the page.

Tests should be green, but if they are red, you'll know there is a problem.

### // TEST CREATION

It's entirely possible for you to create your own tests right in your browser. Here's an example:

```javascript
   describe('the thing', function() {
     it('should not be true', function() {
       expect(something).not.toBe(true);
     });
   });
```
#### // THE MAJOR PARTS OF A TEST

##### describe
Creates a group of specs (often called a suite).
Calls to describe can be nested within other calls to compose your suite as a tree.

```javascript
   describe('the thing', function() {
//   it('should not be true', function() {
//     expect(something).not.toBe(true);
//   });
   });
```

##### it
Defines a single spec. Contains one or more expectations that test the state of the code.
A spec whose expectations all succeed will be passing and a spec with any failures will fail.

```javascript
// describe('the thing', function() {
     it('should not be true', function() {
//     expect(something).not.toBe(true);
     });
// });
```

##### expect
Creates an expectation for a spec. If things don't occur as 'expected' within the spec, an error will be generated. Multiple expectations can be added for a particular spec.

```javascript
// describe('the thing', function() {
//   it('should not be true', function() {
       expect(something).not.toBe(true);
//   });
// });
```

## Dependencies

The code for this site was primarily from [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader), and a few common external resources were used.

- [Google Fonts](http://handlebarsjs.com)
- [Handlebars](http://handlebarsjs.com)
- [Jasmine](https://jasmine.github.io)
- [jQuery](http://jquery.com)