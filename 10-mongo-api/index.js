// BEGIN SETUP
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const MongoUtil = require("./MongoUtil");
const ObjectId = require("mongodb").ObjectId;

const mongoUrl = process.env.MONGO_URL;

// CREATE EXPRESS
let app = express();

// ENABLE JSON
app.use(express.json());

// ENABLE CORS
app.use(cors());

// ROUTES BEGIN HERE
async function main() {
  let db = await MongoUtil.connect(mongoUrl, "tgc11_todos");
  console.log("Database connected");

  // GET - Fetch information
  app.get("/task", async (req, res) => {
    let tasks = await db
      .collection("tasks")
      .find()
      .toArray();
    res.status(200);
    res.send(tasks);
  });

  // POST - Add new document
  app.post("/task", async (req, res) => {
    let title = req.body.title;
    let done = req.body.done;
    try {
      let result = await db.collection("tasks").insertOne({
        title: title,
        done: done
      });
      res.status(200);
      res.send(result.ops[0]);
    } catch (e) {
      res.status(500);
      res.send({
        message: "Unable to insert new document"
      });
      console.log(e);
    }
  });

  // PUT
  app.put("/task", async (req, res) => {
    try {
      await db.collection("tasks").updateOne(
        {
          _id: ObjectId(req.body._id)
        },
        {
            '$set':{
                'title': req.body.title,
                'done': req.body.done
            }
        });
      res.status(200);
      res.send({
          'message':'OK'
      })
    } catch (e) {
        res.status(500);
        res.send({
            'message':"Unable to update"
        })
        console.log(e);
    }
  });

  // DELETE
  app.delete("/task/:id", async(req,res)=>{
      await db.collection('tasks').deleteOne({
          _id:ObjectId(req.params.id)
      })
      res.status(200);
      res.send({
          'message':'deleted'
      })
  })
}

main();

// RUN SERVER
app.listen(3001, () => {
  console.log("Server has started");
});
