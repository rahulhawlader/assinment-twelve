import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content ">
                <h2 className='text-4xl font-bold text-purple-500'>Welcome To Your Dashboard</h2>
                <Outlet />
                {/* <!-- Page content here --> */}


            </div>
            <div class="drawer-content flex flex-col items-center justify-center">



            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


                    <li><Link to="/dashboard">My All Order </Link></li>

                    <li><Link to="/dashboard/myreview">My Review</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default DashBoard;