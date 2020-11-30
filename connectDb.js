const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

module.exports = (url, dbName) =>
  new Promise((res, rej) => {
    MongoClient.connect(url, function (err, client) {
      if (err) return rej(err);

      console.log("Connected successfully to server");

      res(client.db(dbName));
    });
  });
