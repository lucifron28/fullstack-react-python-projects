import { AuthForm } from "./AuthForm.jsx";
import { useState } from "react";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login attempted");
    };

    return (
        <AuthForm
            onSubmit={handleSubmit}
            buttonText="Login"
            errorMessage={errorMessage}
            isRegister={false}
        />
    );
}

export default Login;