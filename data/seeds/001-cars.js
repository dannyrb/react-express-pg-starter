
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, vin: '1NXAE09B1RZ155488', make: 'Toyota', model: 'Corolla', mileage: 0},
        { id: 2, vin: '1GNDX03E8WD341403', make: 'Chevrolet', model: 'Venture', mileage: 99 },
        { id: 3, vin: '2P4GH2535SR296546', make: 'Plymouth', model: 'Voyager', mileage: 1234 },
        { id: 4, vin: 'JT2SV12E8G0417278', make: 'Toyota', model: 'Camry', mileage: 7777 },
        { id: 5, vin: '1FVACYDT19HAJ2694', make: 'Freightliner', model: 'M2', mileage: 42424 },
      ]);
    });
};
