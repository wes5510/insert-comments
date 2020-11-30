#!/usr/bin/env node

const { program } = require("commander");

program
  .option("-u, --db-url <url>", "mongodb url")
  .option("-dt, --db-name <name>", "mongodb db name")
  .parse(process.argv);

const URL = program.dbUrl;
const DB_NAME = program.dbName;

const ConnectDB = require("./connectDb");

const main = async () => {
  await ConnectDB(URL, DB_NAME);
};

main()
  .then(() => {
    console.log("Complete");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
