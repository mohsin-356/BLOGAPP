import React from 'react'
import ShowImage from './ShowImage'

const Comment = () => {
  return (
     <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {/* IMAGE COMPONENT */}
        {/* {comment.user.img && (
          <ShowImage
            src={comment.user.img}
            className="w-10 h-10 rounded-full object-cover"
            w="40"
          />
        )} */}
          <ShowImage
            src="userImg.jpeg"
            className="w-10 h-10 rounded-full object-cover"
            w="40"
          />
        <span className="font-medium">
            {/* {comment.user.username} */}
            {/* data username */}
            John doe
            </span>
        <span className="text-sm text-gray-500">
          {/* {format(comment.createdAt)} */}
            {new Date().toLocaleDateString()} 
        </span>
        {/* {user &&
          (comment.user.username === user.username || role === "admin") && (
            <span
              className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
              onClick={() => mutation.mutate()}
            >
              delete
              {mutation.isPending && <span>(in progress)</span>}
            </span>
          )} */}
      </div>
      <div className="mt-4">
        {/* comment description */}
        {/* <p>{comment.desc}</p> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo dolor fuga ea nam maiores aperiam blanditiis beatae deserunt nisi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptas possimus illum! Iste veniam quae officiis neque at? Eligendi, accusantium!</p>
      </div>
    </div>
  )
}

export default Comment