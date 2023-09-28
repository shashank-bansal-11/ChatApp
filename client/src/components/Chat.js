import { RxAvatar } from 'react-icons/rx'

const Chat = () => {
    return (
        <div className="flex text-white items-center w-full divide-y-reverse divide-y-2 divide-white/30">
            {/* <img
                alt="profile"
                src=""
                className="h-32 w-32 object-cover rounded-lg"
            /> */}
            <RxAvatar className="h-8 w-8 object-cover rounded-lg mr-2" />
            <div className="flex flex-col w-full mb-2 p-2">
                <div className="flex justify-between items-center">
                    <p className="font-semibold">Name</p>
                    <span className="text-xs">10:06 Pm</span>
                </div>

                <p className="text-sm">Message</p>
            </div>
        </div>
    )
}
export default Chat
