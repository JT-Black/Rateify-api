import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const artistSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String },
  releases: [{ type: mongoose.Types.ObjectId, ref: 'Release' }],
  bio: { type: String }
});

artistSchema.plugin(uniqueValidator);

export default mongoose.model('Artist', artistSchema);
