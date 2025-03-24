import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Correct way to redirect

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        fetch("https://theeasylearnacademy.com/shop/ws/login.php", {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                navigate("/AdminDashboard"); // Redirect after successful login
            })
            .catch((error) => console.error("Login error:", error));
    };

    return (
        <div className="auth-full-page d-flex">
            <div className="auth-form p-3">
                <div className="text-center">
                    <h1 className="h2">Welcome back!</h1>
                    <p className="lead">Login to your account to continue</p>
                </div>
                <div className="mb-3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                className="form-control form-control-lg"
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <small>
                                <a href="/ForgotPassword">Forgot password?</a>
                            </small>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-lg btn-primary">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
