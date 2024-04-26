import { Helmet } from "react-helmet-async";
import { IoEyeOffSharp, IoEyeSharp, IoWarningOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { AuthContext } from "../../../provider/AuthProv";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'

const schema = z.object({
    userName: z.string(),
    photoURL: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
    terms: z.boolean(),
});

const SignUp = () => {

    const { handleCreateUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = async (data) => {
        setError('');
        await new Promise(resolve => setTimeout(() => resolve(), 1000));
        const name = data.userName;
        const url = data.photoURL;
        const email = data.email;
        const password = data.password;
        const terms = data.terms;
        let URL = '';

        console.log('url: ', url)
        console.log('url tpe: ', typeof (url))

        if (url === '')
            URL = 'https://i.ibb.co/DDccd18/cowboy-6543190.png'
        else
            URL = url

        if (!terms) {
            setError('Accept the terms and conditions')
            return;
        }

        console.log('url: ', URL)
        handleCreateUser(email, password)
            .then(res => {
                updateProfile(res.user, { displayName: name, photoURL: URL })
                    .then(handleAlert())
                    .catch(err => setError(err.message))
            })
            .catch((error) => {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).')
                    setError('Email is already in use!')
            });
    };

    const showSweetAlert = () => {
        return Swal.fire({
            text: 'Registration successful',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    const handleAlert = async () => {
        await showSweetAlert();
        navigate('/sign-in');
    };

    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="flex justify-center mt-10 ">
                <div className="w-[420px] border p-2 md:p-5 mb-8 shadow-lg rounded-lg bg-form_bg bg-center bg-contain bg-no-repeat font-nunito">
                    <div className="mb-5">
                        <h2 className="text-2xl text-center mb-4 font-mono font-bold">Sign up</h2>
                        <form className="flex flex-col gap-5 font-mono" onSubmit={handleSubmit(onSubmit)} >
                            {/* user name */}
                            <div className="flex flex-col gap-2">
                                <label className="md:text-lg lg:text-xl">Full Name</label>
                                <input {...register('userName')} type="text" className="md:text-lg lg:text-xl p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" placeholder="Full name" />
                            </div>
                            {errors.userName && (<p className="text-red-500">{errors.userName.message}</p>)}

                            {/* photo url */}
                            <div className="flex flex-col gap-2">
                                <label className="md:text-lg lg:text-xl">Photo URL</label>
                                <input {...register('photoURL')} type="url" className="md:text-lg lg:text-xl p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" placeholder="Photo URL" />
                            </div>
                            {errors.photoURL && (<p className="text-red-500">{errors.photoURL.message}</p>)}

                            {/* email */}
                            <div className="flex flex-col gap-2">
                                <label className="md:text-lg lg:text-xl">Email</label>
                                <input {...register('email')} type="email" className=" md:text-lg lg:text-xl p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" placeholder="Email" />
                            </div>
                            {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

                            {/* password */}
                            <div className="flex flex-col gap-2">
                                <label className="md:text-lg lg:text-xl">Password</label>
                                <div className="flex items-center bg-white">
                                    <input {...register('password')} type={showPassword ? "text" : "password"} className="md:text-lg lg:text-xl p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" placeholder="Password" />
                                    <span className="text-xl pr-1">{showPassword ? <IoEyeOffSharp onClick={() => setShowPassword(!showPassword)} /> : <IoEyeSharp onClick={() => setShowPassword(!showPassword)} />}</span>
                                </div>
                                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}

                            </div>

                            {
                                error && (<div className="flex justify-center items-center gap-1 text-red-500"><IoWarningOutline /><p className="text-lg">{error}</p></div>)
                            }
                            <label className="flex justify-center items-center gap-2">
                                <input {...register('terms')} type="checkbox" />
                                Accept our terms and conditions.
                            </label>
                            {errors.conditions && (<p className="text-red-500">{errors.conditions.message}</p>)}
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="submit" className="grow md:text-lg lg:text-xl font-semibold hover:cursor-pointer" value={isSubmitting ? "Loading..." : "Submit"} />
                            </label>
                        </form>
                        <p className="text-lg text-center font-mono my-3">Already have an account. <Link className=" text-blue-500 underline" to={"/sign-in"}>Sign in</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;