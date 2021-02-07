import { Avatar } from '@material-ui/core'
import React from 'react'
import './FriendLists.css'

function FriendLists({ profileSrc, title }) {
  return (
    <div className='friendList'>
      <div>
        <Avatar src={profileSrc} />
        <div className='circle__dot'></div>
      </div>
      <p>{title}</p>
    </div>
  )
}

export default FriendLists
