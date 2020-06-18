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
  },
  {
    name:
      'Tt eSPORTS Challenger Illuminated Gaming Keyboard, Black (KB-CHL002USB)',
    quantity: 10,
    price: 110,
    description: `Comprehensive 104 gaming keys layout, each key is featured with backlight design to enhance gaming atmosphere
                  On-board 32kb memory for 6 macro keys in 3 game profiles, the Illuminated edition
                  The Illuminated edition is rubber-coated textured, creates greater key-press control over your game`,
    imageURL: `https://images-na.ssl-images-amazon.com/images/I/81vLwoIQqIL._AC_SL1500_.jpg`
  },
  {
    name:
      'Razer BlackWidow Ultimate: Esports Gaming Keyboard - Dust and Spill Resistant - Individually Backlit Keys - Razer Green Mechanical Switches (Tactile and Clicky)',
    quantity: 12,
    price: 90,
    description: `The Razer BlackWidow Ultimate is resistant to both water and dust, tested to withstand IP54 conditions
                Individually programmable backlit keys along with dynamic lighting effects, all set easily through Razer Synapse
                Razer Green Mechanical switches are manufactured inhouse to ensure strict requirements are met for each switch produced, resulting in a life span of up to 80 million key strokes
                With built in 10 key roll over and anti ghosting technology, your key presses are always registered`,
    imageURL: `https://images-na.ssl-images-amazon.com/images/I/716E4DyAJ-L._AC_SL1500_.jpg`
  },
  {
    name:
      'VAKABOX 35 Key One-Handed USB Wired Mechnical Keyboard with 3 Cool Dazzling Backlit for Esport Gamer PUBG, FPS, LOL',
    quantity: 10,
    price: 70,
    description: `35 Key one-hand USB wired mechnical keyboard can achieve most of your game requiements
                 3 Cool dazzling lihgting effect backlihgt for enhance your gaming experience
                 Ergonomic hand support pad desing to give you a good hand feeling, Radium-carved key cap, never fade
                 Portable and compact design, convenient to carry anywhere
                 Compatible with Windows 2000, WinXP, WinME, Vista, Win7, Win8, Android, Linux etc.`,
    imageURL: `https://images-na.ssl-images-amazon.com/images/I/81apKTAHDjL._AC_SL1500_.jpg`
  },
  {
    name:
      'Logitech K400 Plus Wireless Touch TV Keyboard with Easy Media Control and Built-In Touchpad',
    quantity: 10,
    price: 80,
    description: `Wireless TV keyboard with touchpad: Enjoy effortless control of your TV connected computer
                  Compact and slim: Perfect for the living room
                  Comfortable, quiet keys and large (3 inch) touchpad: The ideal HTPC keyboard. Overall Dimensions Height 5.5 inch, Width 14 inch, Depth 1 inch. Touchpad Height 3 inch, Width 2 inch
                  10 meter (33 foot) wireless range: Ensures trouble free connection in the largest room (Wireless range may vary depending on operating environment and computer setup)
                  Familiar, media friendly key layout: Eliminates any learning curve while adding easy access volume controls and arrow keys
                 Plug and play design: Unifying receiver makes setup of your TV keyboard a snap
                 Connection type: Logitech unifying protocol 2.4 GigaHertz`,
    imageURL: `https://images-na.ssl-images-amazon.com/images/I/61BL-VxKv4L._AC_SL1500_.jpg`
  },
  {
    name:
      'B975 Optical Switch Gaming Keyboard by Bloody Gaming | Fastest Keyboard Switches in Gaming | Full Size | RGB LED Backlit Keyboard | Smooth & Linear Key Feedback | Detachable Wrist-Rest Design',
    quantity: 5,
    price: 120,
    description: `LIGHTNING FAST: Optic Switch technology gives you a true competitive edge with optical detection for keys that react at light speed. The continuous optical beam delivers zero-latency, with a 0.2ms response time versus the 30ms of mechanical. Each key is full NKRO and engineered with a calculated shallow stroke. This ensures each keypress can register simultaneously regardless of how many keys are pressed at a time, while also increasing active return rate and decreasing finger fatigue.
                  BATTLE TESTED DURABILITY: The LK Libra is manufactured with weapons-grade anodized aluminum, providing a lightweight frame that is smudge- and fingerprint-resistant. This keyboard has been engineered to withstand over 100 million keystrokes per switch, with a stabilizing bar that reinforces every key for tighter control and a premium, uniform key feel. With features that resist oxidation, water damage, spills, and intense gaming, you and your gear will be able to outlast the competition!
                  WATER RESISTANT & DIGITAL SENSORS: Engineered with nanocoating, a water-resistant barrier, and strategic drainage holes, this keyboard is well designed to ensure you're never out of the fight when accidents happen. The optical sensors are completely digital, freeing them from mechanical failures caused by metal friction, liquid spills, oxidization, and more. These sensors ensure extreme precision actuation and true 1:1 raw input.
                  RGB BACKLIGHTING EFFECTS: Switch between 3 default RGB LED backlighting animations or download our exclusive software for 16.8 million customizable color options and schemes. Change the color and effect to match battle intensity during game play or to represent your squad, guild, or clan. Our intuitive design incorporates easily adjustable dimming or brightening options so it won't distract from your gaming experience.
                  ERGONOMIC DESIGN: This gaming keyboard has a detachable ergonomic wrist rest and additional keys that are comfortably within reach for crucial bindings and macros. The design is ideal for strenuous gaming sessions as it helps to reduce long-term shoulder strain by allowing more neutral mouse and keyboard positioning. The wrist rest comes with two swappable wrist rest faceplates in black and red, and has been engineered to deliver total comfort and quick, convenient stowing and portability.`,
    imageURL: `https://images-na.ssl-images-amazon.com/images/I/71kyP0kQ4jL._AC_SL1500_.jpg`
  },
  {
    name:
      'Fosmon Mini Bluetooth Keyboard (QWERTY Keypad), Wireless Portable Lightweight with built-in Touchpad, works with Apple TV, PS4, Smartphones and more',
    quantity: 3,
    price: 50,
    description: `[COMPACT & PORTABLE QWERTY KEYBOARD WITH TOUCHPAD] Innovative and compact QWERTY keyboard with touchpad that provides comfort combined with the freedom of wireless connectivity. Connect to all of your favorite devices with this wireless keyboard.
                  [BLUETOOTH 3.0] With a working range of approx. 33ft/10m, easily connect and control Bluetooth devices with this wireless keyboard.
                  [LONG LASTING RECHARGEABLE BATTERY] Built-in rechargeable lithium-ion battery with up to 10 days of continuous working time and up to 50 days of standby time. The LED indicators notify when the battery is low and when it is fully charged. Charging via the included USB cable is simple and easy
                  [BACKLIT KEYBOARD] The convenient backlit keyboard is perfect for using in a dark environment.
                  [LIMITED LIFETIME WARRANTY] Includes a Limited Lifetime Warranty`,
    imageURL: `https://images-na.ssl-images-amazon.com/images/I/71sfeaiecsL._AC_SL1500_.jpg`
  },
  {
    name:
      'Corsair K70 RGB MK.2 SE Mechanical RAPIDFIRE Gaming Keyboard - USB Passthrough & Media Controls - PBT Double-Shot Keycaps - Cherry MX Speed - RGB LED Backlit (CH-9109114-NA)',
    quantity: 1,
    price: 165,
    description: `Get the RAPIDFIRE advantage CHERRY MX Speed mechanical key switches provide the reliability and accuracy you demand, with blistering fast 1.2mm actuation
                  Aircraft grade silver anodized brushed aluminum frame, built to withstand a lifetime of gaming
                  White PBT double shot keycaps for superior durability, look and feel
                  8MB profile storage with hardware macro and lighting playback allow access to up to three stored profiles on the go, independent of external software
                  Per key dynamic multi color RGB backlighting offers near unlimited color customization and control. HID keyboard report rate 1000Hz
                  CORSAIR iCUE software enables vivid dynamic lighting control, sophisticated macro programming and full system lighting synchronization across compatible CORSAIR peripherals, coolers, fans and more`,
    imageURL: `https://images-na.ssl-images-amazon.com/images/I/71TmErpb3bL._AC_SL1500_.jpg`
  },
  {
    name:
      'Apple Magic Keyboard with Numeric Keypad (Wireless, Rechargable) (US English) - Silver',
    quantity: 7,
    price: 130,
    description: `Magic Keyboard with Numeric Keypad features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys for gaming
                  A scissor mechanism beneath each key allows for increased stability, while optimized key travel and a low profile provide a comfortable and precise typing experience.
                  The numeric keypad is also great for spreadsheets and finance applications.`,
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41en9GPO2tL._AC_.jpg'
  },
  {
    name:
      'Punk Mechanical Keyboard, Gaming Esport Keyboard, Wired USB Keyboard 108 Keys for Desktop Computer and Laptop Multimedia Office,Linearaction',
    quantity: 3,
    price: 109,
    description: `Can be realistic 22 kinds of illusion light effect one-key switch, with the knob can adjust the light effect brightness, M1\M2\M3 button preset game keypad lights and can be customized.
                Equipped with a magnetic hand rest that can be quickly mounted to the front of the keyboard, the surface is durable and comfortable with a matte finish, while a number of non-slip feet are placed on the back.
                The mechanical shaft is the core of the mechanical keyboard. The tarantula strives to make the materials rigorous, long-term compression, and the loss of resilience is minimal, the real game mechanical shaft!
                Adopt anti-ghost full-key no-rush design, no matter how fast the action in the game, press at the same time, respond to the trigger at the same time, refuse the key position conflict, feel the pleasure brought by the game!
                104-key macro programming can be customized, the game is more fun and the performance is stronger.`,
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/61nnfNhNYpL._AC_SL1000_.jpg'
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
