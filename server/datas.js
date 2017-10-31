module.exports = [
  {
    id: 1,
    title: 'Scène initiale',
    description: 'La scène commence, un individu sort de nulle part. Que choisis-tu de faire?',
    actions: [
      {
        text: 'Je prends mon arme, et je l\'attaque.',
        stat: 'determination',
        // optionnel
        targetSuccess: 2,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'vitre cassée',
        targetFailure: 3,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
      {
        text: 'Je prends mes jambes à mon cou.',
        stat: 'présence',
        // optionnel
        targetSuccess: 2,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'couteau',
        targetFailure: 3,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
      {
        text: 'Je lui demande comment il va.',
        stat: 'finesse',
        // optionnel
        targetSuccess: 2,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'vitre cassée',
        targetFailure: 3,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
    ],
    background: 'harkonnens_hq.png',
    image: 'baron.jpg',
    sound: 'harkonnens_house.mp3',
  },
  {
    id: 2,
    title: 'Deuxième scène',
    description: 'Tu as réussi à aller jusque là... pfiouu... Retourne au debut',
    actions: [
      {
        text: 'Pas le choix, je m\'exécute',
        stat: 'determination',
        // optionnel
        targetSuccess: 1,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'vitre cassée',
        targetFailure: 3,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
      {
        text: 'Ok chef.',
        stat: 'présence',
        // optionnel
        targetSuccess: 1,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'couteau',
        targetFailure: 3,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
      {
        text: 'Je suis pas sure mais j\'y vais.',
        stat: 'finesse',
        // optionnel
        targetSuccess: 1,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'vitre cassée',
        targetFailure: 3,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
    ],
    background: 'harkonnens_hq.png',
    image: 'baron.jpg',
    sound: 'harkonnens_house.mp3',
  },
];
