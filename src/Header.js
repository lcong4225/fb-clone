import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'

import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import StoreMallDirectorySharpIcon from '@material-ui/icons/StoreMallDirectorySharp'
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp'
import { Avatar, IconButton } from '@material-ui/core'
import AddSharpIcon from '@material-ui/icons/AddSharp'
import ForumSharpIcon from '@material-ui/icons/ForumSharp'
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStateValue } from './StateProvider'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'
          alt=''
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='検索' />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option--active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StoreMallDirectorySharpIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleSharpIcon fontSize='large' />
        </div>
        <div className='header__option__menu'>
          <MenuIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL} />
          <h4>Cong Le</h4>
        </div>

        <IconButton>
          <AddSharpIcon />
        </IconButton>
        <IconButton>
          <ForumSharpIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveSharpIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
