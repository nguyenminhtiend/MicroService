const getUsers = async () => {
  return {
    users: [{ id: 1, name: 'Messi' }]
  };
};

const createUser = async (user) => {
  return {
    ...user,
    id: new Date().getTime()
  };
};

module.exports = {
  getUsers,
  createUser
};
