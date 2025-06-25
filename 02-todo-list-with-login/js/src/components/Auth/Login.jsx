import { AuthForm } from "./AuthForm.jsx";
import { useState } from "react";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login attempted");
    };

    return (
      <div className="login-register-form">
        <h1 className="text-xl mb-5">Login</h1>
        <AuthForm
          onSubmit={handleSubmit}
          buttonText="Login"
          errorMessage={errorMessage}
          isRegister={false}
        />
      </div>
    );
}

export default Login;