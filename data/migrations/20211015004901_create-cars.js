
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();

        tbl
            .text("vin", 17)
            .unique()
            .notNullable();
        
        tbl.text("make", 128).notNullable();

        tbl.text("model", 128).notNullable();

        tbl.integer('mileage', 7).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
