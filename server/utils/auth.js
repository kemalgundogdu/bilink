import jwt from "jsonwebtoken";

export const createAccessToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const createRefreshToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, process.env.REFRESH_SECRET, {
    expiresIn: "7d",
  });
};