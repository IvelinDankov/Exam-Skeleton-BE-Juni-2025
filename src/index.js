import express from "express";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
