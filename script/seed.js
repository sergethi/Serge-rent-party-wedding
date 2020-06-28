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
    }),
    Products.create({
      name:
        '10x30 Heavy Duty Canopy Gazebo Outdoor Party Wedding Tent Pavilion with 6 Removable Side Walls',
      price: 169.99,
      description: `Elegant white design style and straight leg design; Rust&corrosion resistant 32mm/0.6mm thick powder coated steel, Waterproof&Anti-UV 120g Polyethylene cover/sidewalls
              Heavy-duty bungee cord straps, eyelets and Velcro fastener/ High strength PE joint fitting
              6 Transparent PVC church windows offer a good flow of light/Removable sidewalls for greater versatility and ventilation`,
      quantity: 15,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/81F-SD0hRlL._AC_SL1500_.jpg',
      category: 'Tents'
    }),
    Products.create({
      name:
        'TentandTable 20-Foot by 30-Foot Heavy Duty 14-Ounce Vinyl White Canopy Pole Tent Set with Storage Bag for Weddings, Parties, and Events',
      price: 100,
      description: `PREMIUM QUALITY - Heavy Duty 14 vinyl, designed to withstand the wear and tear of being set up and taken down multiple times each year
                  SIZE - 20 ft x 30 ft, ideal for approximately 66 people to sit down and eat
                  LIGHTWEIGHT - Can be packed up and setup without a truck or trailer and minimal tools`,
      quantity: 7,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/515COLHZweL._AC_.jpg',
      category: 'Tents'
    }),
    Products.create({
      name:
        'Peaktop Outdoor 16X32 Party Tent Heavy Duty Wedding Tent Outdoor Gazebo Event Shelter Canopy with Carry Bags',
      price: 100,
      description: `✅【UPGRADED Galvanised Framework】UPGRADED Galvanised Heavy Duty and Rust Resistant Framework: Top quality galvanised steel framework and metal corner joint makes our marquee more durable .
                  ✅【GROUND BARS】Ground Bars make tent more stability and more wind-resistant on the ground.
                  ✅【“U” Type Pegs】Additional “U” Type Pegs for better anchoring down the canopy, make it more stable
                  ✅【Good Ventilation(each sidewall panel is removable)】10 removable sidewalls & 2 zipper doors for cross`,
      quantity: 1,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71kluAFvozL._AC_SL1100_.jpg',
      category: 'Tents'
    }),
    Products.create({
      name:
        'Outdoor Waterproof Gazebo Canopy Tent, Portable Wedding Party Tent,Patio Parties Tent BBQ Shelter Canopy Gazebo for Outdoor',
      price: 50,
      description: `🏕️DURABLE DESIGN OF CONSTRUCTION:Heavy-duty painted iron frame, smart workmanship with reasonable design ensures good structure and ruggedness. The rustproof frame is excellent in ensuring that the tent lasts for a long time. New PE corner joints are heavy-duty and reinforced to make sure that the tent is stable. Each tent is equipped with 4 wind ropes and 8 tent pegs thus you can secure the tent firmly on the ground. The whole frame is designed for stability and security.
                      🏕️THICK POLYETHYLENE CLOTH: High-class PE cloth which is thick and durable for long service life. The corners of the canopy are reinforced that more protection will be provided. What’s more, the PE material is easy to clean and maintain, so you just need to wipe it gently with a damp cloth every once in a while.`,
      quantity: 6,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71lT6Wnc5XL._AC_SL1000_.jpg',
      category: 'Tents'
    }),
    Products.create({
      name:
        'Quictent Privacy 10x20 EZ Pop Up Canopy Tent Party Tent Outdoor Event Gazebo Waterproof with Roller Bag- 4 Colors',
      price: 100,
      description: `QUICK RELEASE BUTTON: Each leg with quick release button, very easy to folding, no pinching of fingers.
                    WATERPROOF & ANTI-UV: Fabric made of 420D oxford fabric, with PU-coating, waterproof and UPF 50+ Anti-UV sun protection.
                    FULLY ASSEMBLED POP-UP FRAME: Our pop-up canopy with durable anti-corrosion resistant powder-coated steel frame, folding type, very easy to set up. No loose parts, No tools needed.`,
      quantity: 5,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/81UwVuJzMML._AC_SL1100_.jpg',
      category: 'Tents'
    }),
    Products.create({
      name:
        'Lifetime 80160 Commercial Height Adjustable Folding Utility Table, 4 Feet, White Granite',
      price: 25,
      description: `Adjusts to 24-inch children's height, 29-inch table height and 36-inch countertop height
                  Superior strength and durability. Backed by a ten-year limited warranty
                  Rust-resistant powder coated steel frame. UV-Protected High-Density Polyethylene (HDPE) Top`,
      quantity: 150,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/61QibkX3WUL._AC_SL1500_.jpg',
      category: 'Seating'
    }),
    Products.create({
      name:
        'EventStable Titan Series Beige Folding Card Table and Beige Fabric Metal Folding Chair Set - 5 Pieces',
      price: 100,
      description: `Can be used indoors or outdoors
                  Lightweight and folds up easily
                  Powder coated legs are protected from scratches
                  5 total pieces
                  Free Shipping to Commercial Addresses`,
      quantity: 10,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71g4tIQYHTL._AC_SL1500_.jpg',
      category: 'Seating'
    }),
    Products.create({
      name:
        'Sandinrayli Black Plastic Folding Chair Outdoor Patio Garden Wedding Party Event Furniture Chairs 8-Pack',
      price: 100,
      description: `√ PORTABLE AND CONVENIENT: It can be manually folded and locked in an upright position, folds flat and compact for easy storage.
                      √ PERFECT FOR EVENTS: Set of 8 chair- ideal for businesses, offices, churches, schools, government, banquet halls, game halls, the black elegant design make them suitable for most situation,and makes it easy to throw parties and celebrate special occasions with friends and family.`,
      quantity: 250,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71hVRsuhhrL._AC_SL1200_.jpg',
      category: 'Seating'
    }),
    Products.create({
      name:
        'MIBOTE Globe String Lights, 55ft 112 LEDs Colored Fairy Lights Waterproof UL Listed Plug in String Lights for Outdoor Indoor Bedroom Patio Garden Party',
      price: 10,
      description: `【DECORATIVE STRING LIGHT】Our sting lights is 55ft/16.7m, 112 LEDs, RGBY (red, green, blue, yellow), non-friable, not overheat. One broken will not affect others.
                    【REMOTE & ADAPTER CONTROL】2 Switch modes are available for the led globe string lights, you could select what you want. UL Listed power supply, safe use in your home.
                    【8 LIGHTING MODES】Combination, in wave, sequential, slo-glo, chasing/flash, slow fade, twinkle/flash, steady on, change different modes according to different occasions.`,
      quantity: 200,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/81hbq2Qc7NL._AC_SL1500_.jpg',
      category: 'Lightning'
    }),
    Products.create({
      name:
        'SIEBIRD LED Color Changing Solar Wind Chime Light,Solar Star Wind Chimes Outdoor,Solar Powered LED Hanging Lamp Mobile Waterproof Romantic Wind Bell Light for Outdoor Garden Party Decoration',
      price: 20,
      description: `Solar Wind Chimes Color Changing: Our magical star solar powered wind chimes will keep you in a good mood. At night, they will glow in fantastic colors, including red, yellow, green, orange, purple, red and blue. These beautiful star wind chimes will change colorfully in your garden, changing from one color to another in a calm and gentle way, making your house more romantic. They add magic to the dark night, a colorful magic decoration.
                  Energy-Saving & Eco-Friendly: Just set the switch which is located underneath of solar panel to "ON" position for charging. It automatically charges during the day and lights up at night. The upgraded solar panel absorbs energy quickly and can last for 6-8 hours after being fully charged. Solar power is designed to save energy without wiring, installation, long-term energy saving and becoming environmentally friendly has never been easier.`,
      quantity: 150,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/61iGx3zHAKL._AC_SL1000_.jpg',
      category: 'Lightning'
    }),
    Products.create({
      name:
        '20W Color LED Flood Lights, RGB LED Flood Light with Remote Control, IP66 Waterproof Outdoor Indoor Color Changing Floodlight, Dimmable Wall Washer Light for Party, Garden, Landscape Lighting',
      price: 30,
      description: `★1.RGB projection lights come in 16 different colors and four optional modes, strobe lights and lightboard, and you can adjust the brightness.Suitable for indoor and outdoor, wedding, courtyard, lawn, stage and other places.This handy spotlight remembers the color and brightness of the last setting.
              ★2.This product adopts IP66 waterproof material.You needn't worry about the weather any more.Please note that the lamp should not be immersed in water or put into water for a long time.With an efficient aluminum body,
              ★3.You can change the color according to your own needs to create a different atmosphere.Four main colors: red, green, blue and white.A total of 16 different colors, providing colorful lighting stage garden, home, hotel, landscape and so on
              ★4The product USES widely: applies to the garden, the party, the street, the underground garage, the stage, the building, the courtyard and so on landscape illumination`,
      quantity: 30,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/51Q-WemHspL._AC_.jpg',
      category: 'Lightning'
    }),
    Products.create({
      name:
        'SANSI 70W RGB LED Flood Light, IP66 Waterproof Indoor Outdoor Color Changing LED Wall Washer Light, 16 Colors 4 Modes Dimmable Floodlight for Party, Garden, Landscape',
      price: 60,
      description: `16 COLORS & 4 MODES: Using the remote control provided, 16 different colors including daylight color are available. 5 dimmable settings can meet your brightness needs. It also offers 4 types of color changing patterns, including flash, strobe, fade and smooth. All the functions can meet all your needs for decorating a Halloween party, stage, landscape and security lighting
                  Sensitive Remote Sensor & Memory Function: With 32 Keys the IR remote control brings the RGB floodlight to life! (remote control Sensing distance:33~49ft). One remote can control several lights. The 70W RGB LED floodlights remember the color and mode you set last time, so there is no need to reset if the light is powered on again. Enjoy the colorful light decorations on children’s birthdays, Christmas celebrations, Halloween or wedding parties`,
      quantity: 15,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/61t%2BqnUnbIL._AC_SL1000_.jpg',
      category: 'Lightning'
    }),
    Products.create({
      name:
        'Starter Dj System - 2100 WATTS - Connect your Laptop, iPod via Bluetooth, USB, MP3s or Cds! 10 Speakers, Amp, Mixer/Cd Player, Mic, Headphones.',
      price: 250,
      description: `Adkins Professional Audio 10" DJ Speakers
                    2100 Watt Pyle Pro Professional DJ Amplifier
                    CDMB-5000 Dual CD Player / DJ Audio Mixer Combo w/ Bluetooth
                    Microphone & Headphones Included
                    A ready-to-go DJ Package with Everything you need to DJ.`,
      quantity: 3,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71VHYFtMNiL._AC_SL1000_.jpg',
      category: 'Sound'
    }),
    Products.create({
      name: 'Peavey Audio Performer Pack Complete Portable PA System',
      price: 400,
      description: `Includes PVi® 4B mixerTwo PVi® 10 10" speaker enclosures Two PVi® 100 dynamic cardioid microphones Two speaker stands`,
      quantity: 2,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71Z6SqojhAL._AC_SL1500_.jpg',
      category: 'Sound'
    }),
    Products.create({
      name: 'Odyssey Black Label Flight Zone (FZGSPIDDJSXBL)',
      price: 236,
      description: `All Black Anodized and Powder Coated Hardware
                  Patented Gliding Laptop Platform
                  Removable V-cut Front Access Panel
                  Exclusive Patent Pending Bevel Foam Interior
                  Heavy-Duty Ball Corners
                  Recessed Handle and Latches
                  Plenty of Cable Management Underneath & Behind the Controller`,
      quantity: 2,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71hJfIcUrxL._AC_SL1500_.jpg',
      category: 'Sound'
    }),
    Products.create({
      name:
        'Gemini ES Series ES-210MXBLU Professional Audio Portable PA System with Two 10" Passive Speakers and Microphone Included, 8 Channel Mixer, 4 Line/Mic Inputs',
      price: 400,
      description: `FULLY IMMERSIVE MULTIMEDIA AUDIO: The ES-210MXBLU Serves As An Integrated MP3 player with Connections For USB, SD, and Bluetooth. The 600W Peak, 150W RMS Class D Built-In Amplifier Will Motivate You To Share Your Sound
                  COMPLETE CONTROL: The ES-210MXBLU Portable PA Features An 8-Channel Powered Mixer with An On Board Digital Echo Effect. The Unit Also Houses Individual Bass and Treble Effects and Volume Controls for 4 Line/Mic Inputs To Completely Customize Your Sound`,
      quantity: 3,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/91l5ztcR97L._AC_SL1500_.jpg',
      category: 'Sound'
    })
    //Products.create({
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
