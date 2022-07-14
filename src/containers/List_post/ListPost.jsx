import React from 'react'
import { Post } from '../Post/Post'

export const ListPost = () => {
  const posts = [
    { 
      avt:'/images/user_avt1.jpg',
      name: 'hoc sinh tinh tuong',
      img:'/images/user_img1.jpg',
      caption: 'Khi điện thoại không đủ dung lượng tải instagram #hstt' , 
    },
    {
      avt:'/images/user_avt2.jpg',
      name: 'wearvn',
      img:'/images/user_img2.jpg',
      caption: 'Flash sale off 50% kìa bà con ơi ' , 
    },
    {
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
