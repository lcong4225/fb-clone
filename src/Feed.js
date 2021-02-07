import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
      /* .orderBy('timestamp', 'desc') */
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      )
  }, [])
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {/* <Post
        profilePic='https://www.incimages.com/uploaded_files/image/1920x1080/getty_543265518_200013352000928070_414162.jpg'
        message='Hello'
        timestamp='OMG'
        username='Bill Gate'
        image='https://images.wsj.net/im-105337?width=620&size=1.5'
      />
      <Post
        profilePic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102'
        message='Back to the work'
        timestamp='OMG'
        username='Elon Musk'
        image='https://miro.medium.com/max/2400/1*lR6oU5-XKHH_8I9S-hjOqg.png'
      /> */}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}

export default Feed
