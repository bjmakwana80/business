import React from "react";
export function ForgotPassword() {
    return (
        <div className="auth-full-page d-flex">
            <div className="auth-form p-3">
                <div className="text-center">
                    <h1 className="h2">Reset password</h1>
                    <p className="lead">
                        Enter your email to send 6 digit code.
                    </p>
                </div>
                <div className="mb-3">
                    <form action="/ForgotPasswordVerify" method="GET">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-lg btn-primary">Send Code</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}