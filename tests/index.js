const {test} = require('uvu');
const assert = require('uvu/assert')

const Majority = require('../index')

test('basic', () => {
    const majority = new Majority()
    assert.is(majority.value('foo'), 'foo')
    for (let i = 0; i < 5; ++i) majority.feed('Trump')
    assert.is(majority.value(), 'Trump')
    for (let i = 0; i < 10; ++i) majority.feed('Biden')
    for (let i = 0; i < 6; ++i) majority.feed('Hilary')
    assert.is(majority.value(), 'Biden')
})

test('args', () => {
    const majority = new Majority(1, 1, 2, 2, 2, 3, 3)
    assert.is(majority.value(), 2)
})

test.run()
