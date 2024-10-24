import express from "express";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Root API working",
  });
});

app.listen(3000, () =>
  console.log("Server is running on port http://localhost:3000")
);
