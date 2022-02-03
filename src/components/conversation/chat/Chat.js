import '../../../styles/chat.css';

const Chat = ({chat}) => {
    return(
        <div className='chat-container'>
            <div className='user-img' />
            <div className='top-gap'>
                <p className='font-18'>{chat.name}</p>
                <p className='font-12'>{chat.text}</p>
            </div>
        </div>
    )
}

export default Chat;