import React from "react";
import SideMenu, { TopMenu, Footer } from "./admin_nav_footer";
export default function AdminUsersMassage() {
    return (
        <div className="wrapper">
            <SideMenu />
            <div className="main">
                <TopMenu />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div className="card-header p-3 illustration d-flex justify-content-between align-items-center">
                            <div className="text-white fs-2 gujarati-regular">Customer Massage</div>
                            <div className="d-flex gap-2">
                                <a href="16_users_details.html" className="btn btn-light">Back</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form action>
                                            <div className="mb-5">
                                                <label htmlFor="email" className="form-label">email</label>
                                                <input type="email" name="email" id="email" className="form-control" readOnly />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="subject" className="form-label">Subject</label>
                                                <input type="text" name="subject" id="subject" className="form-control" required />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="message" className="form-label">Message</label>
                                                <textarea name="message" id="message" className="form-control" rows={3} value={""} />
                                                {/* npm install react-quill */}
                                            </div>
                                            <div className="d-flex gap-2 justify-content-end">
                                                <input type="submit" value="Send Message" className="btn btn-primary" />
                                                <input type="reset" value="Clear all" className="btn btn-dark" />
                                            </div>
                                        </form>
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