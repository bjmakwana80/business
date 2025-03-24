import React from "react";
import { Link } from "react-router-dom";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
export default function AdminEditProduct() {
    return (
        <div className="wrapper">
            <SideMenu />
            <div className="main">
                <TopMenu />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div className="card-header p-3 illustration d-flex justify-content-between align-items-center">
                            <h1 className="text-white mb-0">Edit Product</h1>
                            <Link to="/AdminProduct" className="btn btn-light">Back</Link>
                        </div>
                        <div className="container mt-10">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 order-1 order-lg-1">
                                    <div className="card shadow">
                                        <div className="card-body p-10">
                                            <form>
                                                <div className="row mb-3">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-floating">
                                                            <select className="form-select" id="categoryid" name="categoryid" aria-label="Floating label select example">
                                                                <option selected value>Select Category</option>
                                                                <option value="laptop">Laptop</option>
                                                            </select>
                                                            <label htmlFor="floatingSelect">Product Category</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-floating mb-3">
                                                            <input type="text" className="form-control" id="title" name="title" placeholder="title" value="Mobile" />
                                                            <label htmlFor="title">Product Name</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-floating mb-3">
                                                            <input type="number" className="form-control" id="price" name="price" placeholder="Price" value={100} />
                                                            <label htmlFor="price">Price</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-floating mb-3">
                                                            <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Product quantity" value={82} />
                                                            <label htmlFor="floatingInput">Stock</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-floating mb-3">
                                                            <input type="text" className="form-control" id="weight" name="weight" placeholder="Weight" value={3000} />
                                                            <label htmlFor="weight">Weight</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-floating mb-3">
                                                            <input type="text" className="form-control" id="size" name="size" placeholder="Size" value="15 inch" />
                                                            <label htmlFor="size">Size</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-lg-8 col-md-12">
                                                        <div className="form-floating">
                                                            <textarea className="form-control" placeholder="Product description" id="detail" style={{ "height": "100px" }} name="detail" value={"WINDOWS 10 4 GB DDR3 RAM 128 gb ssd hard disk"} />
                                                            <label htmlFor="floatingTextarea">Detail</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-12">
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
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <label htmlFor="photo" className="form-label">Select Product Photo</label>
                                                        <input className="form-control" type="file" id="photo" name="photo" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-3 d-flex justify-content-end">
                                                        <input type="submit" value="Save changes" className="btn btn-primary me-2" />
                                                        <input type="reset" value="Clear All" className="btn btn-dark" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 order-2 order-lg-2">
                                    <div className="card shadow">
                                        <div className="card-body text-center">
                                            <img src="img/products/product-4.png" className="img-fluid rounded" alt="Product Image" />
                                            <p className="mt-3">Current Photo</p>
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