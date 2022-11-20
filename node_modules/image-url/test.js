'use strict'

var test = require('tape')
var imageUrl = require('./')

test('basic', function (t) {
  t.equal(imageUrl('foo'), 'url("foo")')
  t.end()
})

test('escape quotes', function (t) {
  t.equal(imageUrl('_"quotes"_'), 'url("_\\"quotes\\"_")')
  t.end()
})
