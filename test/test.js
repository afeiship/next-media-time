(function() {
  var nx = require('next-js-core2');
  var NxMediaTime = require('../src/next-media-time');

  describe('NxMediaTime.methods', function() {
    test('init', function() {
      var time1 = 1000;
      var rs = NxMediaTime.format(time1);
      expect(rs).toBe('16:40');
    });
  });
})();
