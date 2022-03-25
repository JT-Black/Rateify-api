import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxlength: 500 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

const releaseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    artwork: { type: String, required: true },
    genres: { type: Array },
    releaseYear: { type: Number },
    url: { type: String, required: true },
    artist: { type: mongoose.Schema.ObjectId, ref: 'Artist', required: true },
    likes: { type: mongoose.Schema.ObjectId, ref: 'User' },
    reviews: [reviewSchema]
  },
  { timestamps: true }
);

export default mongoose.model('Release', releaseSchema);
