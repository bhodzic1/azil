
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          id: 1,
          name: 'Bernes',
          lastname: 'Hodzic',
          phone_number: '061000000',
          address: 'Zmaja od Bosne bb',
          qualification: 'Engineer',
          hired_year: 2019,
          username: 'bhodzic1',
          password: 'admin123'
        }
      ]);
    });
};
