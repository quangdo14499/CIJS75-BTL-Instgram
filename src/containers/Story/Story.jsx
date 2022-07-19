import React from 'react'

export const Story =(props) => {
  return (
    <div key={props.id} className='story'>
        <div className="avt_str circle center">
            <img src={props.avt} className='circle logo_user' alt="" />
        </div>
        <div className="str_user_name">{props.name}</div>
    </div>
  )
}
