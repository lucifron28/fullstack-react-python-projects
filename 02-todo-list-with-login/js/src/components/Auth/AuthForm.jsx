
export function AuthForm({ onSubmit, buttonText, errorMessage, isRegister }) {
    return (
        <form className="authForm" onSubmit={onSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    className="w-full"
                    autoComplete="username"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-medium">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full"
                    autoComplete={isRegister ? "new-password" : "current-password"}
                />
            </div>
            {isRegister && (
                <div className="flex flex-col gap-1">
                    <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        className="w-full"
                        autoComplete="new-password"
                    />
                </div>
            )}
            <button className="lr-button" type="submit">{buttonText}</button>
            {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
    );
}