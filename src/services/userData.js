import axios from 'axios'

const data = async () => {
  const response = await axios.get('https://reqres.in/api/users');
  const userData = await (response.data.data);
  return userData;
};

export default data;
