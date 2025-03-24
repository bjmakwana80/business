import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
import axios from "axios";

export default function AdminOrders() {
    const orderStatusMap = {
        1: "Delivered",
        2: "Pending",
        3: "Processing",
        4: "Shipped",
        5: "Out For Delivery",
        6: "Returned",
        7: "Refunded",
        8: "Cancelled",
        9: "Failed",
    };

    const [myData, setMyData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const location = useLocation(); // Get current URL location

    // Extract 'status' query parameter from the URL
    const queryParams = new URLSearchParams(location.search);
    const statusFromUrl = queryParams.get("status"); // Example: "2" for Pending orders

    useEffect(() => {
        axios.get("https://theeasylearnacademy.com/shop/ws/orders.php")
            .then((response) => {
                console.log(response.data);
                response.data.splice(0, 2); // Remove first two elements
                setMyData(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (statusFromUrl && statusFromUrl !== "All") {
            const filtered = myData.filter(order => String(order.orderstatus) === String(statusFromUrl));
            setFilteredData(filtered);
        } else {
            setFilteredData(myData);
        }
    }, [statusFromUrl, myData]);

    return (
        <div className="wrapper">
            <SideMenu />
            <div className="main">
                <TopMenu />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3">Orders List</h1>
                        <div className="card">
                            <div className="card-body table-responsive">
                                <table id="datatables-orders" className="table w-100">
                                    <thead className="table-light">
                                        <tr className="align-middle">
                                            <th>Order ID</th>
                                            <th>User Name</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th className="text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.fullname}</td>
                                                <td>{item.billdate}</td>
                                                <td>₹ {item.amount}</td>
                                                <td>{orderStatusMap[item.orderstatus] || "Unknown"}</td>
                                                <td className="text-end">
                                                    <Link to={`/AdminOrdersDetails/${item.id}`} className="btn btn-light">View</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
