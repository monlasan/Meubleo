import axios from 'axios';
import { useNavigate } from 'react-router-dom';

async function LoginLogic(userInfo) {
  let navigate = useNavigate();

  const email = userInfo.email;
  const password = userInfo.password;

  const serverURL = 'http://localhost:5000';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.post(
      `${serverURL}/api/auth/login`,
      { email, password },
      config
    );

    localStorage.setItem('authToken', data.token);
    navigate(`/`, { replace: true });
  } catch (error) {
    console.log(error.response.data.error);
  }
}

export default LoginLogic;
