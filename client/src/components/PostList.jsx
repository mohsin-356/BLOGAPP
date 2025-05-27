import React from 'react'
import PostListItem from './PostListItem'

const PostList = () => {
  return (
    <div className='flex flex-col gap-12 mt-8'>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>

      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
      
      <PostListItem/>
    </div>
  )
}

export default PostList