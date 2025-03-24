import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
import { Plus } from "lucide-react";
import axios from "axios";

export default function AdminCategory() {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get("https://theeasylearnacademy.com/shop/ws/category.php")
            .then((response) => {
                console.log(response.data);
                response.data.splice(0, 2);
                setCategory(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function Display(item) {
        return (
            <tr className="align-middle">
                <td className="text-center text-nowrap">{item.id}</td>
                <td className="text-nowrap">
                    <strong>{item.title}</strong>
                </td>
                <td className="text-center">
                    <div
                        className="p-2 bg-body-tertiary d-flex justify-content-center align-items-center"
                        style={{ width: "80px", height: "80px", overflow: "hidden" }}
                    >
                        <img
                            src={`https://theeasylearnacademy.com/shop/images/${item.photo}`}
                            className="mw-100 mh-100"
                            alt={item.title}
                            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </div>
                </td>
                <td className="text-center">{item.islive === "1" ? "Yes" : "No"}</td>
                <td className="text-end text-nowrap">
                    <div className="d-flex gap-2 justify-content-end">
                        <Link to="/AdminEditCategory">
                            <button type="button" className="btn btn-outline-warning btn-md">
                                Edit
                            </button>
                        </Link>
                        <button type="button" className="btn btn-outline-danger btn-md">
                            Delete
                        </button>
                    </div>
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
                        <h1 className="h3 mb-3">Category</h1>
                        <div className="card">
                            <div className="card-body table-responsive">
                                <div className="row mb-3">
                                    <div className="col-md-6 col-xl-4 mb-2 mb-md-0">
                                        <div className="input-group input-group-search">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="datatables-products-search"
                                                placeholder="Search products…"
                                            />
                                            <button className="btn" type="button">
                                                <i className="align-middle" data-lucide="search" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-8">
                                        <div className="text-sm-end">
                                            <Link to="/AdminAddCategory">
                                                <button type="button" className="btn btn-primary btn-lg">
                                                    <Plus data-lucide="plus" className="me-1" />
                                                    Add New Category
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <table id="datatables-products" className="table w-100">
                                    <thead>
                                        <tr>
                                            <th className="align-middle">Sr No.</th>
                                            <th className="align-middle">Title</th>
                                            <th className="align-middle">Photo</th>
                                            <th className="align-middle">Is Live</th>
                                            <th className="align-middle text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {category.map((item) => Display(item))}
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
