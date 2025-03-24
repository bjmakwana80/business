import React from "react";
import { Link } from "react-router-dom";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
export default function AdminUsersDetailsView() {
    return (
        <div className="wrapper">
            <SideMenu />
            <div className="main">
                <TopMenu />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div className="card-header p-3 illustration d-flex justify-content-between align-items-center">
                            <h1 className="text-white mb-0 gujarati-regular">Users Details</h1>
                            <div className="d-flex gap-2">
                                <Link to='/AdminUsersMassage' className="btn btn-info">Massage</Link>
                                <Link to="/AdminUsers" className="btn btn-light">Back</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-xl-6 col-lg-6">
                                                <table className="table table-responsive d-grid my-2 mt-2">
                                                    <tbody>
                                                        <tr>
                                                            <th>User Image</th>
                                                            <td>
                                                                <div className="col-sm-3 col-xl-12 col-xxl-3 text-center">
                                                                    <img src="img/avatars/avatar.jpg" width={100} height={100} alt="Bipin" />
                                                                </div></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Name</th>
                                                            <td>Bipin Makwana</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mobile</th>
                                                            <td>+91 9054908080</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Email</th>
                                                            <td>bjmakwana8080@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Status</th>
                                                            <td><span className="badge badge-subtle-success">Active</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-12 col-xl-6 col-lg-6">
                                                <table className="table table-responsive d-grid my-2 mt-2">
                                                    <tbody>
                                                        <tr>
                                                            <th>Shipping Locality</th>
                                                            <td>Sodvadra</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Shipping Address Line 1</th>
                                                            <td>Shitala mata mandir Near </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Current Address Line-2</th>
                                                            <td>Main Bazar Sodvadra </td>
                                                        </tr>
                                                        <tr>
                                                            <th>City</th>
                                                            <td>Bhavnagar,Gujarat</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Pincode</th>
                                                            <td>364060</td>
                                                        </tr>
                                                        <tr>
                                                            <th>User Block/Unblock Status</th>
                                                            <td><span className="badge badge-subtle-warning">Unblocked</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Actions</th>
                                                            <td className="d-grid gap-2 d-md-block">
                                                                <button type="button" className="btn btn-outline-danger">Block</button>
                                                                <button type="button" className="btn btn-outline-warning">Unblock</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="table-responsive mt-5">
                                            <div className="gujarati-regular fs-2">User Orders Details</div>
                                            <table className="table">
                                                <thead className="illustration" scope="row">
                                                    <tr>
                                                        <th className="text-white">Id No</th>
                                                        <th className="text-white">Product Name</th>
                                                        <th className="text-white">Date</th>
                                                        <th className="text-white">Price</th>
                                                        <th className="text-white">Qty</th>
                                                        <th className="text-white">Payment</th>
                                                        <th className="text-white">Details</th>
                                                        <th className="text-white text-end">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mobile</td>
                                                        <td>19-Feb-2025</td>
                                                        <td>Rs. 2500</td>
                                                        <td>1</td>
                                                        <td>Received-Cash On Dilevery</td>
                                                        <td className="text-end">
                                                            <Link to="/AdminOrdersDetails"><button type="button" className="btn btn-outline-info">View</button></Link>
                                                        </td>
                                                        <td className="text-end text-dark fw-bolder">Rs. 2500</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colSpan={7} className="text-end text-dark fw-semibold">Total</td>
                                                        <td className="text-end text-dark fw-bolder">Rs. 2500</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}