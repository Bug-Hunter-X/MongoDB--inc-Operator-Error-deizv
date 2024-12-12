```javascript
// Incorrect use of $inc operator in MongoDB update
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
```