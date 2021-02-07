import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from './firebase'

function MessageSender() {
  const [{ user }, dispatch] = useStateValue()
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    /* db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: 'Cong Le',
      image: imageUrl,
    }) */

    setInput('')
    setImageUrl('')
  }
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form action=''>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='messageSender__input'
            placeholder={`Cong Leさん、その気持ち、シャアしよう`}
          />
          {/* <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='写真のURL'
          /> */}
          <button onClick={handleSubmit} type='submit'>
            Hidden submit
          </button>
        </form>
      </div>

      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>ライブ動画</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>写真・動画</h3>
        </div>
        <div className='messageSender__option'>
          <SentimentVerySatisfiedIcon style={{ color: 'yellow' }} />
          <h3>気分・アクティビティ</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
