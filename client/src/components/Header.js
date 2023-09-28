import Lottie from 'lottie-react'

import { RxAvatar } from 'react-icons/rx'
import { AiOutlineLogout } from 'react-icons/ai'

import LoginBg from '../utils/animations/LoginBg.json'

const Header = () => {
    return (
        <div className="flex p-1.5 justify-between items-center">
            <div className="flex text-xl font-bold items-center text-white">
                <div className="flex items-center justify-center">
                    <Lottie
                        animationData={LoginBg}
                        style={{ width: 50, height: 50 }}
                    />
                </div>
                <div>ChatApp</div>
            </div>
            <div className="flex items-center">
                <RxAvatar className="h-8 w-8 object-cover rounded-lg mr-2 text-white" />
                <AiOutlineLogout className="h-6 w-6 object-cover rounded-lg mr-1 text-white" />
            </div>
        </div>
    )
}
export default Header
