const mongoose = require('mongoose');

const AdminUserSchema = new mongoose.Schema({
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

module.exports = mongoose.model('AdminUser', AdminUserSchema);