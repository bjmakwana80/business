import React from "react";
export default function NotFoundPage() {
    return (
        <div className="auth-full-page d-flex">
            <div className="auth-form p-3">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="h2">Page not found.</p>
                    <p className="lead fw-normal mt-3 mb-4">The page you are looking for might have been removed.</p>
                    <a className="btn btn-primary btn-lg" href="/AdminDashboard">Return to website</a>
                </div>
            </div>
        </div>
    );
}