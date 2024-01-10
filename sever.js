require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const FormData = require('./models/formData');
const { default: mongoose } = require('mongoose');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.DATA_BASE_URI)
 .then(result => {
          console.log("Database Connected")
 })
 .catch(error => {
          console.error(error)
 });

app.route('/')
 .get((req, res) => {
          res.sendFile(__dirname + "/public/index.html")
 })
 .post(async (req, res) => {
          try {
          const {name, email, usersMessage} = req.body;
          
          const user = FormData({
                    name: name,
                    email: email,
                    meassage: usersMessage
          });

          const userData = await user.save();
          console.log(userData);
          res.sendFile(__dirname + "/public/response.html")
          
          } catch (error) {
                    console.error(error)
          }
          
 })

app.listen(port, () => {
          console.log(`App is running at ${port}`);
})