import { useState } from 'react';
import Button from '../../components/Button';
import './style.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        cin: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const onLogin = async () => {
        try {
            setLoading(true);
            const resp = await axios.post('/login', data);
            localStorage.setItem('token', resp.token);
            localStorage.setItem('fullname', resp.user.first_name.toLowerCase());
            navigate('/', { replace: true });
        }
        finally {
            setLoading(false)
        }
    }

    return <div id="login">
        <form>
            <h1 className='title'>Welcome 👋</h1>
            <h2 className='subtitle'>Sign in to your account</h2>

            <input
                value={data.cin}
                onChange={e => setData({ ...data, cin: e.target.value })}
                placeholder='Your CIN'
                type="text"
                required />
            <input
                value={data.password}
                onChange={e => setData({ ...data, password: e.target.value })}
                placeholder='Your Password'
                type="password"
                required />

            <Button loading={loading} onClick={onLogin}>Login</Button>
        </form>
    </div>
}

export default Login