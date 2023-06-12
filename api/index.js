const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = 7000;

// app.use("/thallo", (req, res) => {
//     console.log("This is thallo URL");
// })

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
        useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.listen(port, () => {
    console.log("Backend is connected");
});