const mongoose = require("mongoose");

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
 const connectionString = "mongodb+srv://dbuser:nebi123456@cluster0-0tdua.mongodb.net/test?retryWrites=true&w=majority";

// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

mongoose.connect(connectionString, { dbName: "Itc230", useNewUrlParser: false }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define Book model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
 title: { type: String, required: true },
 director: String,
 type:String,
 year: Number
}); 

module.exports = mongoose.model('Movie', mySchema,"Movies");
