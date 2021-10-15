const knex = require('knex')
const config = require('../knexfile.js')

const db = knex(config.development)

function find() {
    return db('cars')
}

function findById(id) {
    return db('cars').where({ id: Number(id) });
}

function insert(post) {
    return db('cards')
        .insert(post)
        .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
    return db('cars')
        .where('id', Number(id))
        .update(post);
}

function remove(id) {
    return db('cars')
        .where('id', Number(id))
        .del();
}

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
}