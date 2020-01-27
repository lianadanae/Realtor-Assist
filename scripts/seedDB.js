// require('dotenv').config();
// const mongoose = require("mongoose");
// var bcrypt = require('bcryptjs');

// const db = require("../models");

// // This file empties the Listing and User collections and inserts the seeds below

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// // const demoUserSeed = [
// //   {
// //     role: "user",
// //     firstName: "Demo",
// //     lastName: "One",
// //     email: "demo1@email.com",
// //     username: 'demo1'
// //   },
// //   {
// //     role: "user",
// //     firstName: "Demo",
// //     lastName: "Two",
// //     email: "demo2@email.com",
// //     username: 'demo2'
// //   }
// // ]

// const listingSeed = [
//   {
//     address: "123 Smith Street",
//     //status:active, deposit, closed, cancelled
//     dateListed: new Date(Date.now())
//   }
// ];

// async function seed() {
//   try {
//     // clear DB
//     await db.Listing.deleteOne({});
//     await db.User.deleteOne({});
    
//     const demoUserSeed = [
//       {
//         role: "user",
//         firstName: "Demo",
//         lastName: "One",
//         email: "demo1@email.com",
//         username: 'demo1',
//         password: '1234'
//       },
//       {
//         role: "user",
//         firstName: "Demo",
//         lastName: "Two",
//         email: "demo2@email.com",
//         username: 'demo2',
//         password: '1234567'
//       }
//     ]
//     // add demo users
//     const saltRounds = parseInt(process.env.PASSWORD_SALT_ROUNDS, 10);
//     const password = process.env.SEED_USER_PASSWORD;
//     await Promise.all(demoUserSeed.map(async (it) => {
//       it.passwordHash = await bcrypt.hash(password, saltRounds);
//       return;
//     }));

//     const userSeedOp = await db.User.collection.insertMany(demoUserSeed);
    
//     // put demoUser's ID on each listing
//     listingSeed.forEach((it, idx) => it.user = userSeedOp.insertedIds[idx % 2]);

//     // add demo listings to DB
//     const listingSeedOp = await db.listing.collection.insertMany(listingSeed);
//     console.log(`Inserted ${listingSeedOp.result.n} listing.`);

//     process.exit(0);

//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }

// seed();
