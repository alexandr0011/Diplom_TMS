import {loginUserThunk} from "../../service/middleware";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Loader} from "../common/loader/loader";

export const Login = () => {

    const isAuth = useSelector((state) => state.isAuth);
    const isFetching = useSelector((state) => state.isFetching);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('enter', onSubmitHandler);

        return () => {
            window.addEventListener('enter', onSubmitHandler);
        }
    }, []);

    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(loginUserThunk(email, password));
        setEmail('');
        setPassword('');
    }

    if (isAuth) return <Redirect to='/tasksPage'/>

    return(
        <>
            {isFetching && <Loader/>}
            <h1>LOGIN PAGE</h1>
            <form onSubmit={onSubmitHandler}>
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
                    <button type='submit'>Confirm</button>
                </div>
            </form>
        </>
    )
}