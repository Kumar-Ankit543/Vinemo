import express from "express";
import db from "@repo/db/client";

const app = express();
app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInfo: {
    token: string;
    userId: number;
    amount: string;
  } = {
    token: req.body.token,
    userId: req.body.user_indentifier,
    amount: req.body.amount,
  };
  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: paymentInfo.userId,
        },
        data: {
          amount: {
            increment: Number(paymentInfo.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInfo.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    res.status(200).json({
      message: "Captured",
    });
  } catch (error) {
    console.log(`error ${error}`);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});

app.listen(3003, () => {
  console.log("server running on port 3003");
});
