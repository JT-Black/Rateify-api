import { connectToDb, disconnectDb } from './helpers.js';

import data from './data.js';
import Artist from '../models/artist.js';
import Release from '../models/release.js';
import User from '../models/user.js';

const adminUser = {
  username: 'admin',
  email: 'admin@admin.com',
  password: 'password!1',
  isAdmin: true
};

const normalUser = {
  username: 'user',
  email: 'user@user.com',
  password: 'password!1'
};

async function seed() {
  // Connecting.
  console.log('About to connect to Mongodb via Mongoose');
  await connectToDb();
  console.log('Successfully connected to Mongo DB via Mongoose!');

  // Clearing data
  console.log('Clearing out the DB..');
  await Release.deleteMany({});
  await Artist.deleteMany({});
  await User.deleteMany({});

  // Creating admin user
  console.log('Creating users..');
  const [admin, user] = await User.create([adminUser, normalUser]);
  console.log(`Created admin user: ${admin._id}`);
  console.log(`Created normal user: ${user._id}`);
  // Seeding
  console.log('About to seed 🌱..');
  const artists = await Artist.create(data.artists);
  //console.log('ARTISTS: ', artists);
  console.log(`Seeded ${artists.length} Artists 🎸🎵🤘🎼🎵.`);
  const releasesData = data.releases;

  for (let i = 0; i < releasesData.length; i++) {
    const artistId = artists[i]._id;
    releasesData[i].artist = artistId;
  }
  const releases = await Release.create(releasesData);
  //console.log('RELEASES: ', releases);
  console.log(`Seeded ${releases.length} Releases 🎸🎵🤘🎼🎵.`);

  // - Disconnecting.
  console.log('About to disconnect..');
  await disconnectDb();
  console.log('disconnected!');
}

seed();
