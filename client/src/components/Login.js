import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import LoginHeader from './LoginHeader'

const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    const toggleButton = () => {
        setIsRegistered(!isRegistered)
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChange = (key, value) => {
        setFormValues({
            ...formValues,
            [key]: value,
        })
    }

    return (
        <div
            className="h-full"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://shorturl.at/efitT')",
            }}
        >
            <LoginHeader />
            <div className="mt-10 p-10 flex flex-col items-center shadow-xl rounded-lg w-fit mx-auto bg-white/60">
                <div className="font-semibold text-gray-900 text-lg mb-4">
                    {isRegistered ? 'Login to ChatApp' : 'Create a New Account'}
                </div>
                {!isRegistered && (
                    <input
                        className="w-96 rounded-lg p-2 mt-4 border-2 border-gray-900 bg-black/60 text-white placeholder-white/60"
                        type="text"
                        placeholder="Name"
                        value={formValues.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                )}
                <input
                    className="w-96 rounded-lg p-2 mt-4 border-2 border-gray-900 bg-black/60 text-white placeholder-white/60"
                    type="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                <div className="relative">
                    <input
                        className="w-96 rounded-lg p-2 mt-4 border-2 border-gray-900 bg-black/60 text-white placeholder-white/60"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={formValues.password}
                        onChange={(e) =>
                            handleChange('password', e.target.value)
                        }
                    />
                    {formValues.password && (
                        <span
                            className="absolute cursor-pointer text-lg mr-2 top-[1.8rem] right-0"
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? (
                                <AiFillEye />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </span>
                    )}
                </div>

                <button className="uppercase w-96 p-2 mt-6 font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:bg-gray-800">
                    {isRegistered ? 'Login' : 'Register'}
                </button>
                <div className="mt-2">
                    {isRegistered ? 'Not Registered? ' : 'Already Registered? '}
                    <button
                        className="font-semibold px-2"
                        onClick={toggleButton}
                    >
                        {isRegistered ? 'Sign Up' : 'Sign In'}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Login
