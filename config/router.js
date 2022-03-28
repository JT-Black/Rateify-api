import express from 'express';
import releaseController from '../controllers/releaseController.js';
import artistController from '../controllers/artistController.js';
import userController from '../controllers/userController.js';
import reviewController from '../controllers/reviewController.js';

import secureRoute from '../middleware/secureRoute.js';

const router = express.Router();

router
  .route('/releases')
  .get(releaseController.getAllReleases)
  .post(secureRoute, releaseController.createRelease); // admin only

router
  .route('/releases/:id')
  .get(releaseController.getReleaseById)
  .put(secureRoute, releaseController.updateRelease) // admin only
  .delete(secureRoute, releaseController.deleteRelease); // admin only

router
  .route('/releases/:id/reviews')
  .post(secureRoute, reviewController.createReview);

router
  .route('/releases/:id/reviews/:reviewId')
  .delete(secureRoute, reviewController.deleteReview)
  .put(secureRoute, reviewController.updateReview);

router
  .route('/artists')
  .post(secureRoute, artistController.createArtist) // admin only
  .get(artistController.getAllArtists);

router
  .route('/artists/:id')
  .delete(secureRoute, artistController.deleteArtist)
  .put(secureRoute, artistController.updateArtist)
  .get(artistController.getArtistById);

router
  .route('/artists/:id/releases')
  .get(artistController.getAllReleasesForArtist);

router.route('/register').post(userController.registerUser);

router.route('/login').post(userController.loginUser);

router.route('/admin').get(secureRoute, userController.getAllUsers);

router
  .route('/admin/:id')
  .delete(secureRoute, userController.deleteUser)
  .put(secureRoute, userController.updateUser);

export default router;
