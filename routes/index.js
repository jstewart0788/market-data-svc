const express = require("express");
const axios = require("axios");
const router = express.Router();

const AUTH = process.env.AUTH;

router.get("/options-chain", async (req, res) => {
  try {
    const { data = {} } = await axios({
      method: "get",
      url: "https://sandbox.tradier.com/v1/markets/options/chains",
      params: {
        symbol: "MSFT",
        expiration: "2020-02-14",
        greeks: "true"
      },
      headers: {
        Authorization: `Bearer ${AUTH}`,
        Accept: "application/json"
      }
    });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ msg: " Error Occured!", err });
  }
});

module.exports = router;
