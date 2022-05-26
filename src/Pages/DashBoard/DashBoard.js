import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id=" dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl text-pink-600'>Welcome To Your Dashbord</h2>
                <Outlet />


            </div>
            <div class="drawer-side">
                <label for=" dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">All Orders</Link></li>
                    <li><Link to="/dashboard/reviews">All Reviews</Link></li>
                    <li><Link to="/dashboard/allUsers">All Users</Link></li>
                </ul>

            </div>
        </div>

    );
};

export default DashBoard;