import "./login.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="login-page">
      {loading && <Loading />}
      <div className="login-page-content">
        {/* <img src="https://robohash.org/18" alt="" /> */}

        <h1>Login Page</h1>
        <div className="login-form">
          <div className="input-element">
            <EmailIcon />
            <input type="email" name="" id="" placeholder="Enter Email" />
          </div>
          <div className="input-element">
            <LockIcon />
            <input type="password" name="" id="" placeholder="Enter Passowrd" />
          </div>
          <button
            className="button button2 btn-login"
            onClick={() => {
              history.push("/");
            }}
          >
            Login
          </button>{" "}
        </div>
        <div className="forgot-password">
          <p className="forgot-password-text">
            Forgot Password? / <span>Create Account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
