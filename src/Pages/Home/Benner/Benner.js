import React from 'react';
import benner from "../../../image/benner.webp";


const Benner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={benner} alt="benner" />
                <div>
                    <h1 class="text-5xl font-bold">Shop Bike Racks</h1>
                    <p class="py-6">Bike fitting is the process that involves pairing a rider to their bike to attain the best performance while minimising any chance of injury. Cycling is a very low impact activity but even so, problems can arise if you're not set up correctly</p>
                    <button type="button" class="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold ...">
                        get Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Benner;