const {test} = require('uvu');
const assert = require('uvu/assert')

const Index = require('../index')

test('basic', () => {
    const majority = new Index()
    assert.is(majority.value('foo'), 'foo')
    for (let i = 0; i < 5; ++i) majority.feed('Trump')
    assert.is(majority.value(), 'Trump')
    for (let i = 0; i < 10; ++i) majority.feed('Biden')
    for (let i = 0; i < 6; ++i) majority.feed('Hilary')
    assert.is(majority.value(), 'Biden')
})

test.run()
