import axios from 'axios'

const createUser = async ({ name, job }) => {
  const response = await axios.post('https://reqres.in/api/users', {
    name: name,
    job: job,
  });
  const userData = await (response.data);
  return userData;
};

export default createUser;
