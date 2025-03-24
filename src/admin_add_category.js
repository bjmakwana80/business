import React from "react";
import { Link } from "react-router-dom";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
export default function AdminAddCategory() {
    return (
        <div className="wrapper">
            <SideMenu />
            <div className="main">
                <TopMenu />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div className="card-header p-3 illustration d-flex justify-content-between align-items-center">
                            <h1 className="text-white mb-0">Add New category</h1>
                            <Link to="/AdminCategory" className="btn btn-light">Back</Link>
                        </div>
                        <div className="container mt-10">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card shadow">
                                        <div className="card-body p-10">
                                            <form>
                                                <div className="row mb-3 gap-2">
                                                    <strong>Category Title</strong>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div className="form-floating mb-3">
                                                            <input type="text" className="form-control" id="title" name="title" placeholder="title" />
                                                            <label htmlFor="title">Category Title</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <label htmlFor="photo" className="form-label">Select Product Photo</label>
                                                        <input className="form-control" type="file" id="photo" name="photo" required />
                                                    </div>
                                                    <div className="d-grid gap-2 d-sm-inline-flex col-md-12 col-sm-12 col-12">
                                                        <p className="fw-bold">Is this category Live?</p>
                                                        <div className="form-check mb-4">
                                                            <input name="islive" type="radio" className="form-check-input" value={1} />
                                                            <label className="form-check-label">Yes</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input name="islive" type="radio" className="form-check-input" value={0} />
                                                            <label className="form-check-label">No</label>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-6">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5 pt-3 d-flex gap-2 justify-content-end">
                                                            <input type="submit" value="Save changes" className="btn btn-primary" />
                                                            <input type="reset" value="Clear All" className="btn btn-dark" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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