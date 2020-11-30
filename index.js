#!/usr/bin/env node

const { program } = require("commander");

program
  .option("-u, --db-url <url>", "mongodb url")
  .option("-d, --db-name <name>", "mongodb db name")
  .option("-c, --comment <comment>", "inserted comment in db")
  .parse(process.argv);

const URL = program.dbUrl;
const DB_NAME = program.dbName;
const COMMENT = program.comment;

const ConnectDB = require('./connectDb');
const service = require('./service');

const main = async () => {
  const db = await ConnectDB(URL, DB_NAME);

  const ret = await service.insertComment(db, COMMENT);
  console.log({ ret });
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
