import { useState } from "react";
import axios from "axios";

const projectID ='523bcdd7-70b6-49c5-ba64-157f3994e981';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        console.log(username, password);
        e.preventDefault();
        const authObject = {'Project-ID':projectID, 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('');
        }
        catch {
            setError('Oops, incorrect credentials.');
        }
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" placeholder="Username" required type="text" value={username} onChange={handleChangeUsername} />
                    <input className="input" placeholder="Password" required type="text" value={password} onChange={handleChangePassword} />
                    <div align='center'>
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm;