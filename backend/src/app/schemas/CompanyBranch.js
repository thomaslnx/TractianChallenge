import mongoose, { Schema, ObjectId } from 'mongoose';
import Company from './Company';

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

export default mongoose.model('CompanyBranch', CompanyBranchSchema);