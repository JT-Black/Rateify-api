import Release from '../models/release.js';

const createReview = async (req, res, next) => {
  try {
    const release = await Release.findById(req.params.id);

    if (!release) {
      return res.status(404).send({ message: 'release not found' });
    }

    const newReview = {
      ...req.body,

      createdBy: req.currentUser._id
    };

    release.reviews.push(newReview);
    const savedRelease = await release.save();

    return res.status(201).json(savedRelease);
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    const { id, reviewId } = req.params;

    const release = await Release.findById(id);

    if (!release) {
      return res.status(404).send({ message: 'Release not found' });
    }

    const review = release.reviews.id(reviewId);

    if (!review) {
      return res.status(404).send({ message: 'Review not found' });
    }

    if (!review.createdBy.equals(req.currentUser._id)) {
      return res.status(401).send({ message: 'Unathorized action' });
    }

    review.remove();

    const savedRelease = await release.save();

    return res.status(200).send(savedRelease);
  } catch (error) {
    next(error);
  }
};

const updateReview = async (req, res, next) => {
  try {
    const { id, reviewId } = req.params;
    const release = await Release.findById(id);

    if (!release) {
      return res.status(404).send({ message: 'Release not found' });
    }

    const review = release.review.id(reviewId);

    if (!review) {
      return res.status(404).send({ message: 'Review not found' });
    }

    if (!review.createdBy.equals(req.currentUser._id)) {
      return res.status(401).send({ message: 'Unathorized action' });
    }

    review.set(req.body);

    const savedRelease = await release.save();
    return res.status(200).send(savedRelease);
  } catch (error) {
    next(error);
  }
};

export default {
  createReview,
  deleteReview,
  updateReview
};
