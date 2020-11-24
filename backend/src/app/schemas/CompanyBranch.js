const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const ObjectId = require('mongoose').ObjectId;
const Company = require('./Company');

const CompanyBranchSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  business_type: {
    type: String,
    required: true
  },
  headquarters: {
    type: { ObjectId, ref: Company }
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  state_initials: {
    type: String,
    required: true,
    maxlength: 2,
  },
});

module.exports = mongoose.model('CompanyBranch', CompanyBranchSchema);