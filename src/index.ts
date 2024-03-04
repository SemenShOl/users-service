import express from "express";

const app = express();

const port = 5000;
app.get("/", (req, res) => {
    res.send("HI ,world");
});
app.get("/user", (req, res) => {
    res.send("This is user");
});

app.listen(port, () => console.log(`Port ${port} is listening...`));
