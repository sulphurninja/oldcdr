import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import PopUpModal from '../components/PopUpModal'

function Register() {
    const initialState = { userName: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { userName, password } = userData
    const { state, dispatch } = useContext(DataContext)
    const { auth = {} } = state
    const [showModalRegister, setShowModalRegister] = useState(false);
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const res = await postData('/auth/register', userData)
        setShowModalRegister(true)
        console.log(res)
    }

    return (
        <body>
        <Link href='/admin'>
        <h1 className='font-bold text-xl cursor-pointer mt-4'>🔙 <span className='hover:underline'>Back To Admin Panel</span></h1>
        </Link>
            <div className="w-full max-w-xs ml-auto mr-auto items-center mt-[100px]">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='userName' value={userName} onChange={handleChangeInput} type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name='password' value={password} onChange={handleChangeInput} placeholder="Create Password" />

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-white  text-xs">
                    &copy;Dus Ka Dum - Deltin Royale
                </p>
            </div>
            <PopUpModal isOpen={showModalRegister} onClose={() => setShowModalRegister(false)} />
        </body>
    )
}

export default Register



