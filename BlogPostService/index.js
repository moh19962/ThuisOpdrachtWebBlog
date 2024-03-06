const express = require("express");
const app = express();
const cors = require("cors"); //ga eens na waarom deze module wordt gebruikt
const port = process.env.PORT || 3015;
const pub = require("./publisher.js");
require("./consumer.js"); //For starting consumer
// const BlogPost = require("../models/blogpost");
const BlogPost = require("../models/blogpost");
// var comment = mongoose.model("../models/comment.js");

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

// Route om een POST-verzoek te verwerken
// Voeg deze route toe voor het opslaan van een nieuwe post
app.post("/posts/:userId", async (req, res) => {
  const { title, content } = req.body;
  const userId = req.params.userId;
  try {
    const newPost = new BlogPost({
      _id: "5f8d0d55b54764421b7156d9", // Een geldige ObjectId string
      title,
      content,
    });
    await newPost.save(); // Opslaan in de database
    res.status(201).json({ message: "Bericht geplaatst", id: userId });
  } catch (error) {
    console.error(error); // Dit zal de fout naar de console loggen.
    res.status(500).json({ error: error.message }); // Dit stuurt de foutmelding terug naar de client.
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
