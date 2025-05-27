import React from 'react'
import { Image } from '@imagekit/react';
const ShowImage = ({ src, className, width, height, alt }) => {
    const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
    return (
        <Image
            urlEndpoint={urlEndpoint}
            src={src}
            className={className}
            loading="lazy"
            iqip={{ active: true, quality: 20 }}
            alt={alt}
            width={width}
            height={height}
            transformation={
                [
                    {
                        height: height,
                        width: width
                    }
                ]
            }
        />
    )
}

export default ShowImage;