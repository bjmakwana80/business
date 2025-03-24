import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
import { Search, Plus} from "lucide-react";
import { Link } from "react-router-dom";


export default function Users() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get("https://theeasylearnacademy.com/shop/ws/users.php")
            .then((response) => {
                console.log(response.data);
                response.data.splice(0, 2);
                setMyData(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);
    function Display(item) {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <Link to={`/AdminUsersMassage?email=${item.email}`}>
                        <button type="button" className="btn btn-outline-dark">Message</button>
                    </Link>
                </td>
                <td>Unblocked</td>
                <td className="d-grid gap-2">
                    <button type="button" className="btn btn-outline-danger">Block</button>
                    <button type="button" className="btn btn-outline-warning">Unblock</button>
                </td>
                <td>
                    <Link to="/AdminUsersDetailsView">
                        <button type="button" className="btn btn-outline-info">View Details</button>
                    </Link>
                </td>
            </tr>
        );
    }
    return (
        <div className="wrapper">
            <SideMenu />
            <div className="main">
                <TopMenu />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3">Customers</h1>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-2 mb-md-0">
                                                <div className="input-group input-group-search">
                                                    <input type="text" className="form-control" id="datatables-customers-search" placeholder="Search customers…" />
                                                    <button className="btn" type="button">
                                                        <Search className="align-middle" size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text-sm-end">
                                                    <button type="button" className="btn btn-primary btn-lg"><Plus size={20} /> Add Customer</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table id="datatables-customers" className="table table-hover table-sm-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="text-start">UserId</th>
                                                        <th>Users Name</th>
                                                        <th>Email</th>
                                                        <th>Mobile</th>
                                                        <th>Massage</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                        <th className="text-end">View Profile</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {myData.map((item) => Display(item))}
                                                </tbody>
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
};