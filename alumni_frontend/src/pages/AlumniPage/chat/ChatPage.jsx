import React from 'react'
import SidebarChat from "../../../components/alumniComponents/sidebarChat/SidebarChat"
import MessageContainer from "../../../components/alumniComponents/messages/MessageContainer"

const ChatPage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[700px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <SidebarChat />
        <MessageContainer />
    </div>
  )
}

export default ChatPage
