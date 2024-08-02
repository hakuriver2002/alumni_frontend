import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../../hooks/useSignup';
import { useMutation } from '@tanstack/react-query';

const Signup = () => {
  	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const {mutate, isError, isPedding, error}  = useMutation({
		mutationFn: async({email, password, confirmPassword}) => {
			try {
				const res = await fetch
			} catch (error) {
				
			}
		}
	});

  	const {loading, signup} = useSignup();

  	const handleSubmit = async (e) => {
		// console.log(inputs);
		e.preventDefault();
		await signup(inputs);
	};

	return (
	<div className="bg-bg flex min-h-[100dvh] items-center justify-center p-4 h-screen">
		<div className='w-3/12 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-500'>
					Sign Up <span className='text-red-500'>Alumni</span>
				</h1>
		<form onSubmit={handleSubmit}>
			<div>
				<label className='label p-2'>
				<span className='text-base text-neutral-950'>Email</span>
				</label>
				<input
				type='text'
				placeholder='Your email'
				className='w-full input input-bordered  h-10'
				value={inputs.email}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
				/>
			</div>
			<div>
						<label className='label p-2'>
							<span className='text-base text-neutral-950'>Password</span>
						</label>
						<input
							type='password'
							placeholder='password'
							className='w-full input input-bordered  h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>
			<div>
						<label className='label'>
							<span className='text-base text-neutral-950'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>
			<Link
						to={"/login"}
						className='text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
					>
						Already have an account?
					</Link>
			{/* <div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>
							Signup
						</button>
					</div> */}
			<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
		</form>
			</div>
	</div>
	)
}

export default Signup
