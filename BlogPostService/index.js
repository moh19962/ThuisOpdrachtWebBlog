const express = require("express");
const app = express();
const cors = require("cors"); //ga eens na waarom deze module wordt gebruikt
const port = process.env.PORT || 3015;
const pub = require("./publisher.js");
require("./consumer.js"); //For starting consumer
var mongoose = require("mongoose");
var blogpost = mongoose.model("blogPostSchema");
var comment = mongoose.model("comment");

app.use(cors());
app.use(express.json());

app.delete("/posts/:id", async (req, res) => {
  try {
    //opslaan in db en wanneer dit lukt kun je doorgaan met bijv. het
    //geven van een respons bijv. 202 Accepted en de message op de event broker plaatsen.
    //in het andere geval: raise an exception!
    //in both cases return a response
    res.send("value");
    await pub("value");
  } catch (err) {
    // melding teruggeven
  }
});
// app.get('/ophalen',async(req, res,next) => {
//     try{
//         await pub('naam ophalen');
//         res.send('verzonden via Blog Service naar Comment Service en terug : '+msg.toString());
//     }catch(err){
//         res.send('uit Blog Service : ' +err);
//     }
// })

// async function consume2(){

//         const connection = await rabbitConnection;
//         if(channel === undefined){
//            channel = await connection.createChannel();
//         }
//         const qok = await channel.assertQueue("reply",{ exclusive: false});
//         const bindQueue = await channel.bindQueue("reply","PubSubDemo","message.for.post_and_reply");
//         await channel.consume("reply", message =>{
//             console.log("Wacht op messages...");
//             console.log(`Consumed message in Postblog service in the index.js : ${message.content.toString()}`);
//             msg = message.content.toString();
//             channel.ackAll();
//         });

//     }

// consume2();

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
