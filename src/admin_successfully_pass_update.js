import React from "react";
export function SuccessfullyPassword() {
    return (
        <div className="auth-full-page d-flex">
            <div className="auth-form p-3">
                <div className="text-center">
                    {/* Success Icon */}
                    <div className="mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill="green"
                            className="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </div>

                    {/* Success Message */}
                    <h1 className="h2">Password Changed Successfully!</h1>
                    <p className="lead">
                        Your password has been updated successfully. You can now log in with your new password.
                    </p>
                </div>

                {/* Redirect Button */}
                <div className="d-grid gap-2 mt-4">
                    <a className="btn btn-lg btn-primary" href="/LoginPage">
                        Go to Login
                    </a>
                </div>
            </div>
        </div>
    );
}