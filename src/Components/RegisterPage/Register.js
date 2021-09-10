import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUserThunk} from "../../service/middleware";

export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const nameInputHandler = (event) => {
        setName(event.target.value);
    }

    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(registerUserThunk(name, email, password));
        setName('');
        setEmail('');
        setPassword('');
    }

    return(
        <>
            <h1>REGISTER PAGE</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input placeholder='Name'
                           type="text"
                           value={name}
                           onChange={nameInputHandler}/>
                </div>
                <div>
                    <input placeholder='Email'
                           type="text"
                           value={email}
                           onChange={emailInputHandler}/>
                </div>
                <div>
                    <input placeholder='Password'
                           type="password"
                           value={password}
                           onChange={passwordInputHandler}/>
                </div>
                <div>
                    <button>Confirm</button>
                </div>
            </form>
        </>
    )
}