import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  balance: { type: Number, required: true },
  diff: { type: Number, required: false },
  invested: { type: Number, required: false },
});

export default mongoose.model("Transaction", transactionSchema);
