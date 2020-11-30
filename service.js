const COLLECTION_NAME = "comments";

exports.insertComment = (db, comment) =>
  new Promise((res, rej) => {
    const coll = db.collection(COLLECTION_NAME);

    const ret = coll.insert(
      {
        date: new Date(),
        comment,
      },
      (err, ret) => {
          if(err) return rej(err);

          res(ret);
      }
    );
  });
