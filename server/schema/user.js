export default {
  s_username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 12,
    index: true,
  },
  s_password: {type: String, required: true},
  s_role: {type: String, required: true},
  s_createdDate: {type: String, default: new Date().toISOString()},
};
