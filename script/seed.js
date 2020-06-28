'use strict'

const db = require('../server/db')
const {User, Products, Category, Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({name: 'Cody', email: 'cody@email.com', password: '123'}),
    User.create({name: 'Murphy', email: 'murphy@email.com', password: '123'})
  ])
  // const categories = await Promise.all([
  //   Category.create({
  //     name: 'Tents'
  //   }),
  //   Category.create({
  //     name: 'Seating'
  //   }),
  //   Category.create({
  //     name: 'Lighting'
  //   }),
  //   Category.create({
  //     name: 'Sound'
  //   })
  // ])
  const orders = await Promise.all([
    Order.create({
      recipientName: 'Cody',
      recipientEmail: 'cody@gmail.com',
      status: 'PROCESSING',
      items: [],
      subtotal: 2000
    }),
    Order.create({
      recipientName: 'Nes',
      recipientEmail: 'nes@gmail.com',
      status: 'CANCELED',
      items: [],
      subtotal: 1000
    }),
    Order.create({
      recipientName: 'Jess',
      recipientEmail: 'jess12@gmail.com',
      status: 'COMPLETED',
      items: [],
      subtotal: 3000
    }),
    Order.create({
      recipientName: 'Orlando',
      recipientEmail: 'orlando25@gmail.com',
      status: 'COMPLETED',
      items: [],
      subtotal: 2500
    })
  ])
  const products = await Promise.all([
    Products.create({
      name:
        'LEMY 10 X 20 Outdoor Wedding Party Tent Camping Shelter Gazebo Canopy with Removable Sidewalls Easy Set Gazebo BBQ Pavilion Canopy Cater Events',
      price: 50,
      description: `Elegant white design style and straight leg design; Rust&corrosion resistant 32mm/0.6mm thick powder coated steel, Waterproof&Anti-UV 120g Polyethylene cover/sidewalls
                  Heavy-duty bungee cord straps, eyelets and nylon fastener/ High strength PE joint fitting
                  6 Transparent PVC church windows offer a good flow of light/Removable sidewalls for greater versatility and ventilation
                  Easy to set up, all hardware for assembly；Comes with ropes and stakes for added stability
                  Note:This product is designed for Garden and Leisure events in good weather. We do not insure that it can work in windy or rainy days`,

      quantity: 5,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/4188vpaXfUL._AC_.jpg',
      category: 'Tents'
    }),
    Products.create({
      name:
        'VINGLI 48" Round Bi-Folding Commercial Table, 4 Feet Portable Plastic Dining Card Table for Kitchen or Outdoor Party Wedding Event, White Granite',
      price: 20,
      description: `✔ EASY TRANSPORTATION & STORAGE: Fold in half feature minimized storage space, a carrying handle included for easy transportation
                  ✔ LIGHTWEIGHT DESIGN: Wight 30 lbs only, approximately the weight of a two-year-old child
                  ✔ HIGH CAPACITY: 48" diameter blow molding plastic table with steel frame allows loading capacity up to 900 lbs; Seat capacity 6 to 8 adults
                  ✔ MULTI-FUNCTIONAL: Apply to multitude settings include indoor and outdoor; such as banquet hall, conference center, cafeteria, school, kitchen, playing room, restaurant; or garden, deck, patio, lawn and etc.
                  ✔ QUALITY GUARANTEED: To ensure a 100% customer satisfaction, we provide 30 days free trail use and 10 years warranty. We are confident to stand behind our product and would like to guarantee you a best shopping experience.`,
      quantity: 15,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/51Ehird8X2L._AC_SL1000_.jpg',
      category: 'Seating'
    }),
    Products.create({
      name:
        'LE 306 LED Curtain Lights 9.8 x 9.8 ft Fairy String Lights for Bedroom Wall Wedding Backdrop Patio Party Garden, Warm White, 8 Modes, Plug in Indoor Outdoor Decorative Window Twinkle Christmas Lights',
      price: 10,
      description: `9.84 ft * 9.84 ft 306 LED Icicle Lights: The soft white waterfall fairy lights come with 18 light strands and each string contains 17 pcs LED lights. 9.84 ft (118 inch) in width and height make it is wide and long enough to cover most of standard windows, walls and even perfect to wrap it around a canopy bed or pergola in the backyard.
                  Stay On & 7 Blinking Modes: Press the button on the transformer to cycle trough the 8 different light effects: Combination, In Waves, Sequential, Slo-glo, Chasing/Flash, Slow Fade, Twinkle/Flash, and Steady On.
                  Safe and Heat Free: Come with an ETL Certified transformer and operated with low voltage (30 V DC, 120 mA). It is safe to touch and will not overheat for a long time use. Note: Use only the provided adapter, or one with the same voltage from a reputable manufacturer
                  Remember the Light Effect Settings. Do not have to manually select your preferred setting every time you turn them back on.
                  Great Decoration for Everyday use: It can not only be used as Christmas decor, party weddings backdrop, but also perfect for everyday use such as hanging it down across tapestry, sheers, drapes, glass slide door, plain wall or even installed as lighted divider of 2 rooms, and you can keep it up all year round after the holiday season.`,
      quantity: 30,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71ck5ku%2BY2L._AC_SL1000_.jpg',
      category: 'Lightning'
    }),
    Products.create({
      name:
        'AKUSTIK 12 Inch 4000Watt Powered PA Speaker System Combo Set, DJ Array Speaker Set with Remote Control, Two Subwoofers & 8 X Array Speakers Set, Bluetooth/USB/SD/RCA',
      price: 300,
      description: `♪AKUSTIK 4000WATT POWERED ARRAY SPEAKER SET: This professional array speaker set consists of 1 X (active subwoofer), 1 X (passive subwoofer), 8 X (4’’ array speakers), 2 X(adjustable speaker stands), 1 X (16.7-feet speaker line), 6 X (14’’ speakon cables), 1 X (8-feet 6.35mm+ speakon cables), 1 X (20-feet 6.35mm+speaker cables), 1 X (remote control) and 1 X (user manual). The good performance and high price - ratio could meet the performance needs and bring the audience to an audio-visual feast.
                    ♪BLUETOOTH WIRELESS AUDIO STREAMING: Considering the convenience of use, this PA system array speaker set have Bluetooth design which makes it available to instantly pair with devices like smartphones, iPod, iPad, laptops…The Bluetooth function can give you virtually limitless music options. The remote control function also makes this powered combo set easier to operate, you can change modes, choose into previous/next song, play/pause, increase/decrease volume according to your favor.
                    ♪MULTI-FUNCTIONAL POWERED PA SYSTEM SPEAKER: This 12-inch speaker combo Set has 1000W RMS power and 4000W peak power which is suitable for large performance which can accommodate nearly a thousand people. Even at maximum volume, there’s very little noise and distortion. The highs, mid, and lows are clear and distinct. This pa system speaker set is also awesome for house parties, smaller venue gigs, birthday party, reception, country gigs, wedding, gymnastics and etc.
                    ♪EASY TO USE AND CONTROL: This array speaker set has good compatibility with integrated USB and SD card reader which are great options for playing back your music. Versatile 4-channel mono and stereo inputs: including 2 X mono XLR inputs for microphone/line-level source, 1 X stereo 6.35mm input and 1 X stereo RCA input. The speaker out function (include stereo RCA output) makes this speaker easily to connecting with other speakers to provide a better performance.
                    ♪PROFESSIONAL MUSIC EXPERIENCE: Using high-quality MDF materials for the two subwoofers, this design can reduce resonance distortion and accurate response. The 8 tweeters, 8 mid-tweeters and 2 subwoofers are design to provide clear and deep stereo sound. This PA system speaker set includes two telescoping speaker poles which make the overall height adjustable from 68 inch to 86 inch to ensure good acoustics. There are built-in handles on the side, easily to lift and transport the subwoofers.`,
      quantity: 4,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/6121gDyIe8L._AC_SL1200_.jpg',
      category: 'Sound'
    })
    //   Products.create({
    //     name: '',
    //     price: ,
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }), Products.create({
    //     name: '',
    //     price: '',
    //     description: '',
    //     quantity: '',
    //     imageURL: ''
    //   }),
  ])

  // await Promise.all([
  //   products[0].addCategory(categories[0]),
  //   products[1].addCategory(categories[1]),
  //   products[2].addCategory(categories[2]),
  //   products[3].addCategory(categories[3])
  // ])
  // await Promise.all([
  //   //orders[0].setUser(users[1]),
  //   orders[1].setUser(users[1]),
  //   orders[2].setUser(users[0]),
  //   orders[3].setUser(users[0])
  // ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  // console.log(`seeded ${categories.length} categories `)
  console.log(`seeded ${orders.length} orders `)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
