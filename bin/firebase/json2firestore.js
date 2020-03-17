// #region[setImports]
// ------------------------------

// import package
const admin = require('firebase-admin');
const fs = require('fs');

// import internals
const serviceAccount = require('./serviceAccountKey.json');
const schema = require('./schema').schema;

// ------------------------------
// #endregion

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const json2firestore = (_JSON, db, schema) => {
  // #region [useMorfos]
  // ------------------------------

  return Promise.all(
    Object.keys(schema).map(collection => {
      let promises = [];
      Object.keys(_JSON[collection]).map(_doc => {
        const doc_id = _doc;
        if (_doc === '__type__') return;
        let doc_data = Object.assign({}, _JSON[collection][_doc]);
        Object.keys(doc_data).map(_doc_data => {
          if (doc_data[_doc_data] && doc_data[_doc_data].__type__)
            delete doc_data[_doc_data];
        });
        promises.push(
          db
            .collection(collection)
            .doc(doc_id)
            .set(doc_data)
            .then(() => {
              return json2firestore(
                _JSON[collection][_doc],
                db.collection(collection).doc(doc_id),
                schema[collection]
              );
            })
        );
      });
      return Promise.all(promises);
    })
  );

  // ------------------------------
  // #endregion
};

json2firestore(
  JSON.parse(fs.readFileSync('./bin/firebase/local_db.json', 'utf8')),
  admin.firestore(),
  { ...schema }
).then(() => console.log('done'));
