import mongoose, { Schema, ObjectId } from 'mongoose';
import CompanyBranch from './CompanyBranch';
import User from './User';

const BranchAssetsSchema = new Schema({
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

export default mongoose.model('BranchAssets', BranchAssetsSchema);