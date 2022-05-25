import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    return (

        <tr>
            <th>3</th>
            <td>{email}</td>
            <td><button class="btn btn-xs">make Admin</button></td>
            <td><button class="btn btn-xs">Remove user</button></td>
        </tr>

    );
};

export default UserRow;