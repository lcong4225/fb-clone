import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { Avatar } from '@material-ui/core'
import EmojiFlagsSharpIcon from '@material-ui/icons/EmojiFlagsSharp'
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp'
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp'
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded'
import EventIcon from '@material-ui/icons/Event'
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp'
import HistoryIcon from '@material-ui/icons/History'
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import FlagIcon from '@material-ui/icons/Flag'
import { useStateValue } from './StateProvider'

function Sidebar() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title='Cong Le' />
      <SidebarRow
        Icon={LocalHospitalSharpIcon}
        title='新型コロウイルス感染症情報センター'
      />
      <SidebarRow Icon={PeopleSharpIcon} title='友達' />
      <SidebarRow Icon={GroupWorkRoundedIcon} title='グループ' />
      <SidebarRow Icon={VideoLibrarySharpIcon} title='動画' />
      <SidebarRow Icon={EventIcon} title='イベント' />
      <SidebarRow Icon={HistoryIcon} title='思い出' />

      <SidebarRow Icon={BookmarkIcon} title='保存済み' />
      <SidebarRow Icon={FlagIcon} title='ページ' />
      <SidebarRow Icon={ExpandMoreSharpIcon} title='もっと見る' />
    </div>
  )
}

export default Sidebar
