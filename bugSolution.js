```javascript
// Correct use of $inc operator in MongoDB update. Ensure the field is numeric before using $inc.
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{"counter":1}});
//Adding validation to make sure counter is a number before updating
db.collection.findOne({"_id":ObjectId("someId")}).then(doc=>{if(typeof doc.counter === 'number'){db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{"counter":1}});}});
```