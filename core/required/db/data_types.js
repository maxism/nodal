'use strict';

module.exports = {
  serial: {
    convert: function(v) {
      return Math.max(Math.min(parseInt(v) || 0, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER);
    }
  },
  int: {
    convert: function(v) {
      return Math.max(Math.min(parseInt(v) || 0, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER);
    }
  },
  currency: {
    convert: function(v) {
      return Math.max(Math.min(parseInt(v) || 0, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER);
    }
  },
  float: {
    convert: function(v) {
      return parseFloat(v) || 0;
    }
  },
  string: {
    convert: function(v) {
      return v === null ? '' : (v + '');
    }
  },
  text: {
    convert: function(v) {
      return v === null ? '' : (v + '');
    }
  },
  datetime: {
    convert: function(v) {
      if(!(v instanceof Date)) {
        v = new Date(v);
        if(v.toString() === 'Invalid Date') {
          v = new Date(0);
        }
      }
      return v;
    }
  },
  time: {
    convert: function(v) {
      if(typeof v !== 'string') {
        v = new String(v).toString()
      }

      const parts = v.split(':')
      const hours = parts[0]
      const minutes = parts[1]
      const seconds = parts[2]

      return [
        hours && hours.length === 2 ? hours : '00',
        minutes && minutes.length === 2 ? minutes : '00',
        seconds && seconds.length === 2 ? seconds : '00'
      ].join(':');
    }
  },
  boolean: {
    convert: function(v) {
      return typeof v === 'string' ? [true, false][({'f':1,'false':1,'n':1,'no':1,'off':1,'0':1,'':1}[v]|0)] : !!v;
    }
  },
  json: {
    convert: function(v) {
      return typeof v === 'string' ? JSON.parse(v) : v;
    }
  }
};
