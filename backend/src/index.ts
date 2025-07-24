import express from "express";

const app = express();
const PORT = 5000;


app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});