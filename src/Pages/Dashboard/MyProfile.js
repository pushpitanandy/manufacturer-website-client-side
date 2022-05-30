import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleUpdateProfile = event => {
        event.preventDefault();
        user.auth.displayName = event.target.name.value;
        const data = {
            name: user.auth.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        console.log(data);

        const url = `https://pacific-beyond-64387.herokuapp.com/user/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
        toast('Profile updated');
    }

    return (
        <div>
            <h2 classsName='text-4xl text-primary'>Update My Profile</h2>
            <p className='text-2xl'>Name: {user.displayName}</p>
            <p className='text-xl'>Email: {user.email}</p>
            <p>Please fill in the details:</p>
            <form onSubmit={handleUpdateProfile} className='grid grid-cols-1 gap-3 mb-5'>
                <input type="text" name='name' defaultvalue={user.displayName} className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='email' disabled value={user.email} className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='address' placeholder="Type your Address" className="input input-bordered w-full max-w-xs py-2" />
                <input type="text" name='phone' placeholder="Enter Phone Number" className="input input-bordered w-full max-w-xs py-2" />
                <input type="submit" value='Update Profile' className="btn btn-secondary w-full max-w-xs py-2" />
            </form>
        </div>
    );
};

export default MyProfile;