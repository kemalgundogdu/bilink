import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    profilePicture: { type: String, default: "", required: true },
    socialMedias: { type: Array, required: true, default: [] },
    links: {
      type: [
        {
          id: { type: String, required: true, unique: true },
          title: { type: String, required: true },
          items: {
            type: [
              {
                id: { type: String, required: true, unique: true },
                url: { type: String, required: true },
                label: { type: String, required: true },
              },
            ],
            default: [],
          },
        },
      ],
      required: true,
      default: [],
    },
    theme: { type: String, required: true, default: "default" },
    bio: { type: String, max: 150 },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", ProfileSchema);
