import { Route, Routes, useNavigate } from 'react-router-dom';
import './scss/base.scss';
import Notes from './pages/Notes';
import axios from 'axios';
import Login from './pages/Login';

axios.defaults.baseURL = 'https://notes.devlop.tech/api';

axios.interceptors.request.use(request => {
  const token = localStorage.getItem('token');
  if (token)
    request.headers.Authorization = `Bearer ${token}`;
  return request;
})

axios.interceptors.response.use(
  response => {
    return response.data;
  },
)

function App() {
  const navigate = useNavigate();

  axios.interceptors.response.use(
    null,
    error => {
      if (error.response.status === 401) {
        navigate('/login', { replace: true });
      }
      return Promise.reject(error);
    }
  )

  return (
    <>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
