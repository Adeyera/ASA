require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Artwork = require('./models/Artwork');

// Free image sources: The Met (CC0), Unsplash, Pexels
const IMG = {
  yorubaVessel: 'https://images.metmuseum.org/CRDImages/ao/original/DT1675.jpg',
  akanMemorial: 'https://images.metmuseum.org/CRDImages/ao/original/DP231466.jpg',
  akanGoldweight: 'https://images.metmuseum.org/CRDImages/ao/original/DP-30069-001.jpg',
  akanHead: 'https://images.metmuseum.org/CRDImages/ao/original/DP231464.jpg',
  dogonPriest: 'https://images.metmuseum.org/CRDImages/ao/original/DP302219.jpg',
  dogonArk: 'https://images.metmuseum.org/CRDImages/ao/original/DT1216.jpg',
  dogonCouple: 'https://images.metmuseum.org/CRDImages/ao/original/DT1217.jpg',
  igboFigure: 'https://images.metmuseum.org/CRDImages/ao/original/DP-15497-001.jpg',
  asanteLion: 'https://images.metmuseum.org/CRDImages/ao/original/DP-30078-001.jpg',
  kubaTextile: 'https://images.metmuseum.org/CRDImages/ao/original/DP231462.jpg',
  kubaMask: 'https://images.metmuseum.org/CRDImages/ao/original/DP231463.jpg',
  contemporary1: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
  beadwork: 'https://images.unsplash.com/photo-1633424974356-0d2f050f9247?w=800&q=80',
  abstractPaint: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
  studioPaint: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
  gallery1: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery2: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery3: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const ARTISTS = [
  {
    name: 'Amara Okonkwo',
    email: 'amara.okonkwo@heritagear.africa',
    password: 'seedpassword123',
    role: 'artist',
    bio: 'Lagos-based painter exploring Igbo masquerade traditions and Yoruba market life through bold contemporary colour.',
    location: { country: 'Nigeria', city: 'Lagos' },
  },
  {
    name: 'Kofi Mensah',
    email: 'kofi.mensah@heritagear.africa',
    password: 'seedpassword123',
    role: 'artist',
    bio: 'Accra sculptor and mixed-media artist inspired by Akan goldweights, Adinkra symbolism, and Asante royal craft.',
    location: { country: 'Ghana', city: 'Accra' },
  },
  {
    name: 'Fatoumata Diallo',
    email: 'fatoumata.diallo@heritagear.africa',
    password: 'seedpassword123',
    role: 'artist',
    bio: 'Bamako artist working in wood and earth pigments, honouring Dogon cosmology and Mandé storytelling.',
    location: { country: 'Mali', city: 'Bamako' },
  },
  {
    name: 'Thandiwe Nkosi',
    email: 'thandiwe.nkosi@heritagear.africa',
    password: 'seedpassword123',
    role: 'artist',
    bio: 'Johannesburg painter blending Ndebele geometric pattern with contemporary abstract expression.',
    location: { country: 'South Africa', city: 'Johannesburg' },
  },
  {
    name: 'Zainab Hassan',
    email: 'zainab.hassan@heritagear.africa',
    password: 'seedpassword123',
    role: 'artist',
    bio: 'Nairobi textile and beadwork artist drawing on Swahili coast trade motifs and Maasai adornment.',
    location: { country: 'Kenya', city: 'Nairobi' },
  },
  {
    name: 'Chidi Eze',
    email: 'chidi.eze@heritagear.africa',
    password: 'seedpassword123',
    role: 'artist',
    bio: 'Enugu sculptor and carver working in the Igbo tradition of ancestral figures and ceremonial house imagery.',
    location: { country: 'Nigeria', city: 'Enugu' },
  },
];

const ARTWORKS = [
  {
    artistEmail: 'amara.okonkwo@heritagear.africa',
    title: 'Ọjà Market at Dawn',
    description: 'A vibrant contemporary canvas capturing the first light over Balogun Market — traders arranging kente wrappers, pepper stalls steaming, and the hum of Lagos waking up.',
    medium: 'Acrylic on Canvas',
    style: 'Contemporary',
    subject: 'Urban Life',
    price: { ngn: 285000, usd: 660 },
    dimensions: { height: 100, width: 140, unit: 'cm' },
    images: [{ url: IMG.contemporary1, alt: 'Ọjà Market at Dawn' }],
    tags: ['lagos', 'market', 'yoruba', 'contemporary'],
    culturalOrigin: { country: 'Nigeria', region: 'Southwest', tribe: 'Yoruba' },
    yearCreated: 2024,
    materials: ['Acrylic', 'Canvas'],
    isFeatured: true,
  },
  {
    artistEmail: 'kofi.mensah@heritagear.africa',
    title: 'Nsodie — Memorial Head',
    description: 'A contemporary reinterpretation of the Akan nsodie tradition — honouring ancestors through sculpted remembrance, rendered in terracotta and gold leaf.',
    medium: 'Terracotta & Gold Leaf',
    style: 'Traditional',
    subject: 'Ancestral Memory',
    price: { ngn: 420000, usd: 970 },
    dimensions: { height: 45, width: 30, unit: 'cm' },
    images: [{ url: IMG.akanMemorial, alt: 'Nsodie Memorial Head' }],
    tags: ['akan', 'ghana', 'ancestral', 'sculpture'],
    culturalOrigin: { country: 'Ghana', region: 'Central', tribe: 'Akan' },
    yearCreated: 2023,
    materials: ['Terracotta', 'Gold Leaf'],
    isFeatured: true,
  },
  {
    artistEmail: 'fatoumata.diallo@heritagear.africa',
    title: 'Priest of the Cliff',
    description: 'Inspired by Dogon cliff-dwelling spirituality — a carved figure with arms raised in invocation, echoing the priests who read the stars above Bandiagara.',
    medium: 'Carved Wood',
    style: 'Tribal',
    subject: 'Spirituality',
    price: { ngn: 380000, usd: 880 },
    dimensions: { height: 72, width: 22, unit: 'cm' },
    images: [{ url: IMG.dogonPriest, alt: 'Priest of the Cliff' }],
    tags: ['dogon', 'mali', 'spirituality', 'wood carving'],
    culturalOrigin: { country: 'Mali', region: 'Bandiagara', tribe: 'Dogon' },
    yearCreated: 2023,
    materials: ['Hardwood', 'Natural Pigment'],
    isFeatured: true,
  },
  {
    artistEmail: 'chidi.eze@heritagear.africa',
    title: 'Obu — House of Images',
    description: 'An Igbo ceremonial figure from the tradition of the obu, where ancestral images guard the lineage. Carved with ritual scarification marks and a quiet, watchful presence.',
    medium: 'Carved Wood',
    style: 'Traditional',
    subject: 'Ancestral Guardianship',
    price: { ngn: 510000, usd: 1180 },
    dimensions: { height: 95, width: 28, unit: 'cm' },
    images: [{ url: IMG.igboFigure, alt: 'Obu House of Images' }],
    tags: ['igbo', 'nigeria', 'ancestral', 'ceremonial'],
    culturalOrigin: { country: 'Nigeria', region: 'Southeast', tribe: 'Igbo' },
    yearCreated: 2024,
    materials: ['Iroko Wood', 'Kaolin'],
    isFeatured: true,
  },
  {
    artistEmail: 'amara.okonkwo@heritagear.africa',
    title: 'Owo Ceremonial Vessel',
    description: 'A lidded vessel in the Owo-Yoruba tradition — used in royal ceremonies to hold kola nuts offered to guests and ancestors alike.',
    medium: 'Bronze Casting',
    style: 'Traditional',
    subject: 'Royal Ceremony',
    price: { ngn: 650000, usd: 1500 },
    dimensions: { height: 38, width: 28, unit: 'cm' },
    images: [{ url: IMG.yorubaVessel, alt: 'Owo Ceremonial Vessel' }],
    tags: ['yoruba', 'bronze', 'ceremonial', 'owo'],
    culturalOrigin: { country: 'Nigeria', region: 'Southwest', tribe: 'Yoruba' },
    yearCreated: 2022,
    materials: ['Bronze'],
  },
  {
    artistEmail: 'kofi.mensah@heritagear.africa',
    title: 'Adinkra Sky',
    description: 'An abstract canvas where Adinkra symbols — Gye Nyame, Sankofa, Dwennimmen — dissolve into a sky of indigo and gold, speaking of wisdom passed through generations.',
    medium: 'Acrylic on Canvas',
    style: 'Abstract',
    subject: 'Symbols',
    price: { ngn: 220000, usd: 510 },
    dimensions: { height: 90, width: 120, unit: 'cm' },
    images: [{ url: IMG.abstractPaint, alt: 'Adinkra Sky' }],
    tags: ['adinkra', 'abstract', 'ghana', 'symbols'],
    culturalOrigin: { country: 'Ghana', region: 'Ashanti', tribe: 'Akan' },
    yearCreated: 2024,
    materials: ['Acrylic', 'Canvas', 'Gold Pigment'],
  },
  {
    artistEmail: 'fatoumata.diallo@heritagear.africa',
    title: 'Aduno Koro — Ark of the World',
    description: 'A vessel carved with ancestral figures, referencing the Dogon Aduno Koro — the ark that carried the eight ancestors and the seeds of all living things.',
    medium: 'Carved Wood',
    style: 'Tribal',
    subject: 'Cosmology',
    price: { ngn: 440000, usd: 1020 },
    dimensions: { height: 55, width: 18, unit: 'cm' },
    images: [{ url: IMG.dogonArk, alt: 'Aduno Koro Ark of the World' }],
    tags: ['dogon', 'cosmology', 'mali', 'vessel'],
    culturalOrigin: { country: 'Mali', region: 'Bandiagara', tribe: 'Dogon' },
    yearCreated: 2023,
    materials: ['Hardwood', 'Sacred Earth Pigment'],
  },
  {
    artistEmail: 'zainab.hassan@heritagear.africa',
    title: 'Savannah Beads',
    description: 'A mixed-media piece layering Maasai beadwork patterns with Swahili coastal colour — honouring the adornment traditions of East African women.',
    medium: 'Mixed Media on Canvas',
    style: 'Contemporary',
    subject: 'Adornment',
    price: { ngn: 195000, usd: 450 },
    dimensions: { height: 80, width: 80, unit: 'cm' },
    images: [{ url: IMG.beadwork, alt: 'Savannah Beads' }],
    tags: ['maasai', 'beadwork', 'kenya', 'textile'],
    culturalOrigin: { country: 'Kenya', region: 'Rift Valley', tribe: 'Maasai' },
    yearCreated: 2024,
    materials: ['Glass Beads', 'Canvas', 'Thread'],
  },
  {
    artistEmail: 'kofi.mensah@heritagear.africa',
    title: 'Asante Golden Lion',
    description: 'A bronze goldweight in the Asante tradition — the lion symbolises courage and royal authority, cast using the lost-wax technique passed down through Ashanti smiths.',
    medium: 'Bronze Casting',
    style: 'Traditional',
    subject: 'Royal Authority',
    price: { ngn: 320000, usd: 740 },
    dimensions: { height: 12, width: 18, unit: 'cm' },
    images: [{ url: IMG.asanteLion, alt: 'Asante Golden Lion' }],
    tags: ['asante', 'goldweight', 'bronze', 'royal'],
    culturalOrigin: { country: 'Ghana', region: 'Ashanti', tribe: 'Akan' },
    yearCreated: 2023,
    materials: ['Bronze'],
  },
  {
    artistEmail: 'thandiwe.nkosi@heritagear.africa',
    title: 'Ndebele Colour Pulse',
    description: 'Geometric bands of Ndebele house-painting tradition reimagined as a pulsating abstract field — sharp triangles, chevrons, and the bold primaries of rural Mpumalanga.',
    medium: 'Acrylic on Canvas',
    style: 'Abstract',
    subject: 'Geometric Pattern',
    price: { ngn: 240000, usd: 555 },
    dimensions: { height: 100, width: 100, unit: 'cm' },
    images: [{ url: IMG.studioPaint, alt: 'Ndebele Colour Pulse' }],
    tags: ['ndebele', 'geometric', 'south africa', 'abstract'],
    culturalOrigin: { country: 'South Africa', region: 'Mpumalanga', tribe: 'Ndebele' },
    yearCreated: 2024,
    materials: ['Acrylic', 'Canvas'],
  },
  {
    artistEmail: 'thandiwe.nkosi@heritagear.africa',
    title: 'Kuba Royal Textile',
    description: 'A raphia textile piece in the Kuba tradition of the DRC — intricate cut-pile embroidery forming labyrinthine patterns reserved for royal courts.',
    medium: 'Raphia Textile',
    style: 'Traditional',
    subject: 'Textile',
    price: { ngn: 480000, usd: 1110 },
    dimensions: { height: 130, width: 60, unit: 'cm' },
    images: [{ url: IMG.kubaTextile, alt: 'Kuba Royal Textile' }],
    tags: ['kuba', 'textile', 'congo', 'royal'],
    culturalOrigin: { country: 'Democratic Republic of Congo', region: 'Kasai', tribe: 'Kuba' },
    yearCreated: 2022,
    materials: ['Raphia', 'Natural Dye'],
  },
  {
    artistEmail: 'zainab.hassan@heritagear.africa',
    title: 'Harmattan Horizon',
    description: 'An impressionist study of the Kenyan savannah at dusk during harmattan season — acacia silhouettes, amber dust, and the distant glow of a Maasai manyatta.',
    medium: 'Oil on Canvas',
    style: 'Impressionist',
    subject: 'Landscape',
    price: { ngn: 175000, usd: 405 },
    dimensions: { height: 70, width: 100, unit: 'cm' },
    images: [{ url: IMG.gallery1, alt: 'Harmattan Horizon' }],
    tags: ['savannah', 'kenya', 'landscape', 'harmattan'],
    culturalOrigin: { country: 'Kenya', region: 'Rift Valley' },
    yearCreated: 2023,
    materials: ['Oil', 'Canvas'],
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove legacy single-artist seed data
    const legacyArtist = await User.findOne({ email: 'seed-artist@heritagear.africa' });
    if (legacyArtist) {
      await Artwork.deleteMany({ artist: legacyArtist._id });
      await User.deleteOne({ _id: legacyArtist._id });
      console.log('Removed legacy seed artist');
    }

    const artistMap = {};
    for (const data of ARTISTS) {
      let artist = await User.findOne({ email: data.email });
      if (artist) {
        artist.name = data.name;
        artist.bio = data.bio;
        artist.location = data.location;
        await artist.save();
      } else {
        artist = await User.create(data);
      }
      artistMap[data.email] = artist._id;
      console.log(`Artist ready: ${data.name}`);
    }

    await Artwork.deleteMany({});
    console.log('Cleared all existing artworks');

    const docs = ARTWORKS.map((art) => {
      const { artistEmail, ...rest } = art;
      return {
        ...rest,
        artist: artistMap[artistEmail],
        status: 'Active',
      };
    });

    const created = await Artwork.insertMany(docs);
    console.log(`Seeded ${created.length} artworks across ${ARTISTS.length} African artists`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  }
}

seed();
