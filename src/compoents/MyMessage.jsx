const MyMessage = ({ message }) => {
    const removeTags = (message) => {
      return message.replace(/<.*?>/g, '');
    }

    if (message.attachments && message.attachments.length > 0) {
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
  
    return (
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }} >
        {removeTags(message.text)}
      </div>
    )
  };

  export default MyMessage;