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
        name: 'Dinner'
      },
      {
        id: '10',
        name: 'Pasta'
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
  {
    id: '2',
    title: 'Beef Ribs in BBQ Sauce – slow cooked short ribs!',
    description: '',
    trend: false,
    mainImage: 'https://www.recipetineats.com/wp-content/uploads/2020/09/Beef-Short-Ribs.jpg?resize=650,910',
    circleImage: 'https://www.pngmart.com/files/15/Food-Plate-Top-View-Non-Veg-PNG.png',
    gallery: [
      'https://www.recipetineats.com/wp-content/uploads/2020/09/Beef-Shortribs-with-BBQ-Sauce_1.jpg?resize=650,910',
      'https://www.recipetineats.com/wp-content/uploads/2020/09/Beef-Shortribs-with-BBQ-Sauce_7.jpg?resize=650,910',
      'https://www.recipetineats.com/wp-content/uploads/2020/09/Beef-Shortribs-with-BBQ-Sauce_2.jpg?resize=650,910',
      'https://www.recipetineats.com/wp-content/uploads/2020/09/Beef-Shortribs-with-BBQ-Sauce_0.jpg?resize=650,910',
      'https://www.recipetineats.com/wp-content/uploads/2020/09/Beef-Shortribs-with-BBQ-Sauce_5.jpg?resize=650,910',
    ],
    cookingTime: 240,
    preparationTime: 15,
    servings: 6,
    ingredients: [
      {
        name: 'Beef ribs',
        quantity: 6,
        measureUnit: 'tbsp',
        property: ''
      },
      {
        name: 'Brown sugar',
        quantity: 1,
        measureUnit: 'tbsp',
        property: '(sub white)'
      },
      {
        name: 'Paprika ',
        quantity: 2,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Garlic powder',
        quantity: 1,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Onion powder',
        quantity: 1,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Cumin powder',
        quantity: 1/2,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Mustard powder',
        quantity: 3/4,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Salt',
        quantity: 1,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Black pepper',
        quantity: 1/2,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Garlic gloves',
        quantity: 2,
        measureUnit: '',
        property: 'minced'
      },
      {
        name: 'Apple cider vinegar',
        quantity: 1/2,
        measureUnit: 'cups',
        property: ''
      },
      {
        name: 'Ketchup',
        quantity: 1 + 1/2,
        measureUnit: 'cups',
        property: ''
      },
      {
        name: 'Cayenne pepper',
        quantity: 1,
        measureUnit: 'tsp',
        property: ''
      },
      {
        name: 'Worcestershire sauce',
        quantity: 1,
        measureUnit: 'tbsp',
        property: ''
      },
      {
        name: 'Water',
        quantity: 2,
        measureUnit: 'cups',
        property: ''
      },
      {
        name: 'Parsley or chives',
        quantity: 1,
        measureUnit: '',
        property: 'chopped'
      },
    ],
    category: [
      {
        id: '2',
        name: 'Slow cooker'
      },
    ],
    calories: 1200,
    country: 'Southern, Western',
    rating: 4.2,
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
      'Preheat oven to 160°C/320°F (all oven types).',
      'Mix Rub in a small bowl large, enough to fit one rib.',
      'Press beef ribs into the rub, coating all sides. Shake off excess.',
      'Mix Barbecue Sauce ingredients, except water, in a baking pan. Then mix in water.',
      'Place ribs in sauce, turning to coat. Arrange meat side down in the sauce, bone side exposed (sauce won\'t cover completely, that\'s ok).',
      'Cover tightly with foil or lid, bake 3 1/2 hours.',
      'Remove from oven, remove foil. Turn ribs (some may have fall over, that\'s ok, just turn them). Spoon over sauce.',
      'Bake 30 minutes uncovered, spooning over sauce again halfway through, until surface is caramelised and sticky. Check to ensure ribs are tender - pry a bit apart using two forks. (If not, cover and return to oven, but after 4 hrs they certainly should be!)',
      'Remove ribs onto serving plate (use a spoon as meat will barely be attached to bone, if at all). Mix sauce to bring together (Note 3 on adjustments). Serve with ribs!',
    ]
  },
]

export default recipes