import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Live Score Server is running!");
});

app.listen(port, () => {
  return console.log(
    `Live Score Server is listening at http://localhost:${port}`
  );
});
