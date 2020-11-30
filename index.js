const ConnectDB = require("./connectDb");

const URL = "mongodb://localhost:27017";
const DB_NAME = "myproject";

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
