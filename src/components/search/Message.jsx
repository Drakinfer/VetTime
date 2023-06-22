import '../../assets/css/components/Message.css'

const Message= (props) => {
    return (
        <>
            <p className="message">{props.message}</p>
        </>
    )
    ;
  };
  
  export default Message;