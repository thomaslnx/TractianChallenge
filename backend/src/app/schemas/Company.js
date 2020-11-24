const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  business_type: {
    type: String,
    required: true
  },
  subsidiaries: {
    type: String,
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

module.exports = mongoose.model('Company', CompanySchema);