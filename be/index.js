import express from "express";
import cors from "cors";
import {sql} from "./config/db";
import { v4 as uuid } from "uuid";
const app = express();
import bcrypt from "bcrypt";
const PORT = 2000;
app.use(cors());
app.use(express.json());
app.post("/SignUp", async (request, response) => {
  try {
    console.log("Request Body:", request.body);
    const hash = await bcrypt.hash(request.body.password, 10);
    const id = uuid();
    await sql`INSERT INTO customer(customer_id, lastname, firstname, gmail, password) 
            VALUES (${id}, ${request.body.lastname}, ${request.body.firstname}, ${request.body.gmail}, ${hash})`;

    console.log("User created successfully:", id);
    response.status(201).send({ success: true });
  } catch (error) {
    console.error("Error:", error);
    response
      .status(500)
      .send({ success: false, error: "Internal server error" });
  }
});

app.post("/Login", (request, response) => {
  console.log(request.body);
});

app.listen(PORT, () => {
  console.log(PORT, " started");
});
