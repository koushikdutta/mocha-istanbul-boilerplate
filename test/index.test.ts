import RectangleTs from '../src/index';
import assert from 'assert';

describe('rectangle', function () {
    it('calculates area', function () {
        let r = new RectangleTs(10, 10);
        assert.ok(r.area === 100);
    });
});

