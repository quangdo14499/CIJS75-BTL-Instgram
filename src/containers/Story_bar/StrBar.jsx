import React from 'react'
import { Story } from '../Story/Story'

export const StrBar = () => {
  const stories = [
    { 
      id:1,
      avt:'/images/user_avt1.jpg',
      name: 'hoc sinh tinh tuong',
    },
    {
      id:2,
      avt:'/images/user_avt2.jpg',
      name: 'wearvn',
    },
    {
      id:3,
      avt:'/images/user_avt3.jpg',
      name: 'muhamadalief19', 
    },
  ]
  return (
    <div className='str_container'>
      <div className='first-str'></div>
        {stories.map((el) => {
          return Story(el);
        })}
    </div>
  )
}
