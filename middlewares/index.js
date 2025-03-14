const getTalkers = require('./getTalkers');
const getTalkersById = require('./getTalkerById');
const login = require('./login');
const createTalker = require('./createTalker');
const editTalker = require('./editTalker');
const deleteTalker = require('./deleteTalker');
const searchTalker = require('./searchTalker');

module.exports = {
  getTalkers,
  getTalkersById,
  login,
  createTalker,
  editTalker,
  deleteTalker,
  searchTalker,
};
