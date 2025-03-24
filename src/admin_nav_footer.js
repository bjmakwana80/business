import React from "react";
import { Link } from "react-router-dom";
import { Search, } from "lucide-react";
export default function SideMenu() {
    return (
        <nav id="sidebar" className="sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="/">
                    <span className="align-middle lilita-one-regular me-3">Sabzee Mandi Bhavnagar</span>
                </a>
                <ul className="sidebar-nav list-unstyled">
                    <li className="sidebar-header">Main</li>
                    <li className="sidebar-item align-middle">
                        <a className="sidebar-link" href="/AdminDashboard">
                            <img src="img/photos/dashboard.png" width="25px" alt="dashboard" className="me-3" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item align-middle">
                        <a className="sidebar-link" href="/AdminCategory">
                            <img src="img/photos/categoryicon.png" width="25px" alt="categoryicon" className="me-3" />
                            <span>Categorys</span>
                        </a>
                    </li>
                    <li className="sidebar-item align-middle">
                        <a className="sidebar-link" href="/AdminProduct">
                            <i className="fab fa-2x fa-product-hunt me-3" style={{ color: "#74C0FC" }} />
                            <span>Products</span>
                        </a>
                    </li>
                    <li className="sidebar-item align-middle">
                        <a className="sidebar-link" href="/AdminOrders">
                            <img src="img/photos/order.png" width="25px" alt="orders" className="me-3" />
                            <span>Orders</span>
                        </a>
                    </li>
                    <li className="sidebar-item align-middle">
                        <a className="sidebar-link" href="/AdminUsers">
                            <img src="img/photos/users.png" width="25px" alt="users" className="me-3" />
                            <span>Users</span>
                        </a>
                    </li>

                    <li className="sidebar-item sidebar-header">Admin</li>
                    <li className="sidebar-item align-middle">
                        <a className="sidebar-link" href="/PaymentHistory">
                            <img src="img/photos/payment.png" width="25px" alt="users" className="me-3" />
                            <span>Payment</span>
                        </a>
                    </li>
                    <li className="sidebar-item align-middle">
                        <a className="sidebar-link" href="/ChangePassword">
                            <img src="img/photos/security.png" width="25px" alt="users" className="me-3" />
                            <span>Change Password</span>
                        </a>
                    </li>
                </ul>
                <div className="btn btn-secondary w-100 text-start">
                    <a className="sidebar-link" href="/LoginPage">
                        <img src="img/photos/logout.png" width="25px" alt="logout" className="me-3" />
                        <span className="fw-semibold">Logout</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export function TopMenu() {
    return (
        <nav className="navbar navbar-expand navbar-bg">
            <Link className="sidebar-toggle">
                <i className="hamburger align-self-center" />
            </Link>
            <form className="d-flex d-sm-inline-flex">
                <div className="input-group input-group-navbar">
                    <input type="text" className="form-control" placeholder="Search…" aria-label="Search" />
                    <button className="btn" type="button">
                        <Search className="align-middle" size={20} />
                    </button>
                </div>
            </form>
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    <li className="nav-item">
                        <a className="nav-link" href="UserProfile">
                            <img
                                src="img/avatars/avatar.jpg"
                                className="img-fluid rounded-circle me-2 mt-n2 mb-n2"
                                width={40}
                                height={40}
                                alt="User Avatar" // Always add an alt attribute for accessibility
                            />
                            <span className="gujarati-regular d-none d-lg-inline">Bipin Makwana</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row text-muted">
                    <div className="col-12 text-center">
                        <p className="mb-0">
                            © 2025 - <a className="text-muted" href="#">Sabzee Mandi Bhavnagar</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>);
}