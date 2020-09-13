export default {
  s_userID: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  s_issuedDate: {type: Number, index: true},
  s_lastRequest: Number,
  s_role: String,
};
