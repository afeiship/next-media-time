(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxPadStart = nx.padStart || require('next-pad-start');
  var nxTimeformat = nx.timeFormat || require('next-time-format');
  var DEFAULT_OPTIONS = { default: '00:00' };

  var NxMediaTime = nx.declare('nx.MediaTime', {
    statics: {
      format: function(inTime, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        if (inTime) {
          var formatTime = nxTimeformat(inTime * 1e3);
          var _minute = nxPadStart(formatTime.minute, 2, '0');
          var _second = nxPadStart(formatTime.second).padStart(2, '0');
          return _minute + ':' + _second;
        }
        return options.default;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxMediaTime;
  }
})();
