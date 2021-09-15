import { loginUserThunk } from '../../service/middleware';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Loader } from '../common/loader/loader';
import './Login.scss';
import { setServiceErrorsAction } from '../../Redux/actions';
import { Button, Input } from '../common/formControls/formControls';
const TASKS_PAGE = '/tasksPage';

export const Login = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const isFetching = useSelector((state) => state.isFetching);
  const serviceError = useSelector((state) => state.errors);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setServiceErrorsAction(''));
    };
  }, [dispatch]);

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(email, password));
    setEmail('');
    setPassword('');
  };

  if (isAuth) return <Redirect to={TASKS_PAGE} />;

  return (
    <div className="loginWrapper">
      {isFetching && <Loader />}
      <h1>LOGIN PAGE</h1>
      <form onSubmit={onSubmitHandler}>
        <p>Email</p>
        <div>
          <Input
            placeholder="Email"
            type="text"
            value={email}
            onChange={emailInputHandler}
          />
        </div>
        <p>Password</p>
        <div>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordInputHandler}
          />
        </div>
        {serviceError && <div className="serviceErrorMessage">{serviceError}</div>}
        <div>
          <Button type="submit">Confirm</Button>
        </div>
      </form>
    </div>
  );
};
