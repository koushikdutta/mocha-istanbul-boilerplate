let RectangleJs = require('../src/index'),
    assert = require('assert');

describe('rectangle', function () {
    it('calculates area', function () {
        let r = new RectangleJs(10,10);
        assert.ok(r.area === 100);
    });
});

