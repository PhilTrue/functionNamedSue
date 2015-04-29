var testSue = {};

// QUnit.test("test global variables", function (assert) {
    // assert.expect(1);
// assert.equal(1,1);
    // assert.equal(sue('testSue'), testSue, 'global found');
// });

QUnit.test("test object variables", function (assert) {
    // assert.expect(1);

    var testObj = {};

    assert.equal(sue('a', {data: testObj}), '', 'find a nullsafe');
    assert.equal(sue('a', {data: testObj, def: 'c'}), 'c', 'find a default value c');

    testObj.a = 'a';
    assert.equal(sue('a', {data: testObj}), 'a', 'find a');
    assert.equal(sue('a', {data: testObj, def: 'b'}), 'a', 'find b');
    assert.equal(sue('b', {data: testObj, def:'b'}), 'b', 'find b with default value');

    testObj.a = {c: 'c'};
    assert.equal(sue('a.c', {data:testObj}), 'c', 'find a.c');
    assert.equal(sue('a.d', {data:testObj}), '', 'find a.d');
    assert.equal(sue('a.d', {data:testObj, def:'z'}), 'z', 'find a.d with default');
});
