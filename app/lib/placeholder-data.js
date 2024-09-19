const agents = [
	{
		id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
		name: 'Delba de Oliveira',
		email: 'delba@oliveira.com',
		phone: '(02)85692318',
		bio: 'Experienced Agent. Assistance with wide range of visa application.',
		image_url: '/customers/delba-de-oliveira.png',

		address: {
			street: '65 Woodlands Avenue',
			city: 'Camberwell',
			state: 'Victoria',
			zip_code: '3124'
		},
	},
	{
		id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
		name: 'Lee Robinson',
		email: 'lee@robinson.com',
		phone: '0467890232',
		image_url: '/customers/lee-robinson.png',

		address: {
			street: '1 Myrtle Street',
			city: 'Bowral',
			state: 'New South Wales',
			zip_code: '3730'
		}
	},
	{
		id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
		name: 'Hector Simpson',
		email: 'hector@simpson.com',
		phone: '0467890233',
		image_url: '/customers/hector-simpson.png',

		address: {
			street: '27 Hay Point Road',
			city: 'Alligator Creek',
			state: 'Queensland',
			zip_code: '4740'
		}
	},
	{
		id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
		name: 'Steven Tey',
		email: 'steven@tey.com',
		phone: '0467890234',
		image_url: '/customers/steven-tey.png',

		address: {
			street: '99 Cedar St',
			city: 'Wynnum',
			state: 'Queensland',
			zip_code: '4178'
		}
	},
	{
		id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
		name: 'Steph Dietz',
		email: 'steph@dietz.com',
		phone: '0467890235',
		image_url: '/customers/steph-dietz.png',

		address: {
			unit: '906A',
			street: '305 Murray Street',
			city: 'Perth',
			state: 'West Australia',
			zip_code: '6000'
		}
	},
];

const clients = [
	{
		id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
		name: 'Michael Novotny',
		email: 'michael@novotny.com',
		image_url: '/customers/michael-novotny.png',
	},
	{
		id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
		name: 'Evil Rabbit',
		email: 'evil@rabbit.com',
		image_url: '/customers/evil-rabbit.png',
	},
	{
		id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
		name: 'Emil Kowalski',
		email: 'emil@kowalski.com',
		image_url: '/customers/emil-kowalski.png',
	},
	{
		id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
		name: 'Amy Burns',
		email: 'amy@burns.com',
		image_url: '/customers/amy-burns.png',
	},
	{
		id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
		name: 'Balazs Orban',
		email: 'balazs@orban.com',
		image_url: '/customers/balazs-orban.png',
	},
]

const services = [
	{
		service_name: 'Working Visa Application',
		service_price: 500,
		service_intro: '485 working visa'
	},
	{
		service_name: 'Working Visa Application',
		service_price: 500,
		service_intro: '485 working visa'
	},
]

const specializations = [
	'Visa_Applications',
	'Permanent_Residency',
	'Citizenship',
	'Family_Sponsorship'
]


const comments = Array.from({ length: 30 }).map((_, index) => {
	let offset = Math.floor(index / 10);

	return {
		content: `Great service and excellent advice for my ${index + 2} applications.`,
		agent_id: agents[index % 5].id,
		client_id: clients[(index + offset) % 5].id
	}
})