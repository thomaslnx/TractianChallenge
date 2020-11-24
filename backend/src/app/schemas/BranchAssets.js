const mongoose = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
const CompanyBranch = require('./CompanyBranch');
const User = require('./User');

const BranchAssetsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  branchOwner: {
    type: { ObjectId, ref: CompanyBranch },
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  healthscore: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('BranchAssets', BranchAssetsSchema);