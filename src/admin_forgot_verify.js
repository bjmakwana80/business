import React from "react";
export function ForgotPasswordVerify() {
    return (
        <div className="auth-full-page d-flex">
            <div className="auth-form p-3">
                <div className="text-center">
                    <h1 className="h2">Verify your Email</h1>
                    <p className="lead">
                        Please enter the 6 digit code sent to Your Email
                    </p>
                </div>
                <div className="mb-3">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">6-digit code</label>
                            <input className="form-control form-control-lg" type="text" name="code" placeholder="Enter your code" />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <a className="btn btn-lg btn-primary" href="/CreateNewPassword">Verify</a>
                        </div>
                    </form>
                </div>
                <div className="text-center">
                    Didn't receive a code? <a href="#">Resend</a>
                </div>
            </div>
        </div>
    );
}