import React from 'react'
import avatarImg from "../assets/img/Sachuk O.jpg"

const Avatar = () =>
  <div
    style={{
      float: 'left',
      marginRight: '20px',
      height: '50px',
      width: '50px',
    }}
  >
    <img
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '50%',
      }}
      src={avatarImg}
    />
  </div>

export default Avatar
