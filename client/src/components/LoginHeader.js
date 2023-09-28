import Lottie from 'lottie-react'
import LoginBg from '../utils/animations/LoginBg.json'

const LoginHeader = () => {
    return (
        <div className="">
            <div className="flex flex-col text-xl font-bold text-white items-center">
                <div className="flex items-center justify-center">
                    <Lottie
                        animationData={LoginBg}
                        style={{ width: 150, height: 150 }}
                    />
                </div>
                <div className="absolute top-32">ChatApp</div>
            </div>
        </div>
    )
}
export default LoginHeader
