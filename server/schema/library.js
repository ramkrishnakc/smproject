export default {
  s_book_name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  s_book_author: {type: String, required: true},
  s_book_type: {type: String, required: true},
  s_book_category: {type: String, required: true},
  s_book_language: {type: String, required: true},
  s_book_published_date: {type: String, required: true},
  s_book_description: {type: String},
  s_book_image: {type: String},
  s_created_date: {type: String, default: new Date().toISOString()},
  s_status: {type: Array, default: 'available'},
  s_book_history_records: {
    type: Array,
    default: [
      {
        s_history_id: {type: String},
        s_requested_by: {type: String, required: true},
        s_requested_date: {type: String, required: new Date().toISOString()},
        s_issued_by: {type: String},
        s_issued_date: {type: String},
        s_returned_accepted_by: {type: String},
        s_returned_date: {type: String},
      },
    ],
  },
};
