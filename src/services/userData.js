import axios from 'axios'

const data = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    const userData = await (response.data.data);
    return userData;
  } catch (err) {
    console.log(err);
  }
};

export default data;
