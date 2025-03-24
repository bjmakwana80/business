import React, { useEffect, useState } from 'react';
import SideMenu, { TopMenu, Footer } from './admin_nav_footer';
import axios from 'axios';

export default function AdminAddProduct() {
  const [product , setProduct] = useState([]);
  useEffect(() =>{
    axios("https://theeasylearnacademy.com/shop/ws/product.php")
    .then((response) => {
      console.log(response.data);
      response.data.splice(0, 2);
      setProduct(response.data);

    }).catch((error) => {
      console.log(error);
    });
  },[]);
  return (
    <div>
      <div className="wrapper">
        <SideMenu />
        <div className="main">
          <TopMenu />
          <main className="content">
            <div className="container-fluid p-0">
              <div className="card-header p-3 illustration d-flex justify-content-between align-items-center">
                <h1 className="text-white mb-0">Add New Product</h1>
                <a href="7_admin_product.html" className="btn btn-light">Back</a>
              </div>
              <div className="container mt-10">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card shadow">
                      <div className="card-body p-10">
                        <form>
                          <div className="row mb-3">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="form-floating">
                                <select className="form-select" id="categoryid" name="categoryid" aria-label="Floating label select example">
                                  <option selected value>Select Category</option>
                                </select>
                                <label htmlFor="floatingSelect">Product Category</label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="title" name="title" placeholder="title" />
                                <label htmlFor="title">Product Name</label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="price" name="price" placeholder="Price" />
                                <label htmlFor="price">Price</label>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Product quantity" />
                                <label htmlFor="floatingInput">Stock</label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="weight" name="weight" placeholder="Weight" />
                                <label htmlFor="weight">Weight</label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="size" name="size" placeholder="Size" />
                                <label htmlFor="size">Size</label>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                              <div className="form-floating">
                                <textarea className="form-control" placeholder="Product description" id="detail" style={{ "height": "100px" }} name="detail" value={""} />
                                <label htmlFor="floatingTextarea">Detail</label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
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
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <label htmlFor="photo" className="form-label">Select Product Photo</label>
                              <input className="form-control" type="file" id="photo" name="photo" required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-5 pt-3 gap-2 d-flex justify-content-end">
                              <input type="submit" value="Save changes" className="btn btn-primary" />
                              <input type="reset" value="Clear All" className="btn btn-dark" />
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
          <Footer/>
        </div>
      </div>
    </div>
  );
}