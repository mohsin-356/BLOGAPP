import React from 'react';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';
const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* First */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* image */}     
                    <ShowImage src='featured1.jpeg' className='rounded-3xl object-cover' width='895' />
                {/* details  */}
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link className="text-blue-800 lg:text-lg">Web-design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                {/* title */}
                <Link className="text-xl lg:text-3xl font-semibold lg:font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit</Link>
            </div>
            {/* others */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* second */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className='w-1/3 aspect aspect-video'>
                        <ShowImage src='featured2.jpeg' className='rounded-3xl object-cover w-full h-full' width='298' />
                    </div>
                    {/* details and title */}
                    <div className='w-2/3'>
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="text-blue-800">web-design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        <Link to='/test' className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>
                {/* third */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className='w-1/3 aspect aspect-video'>
                        <ShowImage src='featured3.jpeg' className='rounded-3xl object-cover w-full h-full' width='298' />
                    </div>
                    {/* details and title */}
                    <div className='w-2/3'>
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">03.</h1>
                            <Link className="text-blue-800">digital marketing</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        <Link to='/test' className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>
                {/* forth */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className='w-1/3 aspect aspect-video'>
                        <ShowImage src='featured4.jpeg' className='rounded-3xl object-cover w-full h-full' width='298' />
                    </div>
                    {/* details and title */}
                    <div className='w-2/3'>
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="text-blue-800">web-design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        <Link to='/test' className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FeaturedPosts;