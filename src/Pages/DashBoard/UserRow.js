import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }


        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to  make an admin')
                }
                res.json()
            })
            .then(data => {
                if (data.modifiCount > 0) {
                    refetch();
                    toast('successfully Made an admin')
                }
                console.log(data);
            })




    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>make Admin</button>}</td>
            <td><button className='btn btn-xs'>remove user</button></td>

        </tr>
    );
};

export default UserRow;