import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function fetchAirbankBalance() {
  const url = "https://api.airbank.cz/public/accounts"; // public endpoint
  const headers = { "X-Client-Id": process.env.AIRBANK_CLIENT_ID };

  const response = await axios.get(url, { headers });
  const account = response.data?.accounts?.[0];
  return account?.balance ?? 0;
}
