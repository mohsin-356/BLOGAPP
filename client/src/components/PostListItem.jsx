import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
            {/* image */}

            <div className="md:hidden xl:block xl:w-1/3">
                <ShowImage src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
            </div>

            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to='/test' className="text-4xl font-semibold">
                    post title
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link className="text-blue-800" > post username</Link>
                    <span>on</span>
                    <Link className="text-blue-800">post category</Link>
                    <span>post created at</span>
                </div>
                <p>post description</p>
                <Link to='/test' className="underline text-blue-800 text-sm">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default PostListItem