import express from "express";
import { createUserSchema } from "@tclastrpc/utils";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

// app.get("/", (req, res) => {
//   return res.json("app is working");
// });

// app.post("/user", async (req, res) => {
//   const result = createUserSchema.safeParse(req.body);

//   //fix all error
//   if (!result.success) {
//     return res.status(400).json({ message: "Invalid user data" });
//   }

//   const { name, email, password } = result.data;

//   console.log(name, email, password);
//   res.json({ message: "User created successfully" });
// });

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
