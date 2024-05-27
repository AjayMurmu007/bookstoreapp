import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = async (data) => {
        const userInfo =  {
            email: data.email,
            password: data.password,
        }

        await axios.post("http://localhost:4000/user/login", userInfo)
        .then((res) => {
            console.log(res.data)
            if(res.data) {
                // alert("LogIn successfully..!")
                toast.success('LogIn Successfully !');
                document.getElementById("my_modal_3").close();

                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.user));

                },1000)
            }
        })
        .catch((error) => {
            // console.log(err)
            // alert("error:" +err)
            if(error.response){
                // console.log(err);
                toast.error("error:" + error.response.data.message);
                // alert("err:" + err.response.data.message);
                setTimeout(()=>{},2000);
            }
        });

        // console.log(data);
    };
        

    return (
        <div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box  dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
                    
                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email */}
                        <div className='mt-5 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 rounded-md outline-none' {...register("email", { required: true })}></input>
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-5 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type='text' placeholder='Enter your password' className='w-80 px-3 py-1 rounded-md outline-none' {...register("password", { required: true })}></input>
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Button */}
                        <div className='flex justify-between mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not Registered <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>

                </div>
            </dialog>
        </div>
    )
}

export default Login
