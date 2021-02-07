const products = [
  {
    name: 'Apple AirPods Max - Space Gray',
    image: '/images/apple-airpods.jpg',
    description:
      'AirPods Max: Up to 20 hours of listening time on a single charge with Active Noise Cancellation or Transparency mode enabled; Up to 20 hours of movie playback on a single charge with spatial audio on; Up to 20 hours of talk time on a single charge; 5 minutes of charge time provides around 1.5 hours of listening time. AirPods Max with Smart Case: Storage in the Smart Case preserves battery charge in ultra-low-power state; Charging via Lightning connector',
    brand: 'Apple',
    category: 'Electronics',
    price: 699.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'New Apple iPhone 12 Pro Max',
    image: '/images/apple_iphone_12.jpg',
    description:
      'iPhone 12 Pro Max. 5G to download huge files on the go and stream HDR video.1 Larger 6.7-inch Super Retina XDR display.2 Ceramic Shield with 4x better drop performance.3 Incredible low-light photography with the best Pro camera system on an iPhone, and 5x optical zoom range. Cinema-grade Dolby Vision video recording, editing, and playback. Night mode portraits and next-level AR experiences with the LiDAR Scanner. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.4 For infinitely spectacular possibilities.',
    brand: 'Apple',
    category: 'Electronics',
    price: 1599.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Canon EOS 250D kit 18-55 IS STM Black',
    image: '/images/canon.jpg',
    description:
      'The Canon EOS 250D is an ultra-compact digital SLR that features a 24MP APS-C-sized CMOS sensor, DIGIC 8 processor and Dual Pixel autofocus system. The main differences between the SL3 and SL2 is the addition of Eye AF during live view, an even smaller and lighter body, and 4K video. While its Dual Pixel AF system promises very good live view and video performance, the through-the-viewfinder AF system is aging. This camera has a fully articulating 3" touchscreen display with an easy-to-use interface, 1080/60p video capture and a burst rate of up to 5 fps. The SL3 can capture 4K video but with a substantial crop and no Dual Pixel AF. Connectivity options include Wi-Fi (with NFC) and Bluetooth. A versatile standard zoom for Canon APS-C-format DSLRs, the EF-S 18-55mm f/4- 5.6 IS STM Lens is a sleek and flexible option for everyday shooting. Spanning a 28.8 -88mm equivalent focal length range, this lens covers wide-angle to portrait-length perspectives, and features an Optical Image Stabilizer to minimize the appearance of camera shake by up to four stops for sharper handheld shooting. One aspherical element is featured in the optical design to improve sharpness and resolution by minimizing spherical aberrations and distortion, and a Super Spectra coating has also been applied to suppress flare and ghosting.',
    brand: 'Canon',
    category: 'Electronics',
    price: 799.99,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  
  {
    name: 'HP ZBook Create G7 (3J006AV_V1) Silver',
    image: '/images/hp_zbook.jpg',
    description:
      'The HP ZBook Create G7 is the jack-of-all-trades multimedia monster for mobile creators rocking a super-thin chassis and plenty of power.',
    brand: 'HP',
    category: 'Electronics',
    price: 3459.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Apple New MacBook Air M1 13.3 256Gb MGND3 Gold 2020',
    image: '/images/macbook-air.jpg',
    description:
      'Available in Silver, Space Gray, and Gold. Powered by the M1 Chip, 8GB RAM, and a 256GB solid state drive. Works with even graphics-intensive games and apps. Has a battery life that lasts up to 18 hours.',
    brand: 'Apple',
    category: 'Electronics',
    price: 999.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 359.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'APS5 Bundle - Includes PS5 Console, Dualsense 5',
    image: '/images/ps5.jpg',
    description:
      'Combo Includes-PS5 Console, Dualsense 5 Controller, Spider-man: Miles Morales Ultimate Edition and Sackboy: A Big Adventure. Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills. RE-STUFFED. RE-STITCHED. RE-ZIPPED - Sackboy returns to the big time stuffed with fresh moves and game-changing gadgets in an awe-inspiring and downright fun 3D adventure in this new, but familiar world.',
    brand: 'Sony',
    category: 'Electronics',
    price: 699.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Apple Watch Series 6',
    image: '/images/apple_watch.jpg',
    description:
      'Monitor even more of your health with the Apple Watch Nike Series 6. The Series 6 adds pulse oximetry to measure your bloods oxygen levels (SpO2) in just 15 seconds, as well as showing you your VO2 Max (maximum oxygen consumption) score. These indicators can provide early warnings to possible respiratory conditions. They are joined by an optical',
    brand: 'Apple',
    category: 'Electronics',
    price: 699.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Apple 27" iMac with Retina 5K Display',
    image: '/images/apple.jpg',
    description:
      `Take your creative ideas from conception to completion with the 27" iMac with Retina 5K Display from Apple. Intuitive and packed with powerful tools, you'll be able to take your ideas to the next level, and the 27" display will further elevate your experience, alongside an improved processor, graphics, memory and storage, and enhanced audio and video`,
    brand: 'Apple',
    category: 'Electronics',
    price: 1859.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
 
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 199.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'GoPro HERO7 White (CHDHB-601-RW)',
    image: '/images/go-pro.jpg',
    description:
      'A Full HD version of the HERO7 lineup, the GoPro HERO7 White is the base model of the three HERO7 action cameras and is designed for the adventurer. It offers user-friendly features across the board including a 2" touchscreen, intuitive Touch Zoom shot framing, built-in digital stabilization, voice control, a photo timer, vertical photo capture for seamless',
    brand: 'GoPro',
    category: 'Electronics',
    price: 159.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'CANON EOS 200D II Silver',
    image: '/images/canon_eos.jpg',
    description:
      'CANON EOS 200D II is Canon’s lightest DSLR with a Vari-angle Touch Screen LCD.',
    brand: 'CANON',
    category: 'Electronics',
    price: 759.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },

]

export default products
