import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'

function Post({ profilePic, image, username, timestamp, message }) {
  const [like, setLike] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setToggle(!toggle)
    {
      toggle ? setLike('blue') : setLike('gray')
    }
    console.log(toggle)
  }
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar' />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className='post__bottom'>
        <p>{message}</p>
      </div>

      <div className='post__image'>
        <img src={image} alt='' />
      </div>

      <div className='post__options'>
        <div
          className='post__option'
          style={{ color: like }}
          onClick={handleClick}
        >
          <ThumbUpIcon />
          <p>いいね！</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>コメントする</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>シャア</p>
        </div>
      </div>
    </div>
  )
}

export default Post
