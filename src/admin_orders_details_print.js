import React from "react";
import { Link } from "react-router-dom";
export default function AdminOrdersDetailsPrint() {
    return (
        <div className="container mt-5">
            <div className="card-header p-3 illustration d-flex justify-content-between align-items-center">
                <h1 className="lilita-one-regular text-white">Sabzee Mandi bhavnagar</h1>
                <Link to="/AdminOrdersDetails" className="btn btn-light">Back</Link>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="table-responsive">
                                        <table className="table table-sm mb-0">
                                            <tbody>
                                                <tr>
                                                    <th scope="row" style={{ "width": "320px" }}>id</th>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Name</th>
                                                    <td>Bpin Makwana</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{ "width": "320px" }}>Amount</th>
                                                    <td>₹ 2500</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Date</th>
                                                    <td>March 5 2025</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Status</th>
                                                    <td>dilevred</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment Mode</th>
                                                    <td>Cas On Dilevery</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment Status</th>
                                                    <td>Paid</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="table-responsive">
                                        <table className="table table-sm mb-0">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Address Line 1</th>
                                                    <td>Sodvadra</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address Line 2</th>
                                                    <td>Shitala Mata Mandir Near</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address Line 3</th>
                                                    <td>Main Bazar Sodvadra</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">City</th>
                                                    <td>Bhavnagar</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Pincode</th>
                                                    <td>364060</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Mobile</th>
                                                    <td>+91 9054908080</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">E-mail</th>
                                                    <td>bjmakwana8076@gmail.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="table-responsive mt-5">
                                    <table className="table">
                                        <thead className="illustration" scope="row">
                                            <tr>
                                                <th className="text-white">Sr No</th>
                                                <th className="text-white">Name</th>
                                                <th className="text-white">Price</th>
                                                <th className="text-white">Qty</th>
                                                <th className="text-white text-end">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mobile</td>
                                                <td>Rs. 2500</td>
                                                <td>1</td>
                                                <td className="text-end text-dark fw-bolder">Rs. 2500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}