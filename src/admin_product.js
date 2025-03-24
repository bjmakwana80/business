import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus } from "lucide-react";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
import axios from "axios";
export default function AdminProduct() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios("https://theeasylearnacademy.com/shop/ws/product.php")
            .then((response) => {
                console.log(response.data);
                response.data.splice(0, 2);
                setMyData(response.data)
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    function Display(item) {
        return (
            <tr>
                <td>{item.id}</td>
                <td className="d-flex align-items-center">
                    <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2"
                    style={{ width: "80px", height: "80px", overflow: "hidden" }}>
                        <img
                            src={`https://theeasylearnacademy.com/shop/images/product/${item.photo}`}
                            className="mw-100 mh-100"
                            alt={item.title} style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </div>
                    <p className="mb-0">
                        <strong>{item.title}</strong>
                        <br />
                        <span className="text-muted">{item.size}</span>
                    </p>
                </td>
                <td>₹ {item.price}</td>
                <td>{item.stock}</td>
                <td>{item.categorytitle}</td>
                <td>{(item.islive === "1") ? "Yes" : "No"}</td>
                <td className="text-end">
                    <Link to="/AdminViewProduct">
                        <button type="button" className="btn btn-info me-2">View</button>
                    </Link>
                    <Link to="/AdminEditProduct">
                        <button type="button" className="btn btn-warning me-2">Edit</button>
                    </Link>
                    <button type="button" className="btn btn-danger">Delete</button>
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
                        <h1 className="h3 mb-3">Products</h1>

                        <div className="card">
                            <div className="card-body table-responsive">
                                <div className="row mb-3">
                                    <div className="col-md-6 col-xl-4 mb-2 mb-md-0">
                                        <div className="input-group input-group-search">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search…"
                                                aria-label="Search"
                                            />
                                            <button className="btn" type="button">
                                                <Search className="align-middle" size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-8">
                                        <div className="text-sm-end">
                                            <Link to="/AdminAddProduct">
                                                <button type="button" className="btn btn-primary btn-lg">
                                                    <Plus className="align-middle" size={20} /> New Product
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <table id="datatables-products" className="table w-100">
                                    <thead>
                                        <tr>
                                            <th className="align-middle">Sr No.</th>
                                            <th className="align-middle">Item Name</th>
                                            <th className="align-middle">Price</th>
                                            <th className="align-middle">Stock</th>
                                            <th className="align-middle">Category</th>
                                            <th className="align-middle">Is Live</th>
                                            <th className="align-middle text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myData.map((item) => Display(item))}
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