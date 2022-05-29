import React from 'react';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import useToken from '../../hooks/useToken';

const Register = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || guser);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    const onSubmit = async data => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        const name = data.name;
        createUserWithEmailAndPassword(email, password);
        const user = auth().currentUser;
        user.updateProfile({ displayName: name }).then(function () {
            // Update successful.}).catch(function(error) {  // An error happened.}); 
            console.log("Updated");
        }, function (error) {
            console.log("Error happened");
        });

    }

    let errorElement;
    if (error || gerror || updateError) {

        errorElement = <p className='text-red-700'>Error: {error?.message || gerror?.message || updateError?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });

    }

    if (loading || gloading || updating) {
        return <Loading></Loading>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Your Name'
                                class='input input-bordered w-full max-w-xs'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-700">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder='Your Email'
                                class='input input-bordered w-full max-w-xs'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-700">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-700">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder='Your Password'
                                class='input input-bordered w-full max-w-xs'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-700">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-700">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorElement}

                        <input className='btn w-full max-w-xs' type="submit" value='Register' />
                    </form>
                    <p>Already have BD Tools account? <Link to='/login' className='text-primary'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;