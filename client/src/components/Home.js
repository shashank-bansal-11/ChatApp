import Header from './Header'
import ChatsContainer from './ChatsContainer'
import MessagesContainer from './MessagesContainer'

const Home = () => {
    return (
        <div className="flex">
            <div className="flex flex-col w-1/3 border-r border-gray-200">
                <Header />
                <hr />
                <ChatsContainer />
            </div>
            <div className="w-2/3">
                <MessagesContainer />
            </div>
        </div>
    )
}
export default Home
