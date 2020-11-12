import mongoose, { Schema } from 'mongoose';

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

export default mongoose.model('Company', CompanySchema);