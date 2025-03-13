import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


// register
export const register = async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      profilePicture,
      coverPicture,
      desc,
      city,
    } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profilePicture,
      coverPicture,
      desc,
      city,
    });
    const user = await newUser.save();
    res.status(200).json({ message: "Registration is successful", user });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    !user && res.status(400).json("Invalid username or password");
    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword && res.status(400).json("Invalid username or password");

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    const { password: pass, ...other } = user._doc;
    res.status(200).json({ ...other, accessToken });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// logout
export const logout = (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json("Logged out");
};

// refresh token
export const refresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("No refresh token provided");
    }
    const payload = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const user = await User.findById(payload.id);
    if (!user) {
      return res.status(403).json("Invalid refresh token, user not found");
    }
    const newAccessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    console.error('Refresh token verification error:', error.message);
    res.status(403).json("Invalid refresh token");
  }
};