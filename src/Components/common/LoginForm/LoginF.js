import './LoginForm.scss';

const loginInputHandler = (event) => {
    console.log(event.target.value);
}

const passwordInputHandler = (event) => {
    console.log(event.target.value);
}

export const LoginForm = (props) => {
    return(
        <form className={'loginFormContainer'}>
            <div>
                <div>
                    <input onChange={loginInputHandler}
                           type="text"
                           placeholder={'Login'}/>
                </div>
                <div>
                    <input onChange={passwordInputHandler}
                           type="password"
                           placeholder={'Password'}/>
                </div>
            </div>
            <button>Confirm</button>
        </form>
    )
};