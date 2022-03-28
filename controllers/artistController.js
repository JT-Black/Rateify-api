import Artist from '../models/artist.js';
import Release from '../models/release.js';

const getAllArtists = async (req, res, next) => {
  try {
    const artists = await Artist.find().populate('releases');
    return res.status(200).json(artists);
  } catch (err) {
    next(err);
  }
};

const getArtistById = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.id).populate('releases');
    return !artist ? res.status(404) : res.status(200).json(artist);
  } catch (err) {
    next(err);
  }
};

const createArtist = async (req, res, next) => {
  try {
    const newArtist = await Artist.create(req.body);
    return res.status(201).json(newArtist);
  } catch (err) {
    next(err);
  }
};

const updateArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.id);
    artist.set(req.body);
    const savedArtist = await artist.save();
    return res.status(200).json(savedArtist);
  } catch (err) {
    next(err);
  }
};

const deleteArtist = async (req, res, next) => {
  try {
    const artist = await Artist.deleteOne({ _id: req.params.id });
    return res.status(204).send('Artist successfully deleted');
  } catch (err) {
    next(err);
  }
};

const getAllReleasesForArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.id).populate('releases');
    return res.status(200).json(artist.releases);
  } catch (err) {
    next(err);
  }
};
export default {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
  getAllReleasesForArtist
};
