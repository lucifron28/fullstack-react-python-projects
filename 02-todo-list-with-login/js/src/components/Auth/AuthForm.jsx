

export function AuthForm(props) {
    const { onSubmit, buttonText, errorMessage, isRegister } = props;

    return (
        <form>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            {isRegister && <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>}
            <div>
                <button type="submit" onClick={onSubmit}>{buttonText}</button>
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
    );
}