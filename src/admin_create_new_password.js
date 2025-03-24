import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export function CreateNewPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook for navigation


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match. Please try again.");
        } else {
            setError(""); // Clear error message
            console.log("Passwords match. Redirecting to success page...");

            // Redirect to the success page
            navigate("/SuccessfullyPassword");
        }
    };

    return (
        <div className="auth-full-page d-flex">
            <div className="auth-form p-3">
                <div className="text-center">
                    <h1 className="h2">Create New Password</h1>
                    <p className="lead">
                        Please create a new password for your account.
                    </p>
                </div>
                <div className="mb-3">
                    <form onSubmit={handleSubmit}>
                        {/* New Password Field */}
                        <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                name="newPassword"
                                placeholder="Enter your new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {confirmPassword && (
                            <div className={`mb-3 ${newPassword === confirmPassword ? "text-success" : "text-danger"}`}>
                                {newPassword === confirmPassword ? "Passwords match!" : "Passwords do not match."}
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <div className="text-danger mb-3">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-lg btn-primary" type="submit">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center">
                    Remember your password? <a href="/LoginPage">Login</a>
                </div>
            </div>
        </div>
    );
};
