const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect("mongodb+srv://thobesta:LTXzSXGmQXViEtu4@cluster0.ugbzbog.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  mongoose.connection.on('open', () => {
    console.log('MongoDB : Connected successfully');
  })
  mongoose.connection.on('error', (err) => {
    console.log(`MongoDB ERROR : ${err}`);
  })
}