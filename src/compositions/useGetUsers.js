/**
 * Fetches user data from the randomuser.me API
 * @param {number} amount - The number of users to fetch
 * @returns {Promise<Array>} - A promise that resolves with an array of user data
 */
export default async function fetchUser(amount) {
  return await fetch(`https://randomuser.me/api/?results=${amount}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    console.log(data.results)
    return data.results;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}
