// 'use strict'

// const db = require('../server/db')
// const {User} = require('../server/db/models')

// async function seed() {
//   await db.sync({force: true})
//   console.log('db synced!')

//   const users = await Promise.all([
//     User.create({email: 'cody@email.com', password: '123'}),
//     User.create({email: 'murphy@email.com', password: '123'})
//   ])

//   console.log(`seeded ${users.length} users`)
//   console.log(`seeded successfully`)
// }

// // We've separated the `seed` function from the `runSeed` function.
// // This way we can isolate the error handling and exit trapping.
// // The `seed` function is concerned only with modifying the database.
// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

// // Execute the `seed` function, IF we ran this module directly (`node seed`).
// // `Async` functions always return a promise, so we can use `catch` to handle
// // any errors that might occur inside of `seed`.
// if (module === require.main) {
//   runSeed()
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed
const db = require('../server/db')
const {User, Keyboard} = require('../server/db/models')

const seedUser = [
  {
    email: 'doggo@gmail',
    password: 'abc123',
    salt: 'ab246',
    googleId: 'googleString123'
  },
  {
    email: 'pizza@gmail.com',
    password: 'pepperon14lyfe',
    salt: '9876',
    googleId: 'gzsee3'
  },
  {
    email: 'hunter@cuny.edu',
    password: 'college',
    salt: 'googlyeyes',
    googleId: 'greatest'
  }
]

const seedKeyboard = [
  {
    name: 'logitech',
    quantity: 100,
    price: 80,
    description: `Vortex's newest 75% keyboard, the 83-key Race 3! Do you need dedicated arrow keys that your 60% doesn't provide, but don't want the size of a TKL? A 75% may be just for you! Most of the keys are in the "normal" spot, so there's nearly no learning curve for this keyboard.`,
    imageURL:
      'https://mechanicalkeyboards.com/shop/images/products/large_VTG83MSLV_main.jpg'
  },
  {
    name: 'Ducky One 2 RGB TKL RGB LED Double Shot PBT Mechanical Keyboard',
    quantity: 125,
    price: 120,
    description: `Includes either Year of the Pig or 1 of 2 Year of the Rat spacebars`,
    imageURL: `https://mechanicalkeyboards.com/shop/images/products/large_4284_large_DKON1787ST-USPDAZT1_main.jpg`
  },
  {
    name: 'Ducky One Pink / White Dye Sub PBT Mechanical Keyboard',
    quantity: 100,
    price: 110,
    description: `A cute qwerty keyboard`,
    imageURL: `https://mechanicalkeyboards.com/shop/images/products/large_DKON1608-USPHZWB4_main.jpg`
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})
    await User.bulkCreate(seedUser, {validate: true})
    await Keyboard.bulkCreate(seedKeyboard, {validate: true})
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}
