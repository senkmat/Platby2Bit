import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/balance", (req, res) => {
  res.json({ balance: 45750 });
});

app.get("/api/transactions", (req, res) => {
  res.json([
    { id: 1, date: "2025-10-01", amount: -1500, description: "Platba nájmu" },
    { id: 2, date: "2025-10-15", amount: 25000, description: "Příjem výplaty" }
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server běží na portu ${PORT}`));
