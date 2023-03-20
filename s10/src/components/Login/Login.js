import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Store/Auth-context";
import Input from "../UI/Input/Input";

const emailReducher = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isvalid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.includes("@") };
  }
  return { value: "", isvalid: false };
};

const passwordReducher = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isvalid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.trim().length > 6 };
  }
  return { value: "", isvalid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [Emailstate, DisPatchEmail] = useReducer(emailReducher, {
    value: "",
    isvalid: false,
  });
  const [passwordstate, DisPatchPassword] = useReducer(passwordReducher, {
    value: "",
    isvalid: null,
  });

  const AuthCtx = useContext(AuthContext);

  useEffect(() => {
    console.log("RUNNING!");
    return () => {
      console.log("RUNNING Clean UP");
    };
  });

  const { isVaild: emailIsVaild } = Emailstate;
  const { isVaild: passwordIsVaild } = passwordstate;

  useEffect(() => {
    const infinitiTimer = setTimeout(() => {
      console.log("Cheacking Form Validity!");
      setFormIsValid(emailIsVaild && passwordIsVaild);
    }, 500);
    return () => {
      console.log("Clean UP!");
      clearTimeout(infinitiTimer);
    };
  }, [emailIsVaild, passwordIsVaild]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    DisPatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && passwordstate.isvalid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    DisPatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(Emailstate.isvalid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid( Emailstate.value.includes("@"));
    DisPatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    DisPatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    AuthCtx.onLogin(Emailstate.value, passwordstate.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-mail"
          type="email"
          value={Emailstate.value}
          isVaild={emailIsVaild}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        {/* <div
          className={`${classes.control} ${
            passwordstate.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}

        <Input
          id="password"
          label="Password"
          type="password"
          value={props.value}
          isVaild={passwordIsVaild}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        /> 



        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
