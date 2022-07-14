import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { Navigation } from '../containers/Navigation/Navigation'
import { StrBar } from '../containers/Story_bar/StrBar'
import { ListPost } from '../containers/List_post/ListPost'
import { Account } from '../containers/Account/Account'
import { FriendsList } from '../containers/List_friends/FriendsList'

export const Home = () => {
  return (
  <>
    < Navigation />
    <div className='home_container'>
    <div className="main">
        < StrBar />
        < ListPost />
    </div>

    <div className="sub">
        < Account />
        < FriendsList />
    </div>
  </div>
  </>
  
  )
}
