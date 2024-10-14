const agents = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    phone: '(02)85692318',
    bio: 'Experienced Agent. Assistance with wide range of visa application.',
    imageUrl: '/avatar/delba-de-oliveira.png',

    address: {
      street: '65 Woodlands Avenue',
      city: 'Camberwell',
      state: 'Victoria',
      postal: '3124'
    },
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    phone: '0467890232',
    bio: 'Experienced Agent. Assistance with wide range of visa application.',
    imageUrl: '/avatar/lee-robinson.png',

    address: {
      street: '1 Myrtle Street',
      city: 'Bowral',
      state: 'New South Wales',
      postal: '3730'
    }
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    phone: '0467890233',
    bio: 'Experienced Agent. Assistance with wide range of visa application.',
    imageUrl: '/avatar/hector-simpson.png',

    address: {
      street: '27 Hay Point Road',
      city: 'Alligator Creek',
      state: 'Queensland',
      postal: '4740'
    }
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    phone: '0467890234',
    bio: 'Experienced Agent. Assistance with wide range of visa application.',
    imageUrl: '/avatar/steven-tey.png',

    address: {
      street: '99 Cedar St',
      city: 'Wynnum',
      state: 'Queensland',
      postal: '4178'
    }
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    phone: '0467890235',
    bio: 'Experienced Agent. Assistance with wide range of visa application.',
    imageUrl: '/avatar/steph-dietz.png',

    address: {
      unit: '906A',
      street: '305 Murray Street',
      city: 'Perth',
      state: 'West Australia',
      postal: '6000'
    }
  },
];

const clients = [
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    imageUrl: '/avatar/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    imageUrl: '/avatar/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    imageUrl: '/avatar/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    imageUrl: '/avatar/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    imageUrl: '/avatar/balazs-orban.png',
  },
]

const services = [
  {
    serviceName: 'Working Visa Application',
    servicePrice: 500,
    serviceIntro: '485 working visa'
  },
  {
    serviceName: 'Student Visa Application',
    servicePrice: 300,
    serviceIntro: '500 student visa'
  },
  {
    serviceName: 'Permanent Residency Application',
    servicePrice: 570,
    serviceIntro: '485 working visa'
  },
  {
    serviceName: 'Citizenship Application',
    servicePrice: 690,
    serviceIntro: 'Citizenship'
  },
]

const specializations = [
  {specializationName: 'Visa Applications'},
  {specializationName: 'Family Sponsorship'},
  {specializationName: 'Permanent Residency'},
  {specializationName: 'Citizenship'},
]

const commentContent = [
  { "content": "The service was excellent and professional." },
  { "content": "They provided clear and helpful advice throughout the process." },
  { "content": "I had a smooth experience with the immigration agent." },
  { "content": "The team was responsive and answered all my questions quickly." },
  { "content": "They made the visa application process stress-free." },
  { "content": "Very knowledgeable staff and great customer service." },
  { "content": "I highly recommend their services for immigration needs." },
  { "content": "They handled my case with care and attention to detail." },
  { "content": "The agent was friendly and explained everything clearly." },
  { "content": "Their support made the whole process easier than expected." },
  { "content": "I’m thankful for their guidance and expertise." },
  { "content": "They helped me understand the complex requirements." },
  { "content": "The service was fast and reliable." },
  { "content": "I appreciate their professionalism and dedication." },
  { "content": "The immigration agent went above and beyond to assist me." }
]

const comments = Array.from({ length: 30 }).map((_, index) => {
  let offset = Math.floor(index / 10);

  return {
    content: commentContent[index % 15].content,
    agentId: agents[index % 5].id,
    clientId: clients[(index + offset) % 5].id
  }
})

module.exports = {
  agents,
  clients,
  specializations,
  services,
  comments,
}