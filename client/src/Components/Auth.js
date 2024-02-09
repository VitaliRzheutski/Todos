import { useState } from "react"

const Auth = () => {
    const [error, setErrors] = useState(null)
    const [isLogin, setIsLogin] = useState(true)

    const viewLogin = (status) => {
        setErrors(null)
        setIsLogin(status)
    }

    return (
        <div className="auth-container">
            <div className="auth-container-box">
                <form>
                    <h2>{isLogin ? 'Please log in' : 'Please sign up!'}</h2>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    {!isLogin && <input type="password" placeholder="confirm password" />}
                    <input type="submit" className="create" />
                    {error && <p>{error}</p>}
                </form>
                <div className="auth-options">
                    <button
                        onClick={() => viewLogin(false)}
                        style={{ background: !isLogin ? 'rgb(255, 255 255)' : 'rgb(188, 188, 188)' }}
                    >Sign Up
                    </button>

                    <button
                        onClick={() => viewLogin(true)}
                        style={{ background: !isLogin ? 'rgb(255, 255 255)' : 'rgb(188, 188, 188)' }}
                    >LogIn
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Auth;
