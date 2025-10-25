import express from "express";
import { fetchAirbankBalance } from "../utils/airbank.js";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// Vrátí aktuální zůstatek z Air Bank API
router.get("/balance", async (req, res) => {
  try {
    const balance = await fetchAirbankBalance();
    res.json({ balance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chyba při načítání zůstatku" });
  }
});

// Vrátí historii z databáze
router.get("/transactions", async (req, res) => {
  const data = await Transaction.find().sort({ date: -1 });
  res.json(data);
});

export default router;
