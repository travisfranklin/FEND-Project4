// This is the spec file that Jasmine will read and contains
// all of the tests that will be run against your application.


// All tests are placed within the $() function
// to ensure they don't run until the DOM is ready.


$(function() {
  // Validates whether or not the allFeeds variable contains valid information.
  describe('RSS Feeds', function() {
    // URL validator
    const isValidURL = /(^(https?):\/\/)?((www|\w+)\.)?\w+\.(com?|net|org).*/;

    // Returns true if allFeeds is defined and contains feeds.
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // Returns true if all feeds have a valid URL
    it('should have a url', function() {
      allFeeds.forEach((feed) => {
        expect(feed.url).toBeDefined();
        expect(feed.url).toMatch(isValidURL);
        expect(feed.url.length).not.toBe(0);
      });
    });

    // Returns true if all feeds have a valid name.
    it('should have a name', function() {
      allFeeds.forEach((feed) => {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });

  // Validates that the menu button is working properly.
  describe('The menu', function() {
    // Variables to reduce repitition.
    const body = document.body;
    const icon = $('.menu-icon-link');

    // Returns true if menu is hidden when the page loads.
    it('should be hidden by default', function() {
      expect(body.className).toContain('menu-hidden');
    });

    // Returns true if menu functions properly when clicked.
    it('should toggle visibility when clicked', function() {
      icon.click();
      expect(body.className).not.toContain('menu-hidden');
      icon.click();
      expect(body.className).toContain('menu-hidden');
    });
  });
  // Validates that each feed has content.
  describe('Initial Entries', function() {
    // Since loadFeed is asynchronus, we use beforeEach()
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    // Returns true if each feed has content
    it('should have at least one entry', function() {
      expect( $('.feed .entry').length ).toBeTruthy();
    });
  });

  // Validates that when a feed changes, the page updates.
  describe('New Feed Selection', function() {
    // Prepping variables for comparing feeds before and after updates.
    let preUpdate;
    let postUpdate;
    const feed = $('.feed');

    // Since loadFeed is asynchronus, we use beforeEach()
    // Then we save the inner HTML of the feed pre- and post-update
    // to variables for comparison.
    beforeEach((done) => {
      loadFeed(0, () => {
        preUpdate = feed.html();
        loadFeed(1, () => {
          postUpdate = feed.html();
          done();
        });
      });
    });

    // Return true if the feeds have changed post-update.
    it('updates the page appropriately when new feed is loaded', function() {
      expect(preUpdate).not.toEqual(postUpdate);
    });
  });
}());
