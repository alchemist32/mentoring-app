import axios from 'axios';

/**
 * getUsers
 * @returns {any} an `array of users`
 */
export async function getUsers() {
  return usersRequest();
}

/**
 * @param {string} userId  the user id
 * @returns {object} with user information
 */
export async function getUser(userId) {
  await usersRequest(userId);
}

/**
 * usersRequest
 * @param {string} userId the user id
 * @returns {Promise<any[]>}  an `array` of users or a single user
 */
async function usersRequest(userId) {
  const usersURL = 'https://reqres.in/api/users';
  if (userId) {
    return (await axios.get(`${usersURL}/${userId}`)).data;
  }

  return (await axios.get(usersURL)).data;
}
