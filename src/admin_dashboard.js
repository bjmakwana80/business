import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { RefreshCcw, CircleDollarSign } from "lucide-react";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
const AdminDashboard = () => {
    const [dash, setDash] = useState([]);
    useEffect(() => {
        axios("https://theeasylearnacademy.com/shop/ws/summery.php")
            .then((response) => {
                console.log(response.data);
                // response.data.splice(0, 1);
                setDash(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);
    return (
        <div>
            <div className="wrapper">
                <SideMenu />
                <div className="main">
                    <TopMenu />

                    <main className="content ">
                        <div className="container-fluid p-0">
                            <div className="row mb-2 mb-xl-3">
                                <div className="col-auto d-none d-sm-block">
                                    <h3>Dashboard</h3>
                                </div>
                                <div className="col-auto ms-auto text-end mt-n1">
                                    <Link to="/" className="btn btn-primary shadow-sm">
                                        <RefreshCcw className="align-middle" /></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">Products</h3>
                                                    <div className="mb-2 fs-3 fw-bold">
                                                        <i className="align-middle me-2 fab fa-fw fa-product-hunt" style={{ "color": "#74C0FC" }} /> <span className="align-middle">{dash.map((item) => item.products)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <i className="align-middle fa-solid fa-crown" style={{ "color": "#45c9a1" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">Categorys</h3>
                                                    <div className="mb-2 fs-3 fw-bold">
                                                        <img src="img/photos/categoryicon.png" className="me-3" width="30px" alt="categoryicon" /> <span className="align-middle">{dash.map((item) => item.categories)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <img src="img/photos/categoryicon3.png" className="align-middle" width="30px" alt="categoryicon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">Users</h3>
                                                    <div className="mb-2 fs-3 fw-bold">
                                                        <i className="align-middle me-2 fas fa-fw fa-users" style={{ "color": "#74C0FC" }} /> <span>{dash.map((item) => item.users)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <i className="align-middle fas fa-fw fa-users" style={{ "color": "#239154" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">Total Orders</h3>
                                                    <div>
                                                        <img src="img/photos/total-orders.png" className="me-3" width="30px" alt="Pending" />
                                                        <span className="mb-2 fs-3 fw-bold align-middle">{dash.map((item) => item.orders)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <img src="img/photos/total-orders.png" className="align-middle" width="30px" alt="Pending" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">Today Orders</h3>
                                                    <div>
                                                        <i className="fa-solid fs-3 me-3 fa-calendar-day" style={{ "color": "#328633" }} />
                                                        <span className="mb-2 fs-3 fw-bold align-middle">{dash.map((item) => item.daily)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <i className="fa-solid fa-calendar-day" style={{ "color": "#328633" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">Weekly Orders</h3>
                                                    <div>
                                                        <i className="fa-solid me-3 fa-calendar-week fa-xl" style={{ "color": "#176bfd" }} />
                                                        <span className="mb-2 fs-3 fw-bold align-middle">{dash.map((item) => item.weekly)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <i className="fa-solid fa-calendar-week fa-xl" style={{ "color": "#176bfd" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">Monthly Orders</h3>
                                                    <div>
                                                        <i className="fa-solid fa-calendar me-3 fa-xl" style={{ "color": "#74C0FC" }} />
                                                        <span className="mb-2 fs-3 fw-bold align-middle">{dash.map((item) => item.monthly)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <i className="fa-solid fa-calendar fa-xl" style={{ "color": "#74C0FC" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">Yearly Orders</h3>
                                                    <div>
                                                        <img src="img/photos/calendar.png" className="me-3" width="30px" alt="Pending" />
                                                        <span className="mb-2 fs-3 fw-bold align-middle">{dash.map((item)=>item.yearly)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <img src="img/photos/calendar.png" className="align-middle" width="30px" alt="Pending" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body py-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-2">$ 18.700</h3>
                                                    <p className="mb-2">Total Revenue</p>
                                                    <div className="mb-0">
                                                        <span className="badge badge-subtle-success me-2"> +8.65% </span>
                                                        <span className="text-muted">Since last week</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-block ms-3">
                                                    <div className="stat">
                                                        <CircleDollarSign className="align-middle text-info" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Today Orders Working</h5>
                                </div>
                                <table className="table table-borderless my-0">
                                    <tbody><tr>
                                        <td>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="bg-body-tertiary rounded-2">
                                                        <img className="p-2" src="img/photos/pendingorders.png" width="45px" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <strong>Pending Orders</strong>
                                                    <div className="text-muted">
                                                        Orders that have been placed but not yet processed.
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex flex-column w-100">
                                                <span className="me-2 mb-1 text-muted">15%</span>
                                                <div className="progress progress-sm w-100">
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ "width": "15%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="d-none d-xl-table-cell text-end">
                                            <Link to="/AdminOrders?status=2" className="btn btn-light">View</Link>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="bg-body-tertiary rounded-2">
                                                            <img className="p-2" src="img/photos/processing.png" width="45px" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <strong>Processing Orders</strong>
                                                        <div className="text-muted">
                                                            Orders that are being packed and prepared for shipping.
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex flex-column w-100">
                                                    <span className="me-2 mb-1 text-muted">10%</span>
                                                    <div className="progress progress-sm w-100">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ "width": "10%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end">
                                                {/* View Button with Link to /AdminOrders and Filter Parameter */}
                                                <Link to="/AdminOrders?status=3" className="btn btn-light">View</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="bg-body-tertiary rounded-2">
                                                            <img className="p-2" src="img/photos/shipped.png" width="45px" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <strong>Shipped Orders</strong>
                                                        <div className="text-muted">
                                                            Orders that have been dispatched but not yet delivered.
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex flex-column w-100">
                                                    <span className="me-2 mb-1 text-muted">25%</span>
                                                    <div className="progress progress-sm w-100">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ "width": "25%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end">
                                                <Link to="/AdminOrders?status=4" className="btn btn-light">View</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="bg-body-tertiary rounded-2">
                                                            <img className="p-2" src="img/photos/out_for_delivery.png" width="45px" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <strong>Out for Delivery Orders</strong>
                                                        <div className="text-muted">
                                                            Orders that are on the way to the customer.
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex flex-column w-100">
                                                    <span className="me-2 mb-1 text-muted">15%</span>
                                                    <div className="progress progress-sm w-100">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ "width": "15%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end">
                                                <Link to="/AdminOrders?status=5" className="btn btn-light">View</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="bg-body-tertiary rounded-2">
                                                            <img className="p-2" src="img/photos/delivered.png" width="45px" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <strong>Delivered Orders</strong>
                                                        <div className="text-muted">
                                                            Orders that have been successfully delivered to the customer.
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex flex-column w-100">
                                                    <span className="me-2 mb-1 text-muted">35%</span>
                                                    <div className="progress progress-sm w-100">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ "width": "35%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end">
                                                <Link to="/AdminOrders?status=1" className="btn btn-light">View</Link>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                <table className="table table-row-bordered my-5">
                                    <tbody><tr>
                                        <td>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="bg-body-tertiary rounded-2">
                                                        <img className="p-2" src="img/photos/cancel-order.png" width="45px" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <strong>Cancelled Orders</strong>
                                                    <div className="text-muted">
                                                        Orders that have been canceled by the customer or seller.
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="d-none d-xl-table-cell text-end" colSpan={2}>
                                            <Link to="/AdminOrders?status=8" className="btn btn-light">View</Link>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="bg-body-tertiary rounded-2">
                                                            <img className="p-2" src="img/photos/returned.png" width="45px" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <strong>Returned Orders</strong>
                                                        <div className="text-muted">
                                                            Orders that the customer has returned.
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end" colSpan={2}>
                                                <Link to="/AdminOrders?status=6" className="btn btn-light">View</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="bg-body-tertiary rounded-2">
                                                            <img className="p-2" src="img/photos/refunded.png" width="45px" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <strong>Refunded Orders</strong>
                                                        <div className="text-muted">
                                                            Orders where the payment has been refunded.
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end" colSpan={2}>
                                                <Link to="/AdminOrders?status=7" className="btn btn-light">View</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="bg-body-tertiary rounded-2">
                                                            <img className="p-2" src="img/photos/failed-orders.png" width="45px" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <strong>Failed Orders</strong>
                                                        <div className="text-muted">
                                                            Orders that failed due to payment issues or technical errors.
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="d-none d-xl-table-cell text-end" colSpan={2}>
                                                <Link to="/AdminOrders?status=9" className="btn btn-light">View</Link>
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;