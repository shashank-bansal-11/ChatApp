import { BsEmojiLaughing } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'

import Message from './Message'

const MessagesContainer = () => {
    return (
        <div className="relative h-full">
            <MessagesHeader />
            <div
                className="h-[calc(100vh-125px)] justify-end"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://shorturl.at/efitT')",
                }}
            >
                <Message />
            </div>
            <div className="flex items-center pt-3 border-t border-white">
                <div className="text-white mx-2 cursor-pointer">
                    <ImAttachment size={24} />
                </div>
                <div className="text-white cursor-pointer">
                    <BsEmojiLaughing size={24} />
                </div>
                <input
                    className="w-full py-2 px-3 mx-2 rounded-l-full rounded-r-full"
                    placeholder="Enter Message"
                />
            </div>
        </div>
    )
}

const MessagesHeader = () => {
    return (
        <div className="flex w-full py-[0.62rem] px-3 text-white border-b border-white">
            {/* Image */}
            <div className="flex flex-col">
                {/* Name */}
                <p className="font-semibold">Name</p>
                {/* Online Status */}
                <p className="text-sm">Online Status</p>
            </div>
        </div>
    )
}
export default MessagesContainer
