import mongoose from 'mongoose';

export const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  releases: [{ type: mongoose.Types.ObjectId, ref: 'Release' }],
  bio: { type: String }
});

export default mongoose.model('Artist', artistSchema);
