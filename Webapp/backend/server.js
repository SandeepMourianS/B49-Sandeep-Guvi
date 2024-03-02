const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());


const DB_URL = "mongodb+srv://sandeepmourian10799:1234@cluster0.qfhvlwq.mongodb.net/?retryWrites=true&w=majority"

mongoose
        .connect(DB_URL,{})
        .then(() => console.log("Connected to mongodb"))
        .catch((err) => console.log("Couldn't connect to mongoDB" , err)); 


        const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});