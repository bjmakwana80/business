import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginPage} from './admin_login_page';
import {ForgotPassword} from './admin_forgot_pass';
import ChangePassword from './admin_change_password';
import { ForgotPasswordVerify } from './admin_forgot_verify';
import AdminDashboard from './admin_dashboard';
import AdminAddProduct from './admin_add_product';
import AdminProduct from './admin_product';
import AdminViewProduct from './admin_view_product';
import AdminEditProduct from './admin_edit_product';
import AdminCategory from './admin_category';
import AdminAddCategory from './admin_add_category';
import AdminEditCategory from './admin_edit_category';
import AdminOrders from './admin_orders';
import AdminOrdersDetails from './admin_orders_details';
import AdminOrdersDetailsPrint from './admin_orders_details_print';
import AdminUsers from './admin_users';
import AdminUsersDetailsView from './admin_users_details_view';
import AdminUsersMassage from './admin_users_massage';
import PaymentHistory from './admin_payment';
import { CreateNewPassword } from './admin_create_new_password';
import { SuccessfullyPassword } from './admin_successfully_pass_update';
import NotFoundPage from './admin_404';
function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<LoginPage />} />
                <Route path='/ForgotPassword' element={<ForgotPassword />} />
                <Route path='/ForgotPasswordVerify' element={<ForgotPasswordVerify />} />
                <Route path='/CreateNewPassword' element={<CreateNewPassword />} />
                <Route path='/SuccessfullyPassword' element={<SuccessfullyPassword />} />
                <Route path='/ChangePassword' element={<ChangePassword />} />

                <Route path='/AdminDashboard' element={<AdminDashboard />} />
                <Route path='/AdminAddProduct' element={<AdminAddProduct />} />
                <Route path='/AdminProduct' element={<AdminProduct />} />
                <Route path='/AdminViewProduct' element={<AdminViewProduct />} />
                <Route path='/AdminEditProduct' element={<AdminEditProduct />} />

                <Route path='/AdminCategory' element={<AdminCategory />} />
                <Route path='/AdminAddCategory' element={<AdminAddCategory />} />
                <Route path='/AdminEditCategory' element={<AdminEditCategory />} />

                <Route path='/AdminOrders' element={<AdminOrders />} />
                <Route path='/AdminOrdersDetails' element={<AdminOrdersDetails />} />
                <Route path='/AdminOrdersDetailsPrint' element={<AdminOrdersDetailsPrint />} />

                <Route path='/AdminUsers' element={<AdminUsers />} />
                <Route path='/AdminUsersDetailsView' element={<AdminUsersDetailsView />} />
                <Route path='/AdminUsersMassage' element={<AdminUsersMassage />} />

                <Route path='/PaymentHistory' element={<PaymentHistory />} />
                <Route path='*' element={<NotFoundPage />} />


            </Routes>
        </BrowserRouter>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);
