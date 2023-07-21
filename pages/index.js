import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

function Login() {
    const initialState = { userName: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { userName, password } = userData
    const { state = {}, dispatch } = useContext(DataContext)
    const { auth = {} } = state
    const router = useRouter()

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const res = await postData('auth/login', userData)

        if (res.error) {
            // If there is an error, do nothing and let the user try again
            return
        }

        dispatch({
            type: 'AUTH',
            payload: {
                token: res.access_token,
                user: res.user
            }
        })

        Cookie.set('refreshtoken', res.refresh_token, {
            path: '/api/auth/accessToken',
            expires: 7
        })

        localStorage.setItem('firstLogin', 'true')
    }

    useEffect(() => {
        if (Object.keys(auth).length !== 0) {

            router.push('/Home');
        }
    }, [auth, router]);

    return (
        <div className="h-screen w-screen absolute ">
            <video autoPlay muted className="absolute  object-cover   w-full h-full">  {/** Background Video */}
                <source src="/bg.mp4" type="video/mp4" />
                Update your system atleast!
            </video>
            <div className="absolute mt-[30%] md:mt-16 ml-[35%]">
                <img src='/Login.png' className='h-[40%] w-[70%] ' />
                <form
                    className=" rounded-2xl mt-[-70%] ml-4  p-4 "
                    onSubmit={handleSubmit}
                >
                    <div className="pt-4">
                        <label
                            className="block text-white font-bold pb-4 text-2xl"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className=" appearance-none rounded  text-2xl p-2 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            name="userName"
                            value={userName}
                            onChange={handleChangeInput}
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="py-4">
                        <label
                            className="block text-white text-2xl font-bold py-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none text-2xl rounded  py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChangeInput}
                            placeholder="Enter Password"
                        />
                    </div>
                    <div className="flex items-center justify-between  ml-auto mr-auto">
                        <button
                            className="bg-[#811029] hover:bg-[#ae1536] px-8 text-white font-bold py-2 rounded-full focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="px-8 text-white text-xs">
                    &copy;Garuda Intelligence Console - A3M NextGen Pvt.Ltd
                </p>
            </div>
        </div>
    )
}

export default Login
