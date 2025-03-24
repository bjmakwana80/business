import React from "react";
import { Link } from "react-router-dom";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
export default function AdminEditCategory() {
    return (
        <div className="wrapper">
            <SideMenu />
            <div className="main">
                <TopMenu />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div className="card-header p-3 illustration d-flex justify-content-between align-items-center">
                            <h1 className="text-white mb-0">Edit category</h1>
                            <Link to="/AdminCategory" className="btn btn-light">Back</Link>
                        </div>
                        <div className="container mt-10">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card shadow">
                                        <div className="card-body p-10">
                                            <div className="row">
                                                <div className="col-10">
                                                    <form>
                                                        <div className="mb-3">
                                                            <label htmlFor="title" className="form-label">Change Category Title</label>
                                                            <input type="text" className="form-control" id="title" placeholder="Enter title" required />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="photo" className="form-label">Image</label>
                                                            <input type="file" className="form-control" id="photo" required />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label">Is Live</label>
                                                            <div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" name="islive" id="liveYes" defaultValue="yes" required />
                                                                    <label className="form-check-label" htmlFor="liveYes">Yes</label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" name="islive" id="liveNo" defaultValue="no" required />
                                                                    <label className="form-check-label" htmlFor="liveNo">No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-end">
                                                            <button type="submit" className="btn btn-success me-2">Save</button>
                                                            <button type="reset" className="btn btn-dark">Clear all</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-12 col-lg-2 col-md-2 col-sm-6">
                                                    <div className="fw-bold">Existing Image</div>
                                                    <img src="img/products/product-4.png " className="img-fluid w-100px h-100px" alt="Avatar" />
                                                </div>
                                            </div>
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