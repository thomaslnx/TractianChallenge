import mongoose, { Schema } from 'mongoose';

const AdminUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

export default mongoose.model('AdminUser', AdminUserSchema);