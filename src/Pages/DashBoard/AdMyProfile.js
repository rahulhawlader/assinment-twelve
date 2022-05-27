import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AdMyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    return (
        <div >

            <form>



                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body bg-black">
                        <h1 className='text-2xl text center '>Add Your Profile</h1>

                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white text-red font-bold' value={user.email} placeholder='Email' type="text"{...register("email")} disabled />


                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white text-red font-bold' value={user.displayName} placeholder='Name' type="text"{...register("name")} disabled />





                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white text-black' placeholder='Location ' type="text" {...register("location")} />


                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white text-black' placeholder='Phone' type="number" {...register("phone")} />

                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white text-black' placeholder='education' type="text" {...register("education")} />
                        <input className='mb-2 input input-ghost w-full max-w-xs bg-white' placeholder='Linkedle Link' type="text" {...register("linkedle Link")} />





                        <div class="card-actions justify-end">
                            <input className='btn-primary input input-ghost w-full max-w-xs' type="submit" value="Add Profile" />

                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AdMyProfile;