const mongoose = require('mongoose');

const formDataSchema = mongoose.Schema({
          name: String,
          email: String,
          meassage: String
});

const FormData = mongoose.model('User', formDataSchema);

module.exports = FormData;