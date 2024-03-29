const fetch = require('node-fetch');
const username ='teamrebecca';

const ESPN = {
  async getUserId() {
    try {
      const response = await fetch(`https://api.sleeper.app/v1/user/${username}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.user_id;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }
}

export default ESPN;