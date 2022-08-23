import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'

const  Card = ({ post }) => {
  return (
    <div className=' '>
      <div>
        <img src={post?.userImg} alt="" />
        <span>{post?.fullname}</span>
      </div>
      <img src={post?.postImg} alt="" />
      <div className='flex '>
        <AiOutlineHeart />
        <BiComment />

      </div>
    </div>
  )
}

export default Card