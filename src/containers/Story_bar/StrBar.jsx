import React from 'react'
import { Story } from '../Story/Story'

export const StrBar = () => {
  const stories = [
    { 
      avt:'/images/user_avt1.jpg',
      name: 'hoc sinh tinh tuong',
    },
    {
      avt:'/images/user_avt2.jpg',
      name: 'wearvn',
    },
    {
      avt:'/images/user_avt3.jpg',
      name: 'muhamadalief19', 
    },
  ]
  return (
    <div className='str_container'>
        {stories.map((el) => {
          return Story(el);
        })}
    </div>
  )
}
