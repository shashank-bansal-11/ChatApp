import { useState } from 'react'
import Chat from './Chat'

const ChatsContainer = () => {
    const [showScrollBar, setShowScrollBar] = useState(false)
    return (
        <div className="bg-gray-800 shadow-lg w-full p-2">
            <Searchbar />
            <div
                className={`mt-4 h-[calc(100vh-140px)] overflow-auto scrollbar:!w-1.5 scrollbar-track:!bg-inherit scrollbar-thumb:!rounded  ${
                    showScrollBar
                        ? 'scrollbar-thumb:!bg-slate-300'
                        : 'scrollbar-thumb:!bg-transparent'
                } `}
                onMouseEnter={() => setShowScrollBar(true)}
                onMouseLeave={() => setShowScrollBar(false)}
            >
                {
                    <>
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                    </>
                }
            </div>
        </div>
    )
}

const Searchbar = () => {
    return (
        <div>
            <input
                className="w-full py-2 px-3 border-2 bg-gray-600 text-white border-black rounded-lg"
                type="search"
                placeholder="Search Contacts"
            />
        </div>
    )
}
export default ChatsContainer
