import React from 'react'
import { Post } from '../Post/Post'
import { gql, useQuery } from '@apollo/client';

// import { useState } from 'react

const GET_LIST_POST = gql`
query GetListPost($pagination: PaginationInput, $condition: GetListPostCondition) {
  getListPost(pagination: $pagination, condition: $condition) {
    data {
      id
      identityNumber
      title
      content
      author {
        id
        name
        avatar {
          id
          filename
          mimetype
          fileCategory
        }
      }
      medias {
        id
        filename
        mimetype
        fileCategory
      }
    }
  }
}
`;

export const ListPost = () => {
  const { data } = useQuery(GET_LIST_POST, {
    variables: { 
      pagination : {},
      condition: {},
     },
  });

  console.log(data)
  // const [] = useState([])

  return (
    <div className='listpost_container'>
      {data.getListPost.data.map((el) => {
          return Post(el);
        })}
    </div>
  )
}
