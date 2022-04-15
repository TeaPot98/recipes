const recipes = [
  {
    id: '1',
    title: 'One Pot Pasta Bolognese',
    description: '',
    trend: true,
    mainImage: 'https://www.recipetineats.com/wp-content/uploads/2020/09/One-Pot-Pasta-Bolognese_6.jpg?resize=650,910',
    circleImage: 'https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527963643z8uvx.png',
    gallery: [
      'https://www.recipetineats.com/wp-content/uploads/2020/09/One-Pot-Pasta-Bolognese_6.jpg?resize=650,910',
      'https://www.recipetineats.com/wp-content/uploads/2020/09/One-Pot-Pasta-Bolognese_8.jpg?resize=650,910',
      'https://www.recipetineats.com/wp-content/uploads/2020/09/One-Pot-Pasta-Bolognese_2.jpg?resize=650,910',
      'https://www.recipetineats.com/wp-content/uploads/2020/09/One-Pot-Pasta-Bolognese_0.jpg?resize=650,910',
    ],
    cookingTime: 20,
    preparationTime: 10,
    servings: 5,
    ingredients: [
      {
        name: 'Olive oil',
        quantity: 1,
        measureUnit: 'tbsp',
        property: ''
      },
      {
        name: 'Garlic cloves',
        quantity: 2,
        measureUnit: '',
        property: 'minced'
      },
      {
        name: 'Onion ',
        quantity: 1,
        measureUnit: '',
        property: 'finely chopped'
      },
      {
        name: 'Beef mince',
        quantity: 500,
        measureUnit: 'g',
        property: ''
      },
      {
        name: 'Tomato passata',
        quantity: 700,
        measureUnit: 'g',
        property: ''
      },
      {
        name: 'Beef broth',
        quantity: 3,
        measureUnit: 'cups',
        property: ''
      },
      {
        name: 'Chilli flakes',
        quantity: 1/4,
        measureUnit: 'tsp',
        property: 'adjust to taste'
      },
      {
        name: 'Worcestershire Sauce',
        quantity: 2,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Tomato paste',
        quantity: 2,
        measureUnit: 'tbsp',
        property: ''
      },
      {
        name: 'Salt',
        quantity: 3/4,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Pepper',
        quantity: 3/4,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Spaghetti',
        quantity: 350,
        measureUnit: 'g',
        property: 'uncooked'
      },
    ],
    category: [
      {
        id: '1',
        name: 'Pasta'
      },
      {
        id: '2',
        name: 'Dinner'
      },
    ],
    calories: 650,
    country: 'Italy',
    rating: 4.5,
    reviews: [
      {
        id: '1',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim vestibulum quam, id lacinia quam vestibulum vestibulum. Vivamus feugiat mauris non velit bibendum, non commodo turpis laoreet. ',
        name: 'Allison Smith',
        rating: 5,
        reviewRating: 2,
        avatarImg: '',
        date: '2021-01-01T12:00:00Z',
      },
      {
        id: '2',
        comment: 'Nullam eleifend arcu sed blandit accumsan. Donec malesuada quis quam eu tempor. Donec sagittis cursus mi, vel pellentesque ligula efficitur vel.',
        name: 'Christopher Price',
        rating: 3,
        reviewRating: -2,
        avatarImg: '',
        date: '2021-02-03T12:00:00Z',
      },
      {
        id: '3',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim vestibulum quam, id lacinia quam vestibulum vestibulum. Vivamus feugiat mauris non velit bibendum, non commodo turpis laoreet. ',
        name: 'Allison Smith',
        rating: 5,
        reviewRating: 2,
        avatarImg: '',
        date: '2021-01-01T12:00:00Z',
      },
      {
        id: '4',
        comment: 'Nullam eleifend arcu sed blandit accumsan. Donec malesuada quis quam eu tempor. Donec sagittis cursus mi, vel pellentesque ligula efficitur vel.',
        name: 'Christopher Price',
        rating: 3,
        reviewRating: -2,
        avatarImg: '',
        date: '2021-02-03T12:00:00Z',
      }
    ],
    steps: [
      'Heat oil in a large pot over high heat. Cook garlic and onion for 2 minutes until translucent.',
      'Add beef and cook, breaking it up as you go',
      'Once beef has all changed from red to brown, add tomato passata.',
      'Pour some beef stock into the empty bottle, shake, then pour into the pot.',
      'Add remaining beef stock and all remaining ingredients except spaghetti. Give it a good stir, then let it come up to the boil.',
      'Add pasta, fanning it out around the pot. Leave for 30 seconds to start softening, then start pushing it in under the liquid.',
      'Once fully submerged, cook for 12 minutes, stirring every minute or so, and more towards the end. At about the 8 minute mark, lower the heat to medium otherwise the base might catch (but ensure it is still bubbling gently - you don\'t want pasta just bloating in warm water).',
      'Take it off the stove once the pasta is JUST cooked, the tiniest bit firmer than you want, and when still saucy. Toss it for about 30 seconds or so - the sauce will reduce further, the pasta will finish cooking.',
      'Serve immediately, garnished with parmesan.',
    ]
  },
]

export default recipes