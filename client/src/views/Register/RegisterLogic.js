import axios from 'axios';
import { useNavigate } from 'react-router-dom';

async function RegisterLogic(userInfo) {
  let navigate = useNavigate();

  const firstName = userInfo.firstName;
  const lastName = userInfo.lastName;
  const username = `${firstName} ${lastName}`;
  const email = userInfo.email;
  const password = userInfo.password;
  //2:29:00 privateData
  const serverURL = 'http://localhost:5000';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.post(
      `${serverURL}/api/auth/register`,
      { username, email, password },
      config
    );

    localStorage.setItem('authToken', data.token);
    navigate(`/`, { replace: true });
  } catch (error) {
    console.log(error.response.data.error);
  }
}

export default RegisterLogic;
