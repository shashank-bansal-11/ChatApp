import { useState } from 'react'

const Message = () => {
    const [showScrollBar, setShowScrollBar] = useState(false)
    return (
        <div
            className={`flex flex-col-reverse h-full overflow-auto scrollbar:!w-1.5 scrollbar-track:!bg-inherit scrollbar-thumb:!rounded ${
                showScrollBar
                    ? ' scrollbar-thumb:!bg-slate-300'
                    : ' scrollbar-thumb:!bg-transparent'
            }`}
            onMouseEnter={() => setShowScrollBar(true)}
            onMouseLeave={() => setShowScrollBar(false)}
        >
            <div className="flex flex-col p-2">
                <div className="flex justify-end mb-4">
                    <div className="mr-2 py-2 px-2 bg-green-500 rounded-bl-3xl rounded-tl-3xl rounded-br-xl text-white max-w-md">
                        Welcome to group everyone !
                    </div>
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                </div>
                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div className="ml-2 py-2 px-2 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat at praesentium, aut ullam delectus odio error
                        sit rem. Architecto nulla doloribus laborum illo rem
                        enim dolor odio saepe, consequatur quas?
                    </div>
                </div>
                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div className="ml-2 py-2 px-2 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat at praesentium, aut ullam delectus odio error
                        sit rem. Architecto nulla doloribus laborum illo rem
                        enim dolor odio saepe, consequatur quas?
                    </div>
                </div>
                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div className="ml-2 py-2 px-2 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat at praesentium, aut ullam delectus odio error
                        sit rem. Architecto nulla doloribus laborum illo rem
                        enim dolor odio saepe, consequatur quas?
                    </div>
                </div>
                <div className="flex justify-end mb-4">
                    <div>
                        <div className="mr-2 py-2 px-2 bg-green-500 rounded-bl-3xl rounded-tl-3xl rounded-br-xl text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Magnam, repudiandae.
                        </div>

                        <div className="mt-4 mr-2 py-2 px-2 bg-green-500 rounded-bl-3xl rounded-tl-3xl rounded-br-xl text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Debitis, reiciendis!
                        </div>
                    </div>
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                </div>
                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div className="ml-2 py-2 px-2 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-bl-xl text-white">
                        happy holiday guys!
                    </div>
                </div>
                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div className="ml-2 py-2 px-2 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-bl-xl text-white">
                        happy holiday guys!
                    </div>
                </div>
                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div className="ml-2 py-2 px-2 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-bl-xl text-white">
                        happy holiday guys!
                    </div>
                </div>
                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div className="ml-2 py-2 px-2 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-bl-xl text-white">
                        happy holiday guys!
                    </div>
                </div>
                <div className="flex justify-start mb-4">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                    <div className="ml-2 py-2 px-2 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-bl-xl text-white">
                        happy holiday guys!
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Message
