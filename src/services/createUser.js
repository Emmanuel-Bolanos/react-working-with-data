import axios from 'axios'

const createUser = async ({ name, job }) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', {
      name: name,
      job: job,
    });
    const userData = await (response.data);
    return userData;
  } catch (err) {
    console.log(err);
  }
};

export default createUser;
