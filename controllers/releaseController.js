import Release from '../models/release.js';
import Artist from '../models/artist.js';

const getAllReleases = async (req, res, next) => {
  try {
    const releases = await Release.find().sort({ title: 1 }).populate('artist');
    return res.status(200).json(releases);
  } catch (err) {
    next(err);
  }
};

const getReleaseById = async (req, res, next) => {
  try {
    const release = await Release.findById(req.params.id).populate('artist');
    return !release ? res.status(404) : res.status(200).json(release);
  } catch (err) {
    next(err);
  }
};

const createRelease = async (req, res, next) => {
  try {
    const newRelease = await Release.create(req.body);
    await Artist.updateMany(
      { _id: newRelease.artist },
      { $push: { releases: newRelease._id } }
    );
    return res.status(201).json(newRelease);
  } catch (err) {
    next(err);
  }
};

const updateRelease = async (req, res, next) => {
  try {
    //if (req.currentUser.isAdmin) {
    const release = await Release.findById(req.params.id);
    release.set(req.body);
    const savedRelease = await release.save();
    return res.status(200).json(savedRelease);
    //}
  } catch (err) {
    next(err);
  }
};
// return res.status(401).send({
//   message: 'Unauthorized: you must be an admin to edit a release'
// });
// };

const deleteRelease = async (req, res, next) => {
  try {
    const release = await Release.deleteOne({ _id: req.params.id });
    await Artist.updateMany(
      { _id: release.artist },
      { $pull: { releases: release._id } }
    );
    return res.status(204).send('Release successfully deleted');
  } catch (err) {
    next(err);
  }
};

export default {
  getAllReleases,
  getReleaseById,
  createRelease,
  updateRelease,
  deleteRelease
};
