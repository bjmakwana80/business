import React from "react";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
import { Link } from "react-router-dom";

export default function AdminViewProduct() {
    return (
        <div className="wrapper">
            <SideMenu />
            <div className="main">
                <TopMenu />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div className="card-header p-3 illustration d-flex justify-content-between align-items-center">
                            <h1 className="text-white mb-0">Product Details</h1>
                            <Link to="/AdminProduct" className="btn btn-light">Back</Link>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-7 col-xxl-6">
                                        <div>
                                            <div className="row">
                                                <div className="col-4 col-md-3 col-xxl-2">
                                                    <div className="nav flex-column nav-outline" role="tablist" aria-orientation="vertical">
                                                        <a className="nav-link active mb-2" data-bs-toggle="pill" href="#product-1" role="tab" aria-controls="product-1" aria-selected="true">
                                                            <img src="img/products/product-detail-1.png" alt className="img-fluid mx-auto d-block rounded mh-75px" />
                                                        </a>
                                                        <a className="nav-link mb-2" data-bs-toggle="pill" href="#product-2" role="tab" aria-controls="product-2" aria-selected="false" tabIndex={-1}>
                                                            <img src="img/products/product-detail-2.png" alt className="img-fluid mx-auto d-block rounded mh-75px" />
                                                        </a>
                                                        <a className="nav-link mb-2" data-bs-toggle="pill" href="#product-3" role="tab" aria-controls="product-3" aria-selected="false" tabIndex={-1}>
                                                            <img src="img/products/product-detail-3.png" alt className="img-fluid mx-auto d-block rounded mh-75px" />
                                                        </a>
                                                        <a className="nav-link mb-2" data-bs-toggle="pill" href="#product-4" role="tab" aria-controls="product-4" aria-selected="false" tabIndex={-1}>
                                                            <img src="img/products/product-detail-4.png" alt className="img-fluid mx-auto d-block rounded mh-75px" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-8 col-md-9 col-xxl-9 offset-xxl-1">
                                                    <div className="tab-content p-3">
                                                        <div className="tab-pane fade active show" id="product-1" role="tabpanel">
                                                            <div>
                                                                <img src="img/products/product-detail-1.png" alt className="img-fluid mx-auto d-block" />
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="product-2" role="tabpanel">
                                                            <div>
                                                                <img src="img/products/product-detail-2.png" alt className="img-fluid mx-auto d-block" />
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="product-3" role="tabpanel">
                                                            <div>
                                                                <img src="img/products/product-detail-3.png" alt className="img-fluid mx-auto d-block" />
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="product-4" role="tabpanel">
                                                            <div>
                                                                <img src="img/products/product-detail-4.png" alt className="img-fluid mx-auto d-block" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-xxl-6">
                                        <div className="mt-3">
                                            <a href="#" className="text-primary">Smartphones</a>
                                            <h4 className="mt-1 mb-4">Apple iPhone 15 Pro Max</h4>
                                            <h5 className="mb-3">Price: $1499 USD
                                            </h5>
                                            <p className="text-muted mb-4">Introducing the Apple iPhone 15 Pro Max 256GB in Blue
                                                Titanium. Experience unparalleled performance with the lightning-fast A17
                                                Pro chip, perfect for gaming
                                                and seamless multitasking. Capture stunning photos and videos with the
                                                triple-lens camera system, including standard, wide-angle, and telephoto
                                                lenses,
                                                complete with Night mode for low-light shots.</p>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <p className="text-muted">
                                                        <i data-lucide="database" className="align-middle" />
                                                        <span className="align-middle">Storage: 256 GB</span>
                                                    </p>
                                                    <p className="text-muted">
                                                        <i data-lucide="smartphone-charging" className="align-middle" />
                                                        <span className="align-middle">Battery: 29 hours</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="text-muted">
                                                        <i data-lucide="camera" className="align-middle" />
                                                        <span className="align-middle">Megapixels: 48 MP</span>
                                                    </p>
                                                    <p className="text-muted">
                                                        <i data-lucide="cog" className="align-middle" />
                                                        <span className="align-middle">Warranty: 24 Months</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <h5>Color:</h5>
                                            <div className="nav nav-outline" role="tablist" aria-orientation="horizontal">
                                                <div className="me-3 text-center">
                                                    <a className="nav-link active p-1 mb-1 w-75px h-75px">
                                                        <img src="img/products/product-4.png" alt className="img-fluid mx-auto d-block rounded w-50px mb-1" />
                                                    </a>
                                                    <p className="mb-0">Blue</p>
                                                </div>
                                                <div className="me-3 text-center">
                                                    <a className="nav-link p-1 mb-1 w-75px h-75px">
                                                        <img src="img/products/product-5.png" alt className="img-fluid mx-auto d-block rounded w-50px mb-1" />
                                                    </a>
                                                    <p className="mb-0">White</p>
                                                </div>
                                                <div className="me-3 text-center">
                                                    <a className="nav-link p-1 mb-1 w-75px h-75px">
                                                        <img src="img/products/product-3.png" alt className="img-fluid mx-auto d-block rounded w-50px mb-1" />
                                                    </a>
                                                    <p className="mb-0">Natural</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="h4 mb-3">Specifications</h2>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="table-responsive">
                                            <table className="table table-sm mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" style={{ "width": "320px" }}>Category</th>
                                                        <td>Smartphones</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Brand</th>
                                                        <td>Apple</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Product number</th>
                                                        <td>935277</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Warranty</th>
                                                        <td>24 Months</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Color</th>
                                                        <td>Blue</td>
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
                                                        <th scope="row" style={{ "width": "320px" }}>Year introduced</th>
                                                        <td>2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Operating system</th>
                                                        <td>iOS</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Operation system when introduced</th>
                                                        <td>iOS 17</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Update frequency</th>
                                                        <td>Each quarter</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Date of last security update</th>
                                                        <td>September 2028</td>
                                                    </tr>
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
        </div>);
}