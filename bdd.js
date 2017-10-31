const bdd = [
  {
    id: 1,
    title: 'Titre de la scène',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus nec diam sed tincidunt. Morbi in ante vitae ipsum volutpat bibendum. In purus turpis, venenatis id nisl vitae, maximus pulvinar nisi. Maecenas id blandit ante. Etiam eu risus mauris. Morbi varius facilisis massa, quis mattis mi efficitur id. Nullam porttitor libero non imperdiet ullamcorper. Mauris tortor justo, molestie ac feugiat sit amet, cursus quis tellus. Aliquam quis enim eget nibh tincidunt ultrices eget vitae neque. Aenean eget euismod nisl.',
    image: 'image de type ascii ou peut importe',
    actions: [
      {
        id: 1,
        name: 'faire ça',
        page: 5,
      },
      {
        id: 2,
        name: 'faire çi',
        page: 10,
      },
      {
        id: 3,
        name: 'faire tout autre chose',
        page: 8,
      },
    ],
  },
];

const initialState = {
  id: 'idMongo',
  name: 'Carine',
  email: 'dfdqsef@dfvsd.com',
  currentPageID: 5,
  stat: [
    {
      name: 'determination',
      score: 50,
    },
    {
      name: 'determination',
      score: 100,
    },
    {
      name: 'determination',
      score: 150,
    },
  ],
  flag: {
    knife: true,
    brokenWindow: false,
  },
};

export default bdd;
