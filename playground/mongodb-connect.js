// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'avi', age:60};
// var {name} = user;
// var age = user.age;
// console.log(age);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to inser todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  // db.collection('Users').insertOne({
  //   name: 'Avi Porat',
  //   age: 60,
  //   location: 'Israel'
  //   }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to inser user', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  //
  db.close();
})
