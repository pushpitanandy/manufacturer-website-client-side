import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    return (
        <tr>

            <td>{email}</td>
            <td><button className='btn btn-xs'>Make Admin</button></td>
            <td><button className='btn btn-xs'>Remove User</button></td>


        </tr>
    );
};

export default UserRow;