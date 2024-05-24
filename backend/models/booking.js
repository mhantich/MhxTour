import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    UserID: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    tourId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },

    userEmail: {
      type: String,
      required: true,
    },
    fullNsame: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    bookAt: {
      type: Date,
    },
    guest: {
      type: Number,
      required: true,
    },
    tottal: {
      type: Number,
    },
  },
  { timestamps: true }
);

const booking = mongoose.model("booking", bookingSchema);

export default booking;

