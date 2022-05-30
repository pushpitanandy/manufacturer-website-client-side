import React, { useState } from 'react';
import { toast } from 'react-toastify';


const UserRow = ({ user, refetch }) => {
    const { _id, email, role } = user;
    const [users, setUsers] = useState([]);
    const makeAdmin = () => {
        fetch(`https://pacific-beyond-64387.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://pacific-beyond-64387.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                    refetch();
                    toast.success(`Successfully removed a user`);
                })
        }
    }

    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs'>Remove User</button></td>
        </tr>

    );
};

export default UserRow;