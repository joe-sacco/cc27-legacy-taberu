const { expect, assert } = require('chai');
const config = require('../knexfile');
const knex = require('knex')(config);
const fixtures = require('./fixtures');
const customerModel = require('../src/customer/customer.model');
const CUSTOMER_TABLE = customerModel.CUSTOMER_TABLE;

describe('customer', () => {

});