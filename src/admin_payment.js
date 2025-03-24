import React from "react";
import SideMenu, { Footer, TopMenu } from "./admin_nav_footer";
export default function PaymentHistory() {
    return (
        <div className="wrapper">
            <SideMenu/>
            <div className="main">
                <TopMenu/>
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3">Online Payment History</h1>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Online Payments</h5>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Payment ID</th>
                                                    <th>User ID</th>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                    <th>Payment Method</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#12345</td>
                                                    <td>3</td>
                                                    <td>$100.00</td>
                                                    <td>2023-10-01</td>
                                                    <td>Credit Card</td>
                                                    <td><span className="badge bg-success">Completed</span></td>
                                                    <td>
                                                        <button className="btn btn-sm btn-primary">View</button>
                                                        <button className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#12346</td>
                                                    <td>4</td>
                                                    <td>$200.00</td>
                                                    <td>2023-10-02</td>
                                                    <td>PayPal</td>
                                                    <td><span className="badge bg-warning">Pending</span></td>
                                                    <td>
                                                        <button className="btn btn-sm btn-primary">View</button>
                                                        <button className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#12347</td>
                                                    <td>5</td>
                                                    <td>$150.00</td>
                                                    <td>2023-10-03</td>
                                                    <td>Bank Transfer</td>
                                                    <td><span className="badge bg-danger">Failed</span></td>
                                                    <td>
                                                        <button className="btn btn-sm btn-primary">View</button>
                                                        <button className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
}