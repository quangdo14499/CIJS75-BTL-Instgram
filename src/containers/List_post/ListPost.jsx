import React from 'react'
import { Post } from '../Post/Post'
import { useState } from 'react'

export const ListPost = () => {
  const posts = [
    { 
      id:1,
      avt:'/images/user_avt1.jpg',
      name: 'hoc sinh tinh tuong',
      img:'/images/user_img1.jpg',
      caption: 'Khi điện thoại không đủ dung lượng tải instagram #hstt' , 
    },
    {
      id:2,
      avt:'/images/user_avt2.jpg',
      name: 'wearvn',
      img:'/images/user_img2.jpg',
      caption: 'Flash sale off 50% kìa bà con ơi ' , 
    },
    {
      id:3,
      avt:'/images/user_avt3.jpg',
      name: 'muhamadalief19',
      img:'/images/user_img3.jpg',
      caption: 'Skill Futsal Tutorial' , 
    },
  ]


  return (
    <div className='listpost_container'>
      {posts.map((el) => {
          return Post(el);
        })}
    </div>
  )
}
