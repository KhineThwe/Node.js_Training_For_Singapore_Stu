const db = require("../models/index");
const user_table = db.user_table;

const addUser = async (data) => {
  const user = await user_table.create(data);
  return user;
};

const getAllUser = async (data) => {
  const users = await user_table.findAll();
  return users;
};

const getUser = async (id) => {
  const user = await user_table.findByPk(id);
  return user;
};

const updateUser = async (data,id) => {
  const user = await user_table.update(data, { where: { id: id } });
  return user;
};

const deleteUser = async (id) => {
  const user = await user_table.destroy({ where: { id: id } });
  return user;
};

module.exports = {
  addUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};
