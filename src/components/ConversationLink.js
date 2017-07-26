import React from 'react';

const ConversationLink = (props)=> {
    return (
      <div className="conversationLink">
        <a href={props.link.href}>
          <p>Conversation</p>
        </a>
      </div>
    );
}

export default ConversationLink;
