import '../../styles/conversation.css';
import Chat from './chat/Chat';
import Search from './search/Search';

const Conversation = () => {
    const chatsArr = [
        {
        name:'Thomas',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
        {
            name: 'Laura',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        },
        {
            name: 'Jim',
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            name: 'Furry',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
  ]

    return(
        <div className='conversation-cont'>
            <div className='conv-cont-top'>
                <div className='img' />
                    <div>
                        <p className='font-18'>Lorem ipsum dolor sit amet, consectetur</p>
                        <p className='font-14'>Lorem ipsum</p>  
                        <p className='font-12'>Lorem ipsum dolor sit</p>  
                    </div>
                </div>
            <div className='padding-round'>
                <div className='conv-cont-bottom'>
                    <Search />
                    {chatsArr.map((chat, i) => (
                        <Chat key={i} chat={chat} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Conversation