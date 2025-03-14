import Profile from "../models/profileModel.js";
import User from "../models/userModel.js";

// one profile
export const oneProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// create profile
export const createProfile = async (req, res) => {
  try {
    const { socialMedias, links, theme, bio, city } = req.body;
    if (!socialMedias || !links || !theme || !bio || !city)
      return res.status(400).json({ error: "All input is required" });

    const userId = req.user.id;
    if (!userId) return res.status(400).json({ error: "Unauthorized" });
    

    // user control
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // profile control
    const existingProfile = await Profile.findOne({ userId });
    if (existingProfile) {
      return res.status(400).json({ error: "Profile already exists for this user" });
    }

    const newProfile = new Profile({
      userId,
      socialMedias,
      links,
      theme,
      bio,
      city,
    });
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
