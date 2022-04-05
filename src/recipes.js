const recipes = [
  {
    id: '1',
    title: 'Fillet Steak with roasted vegetables',
    description: '',
    mainImage: '',
    gallery: [
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg', 
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg', 
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg', 
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg', 
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg', 
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg', 
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg', 
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
    ],
    cookingTime: '30 minutes',
    preparationTime: '10 minutes',
    totalTime: '40 minutes',
    servings: 4,
    ingredients: [
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
      {
        name: 'Eggs',
        quantity: 5,
        property: 'beaten'
      },
      {
        name: 'Tomatoes',
        quantity: 3,
        property: ''
      },
    ],
    category: [
      {
        id: 1,
        name: 'Mediterranean',
      },
      {
        id: 2,
        name: 'Breakfast'
      }
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim vestibulum quam, id lacinia quam vestibulum vestibulum. Vivamus feugiat mauris non velit bibendum, non commodo turpis laoreet. Nullam eleifend arcu sed blandit accumsan. Donec malesuada quis quam eu tempor. Donec sagittis cursus mi, vel pellentesque ligula efficitur vel.',
      'Maecenas vulputate orci vel scelerisque gravida. Pellentesque non lacinia odio. Curabitur vel velit lacus. Praesent sollicitudin mauris id ultrices dignissim. Fusce id pulvinar magna. Donec a turpis dui. Vestibulum tincidunt egestas dui, ut sagittis leo imperdiet vitae. Etiam tincidunt tellus nec ex blandit ornare.',
      'Curabitur eu ligula at tellus lobortis efficitur sed ac lorem. Etiam sed ultricies nibh, quis pulvinar nunc. Morbi faucibus dui eget euismod semper. Nulla quis tincidunt libero. In at dui nec enim vestibulum ultricies. Nam sit amet lectus pretium, ultricies sem non, suscipit mauris. Integer varius ipsum eu mi porta egestas.',
      'Praesent elementum, nisi eu gravida tristique, purus nulla faucibus sapien, sit amet consequat arcu urna quis lorem. Donec ultrices maximus vestibulum. Donec interdum sapien mi, quis iaculis purus eleifend quis. Nullam sed ante lobortis, aliquam nunc sed, convallis magna. Nullam odio mauris, pharetra quis mattis vitae, varius in lacus.',
    ]
  }
]

export default recipes