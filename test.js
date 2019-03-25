'use strict'

const cnUtil = require('./')
const Buffer = require('safe-buffer').Buffer
const assert = require('assert')

var validAddressPrefix = 4153412
var addressPrefix = cnUtil.address_decode(new Buffer('Zum1ygMv88j8Y5Bk5HEiaSUaN4gs6RfssQ7GLVnacMq89EtUMtyeFkX5qfyNUxvnLGHsEVGg9UxkMZPvS1NMAvEEPH1TRx5PtoX'))
console.log("Address Prefix: ", addressPrefix)

assert.deepEqual(validAddressPrefix, addressPrefix)