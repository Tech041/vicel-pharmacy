import NewsLetter from "../models/newsLetter.js";

export const subscribeNewsLetter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.json({ success: false, message: "Email is required" });
    }
    const isSubscribed = await NewsLetter.findOne({ email });
    if (isSubscribed) {
      return res.json({ success: false, message: "Has already subscribed" });
    }

    const subscribedUser = await NewsLetter.create({ email });
    return res.json({
      success: true,
      subscribedUser,
      message: "Subscription successful",
    });
  } catch (error) {
    console.log("Error subscribing user", error);
  }
};
export const getSubscribedUser = async (req, res) => {
  try {
    const user = await NewsLetter.find({});
    return res.json({ success: true, user });
  } catch (error) {
    console.log("Error fetching subscribed user", error);
  }
};
