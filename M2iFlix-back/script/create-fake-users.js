const { User } = require('../models');

async function createFakeUsers() {
  try {
    await User.sync({ force: true });
    await User.bulkCreate([
      { firstName: 'Romain', lastName: 'Andiné', password: 'azerty' },
      { firstName: 'Toto', lastName: 'Smith', password: 'azerty' },
    ]);
    console.log('Utilisateurs fictifs créés avec succès');
  } catch (error) {
    console.error('Erreur lors de la création des utilisateurs fictifs :', error);
  }
}

createFakeUsers();
