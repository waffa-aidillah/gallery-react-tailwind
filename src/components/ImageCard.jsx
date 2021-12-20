import React from "react";

function ImageCard({image}){
    const tags = image.tags.split(",")
    return(
        <div className='max-w-sm rounded-xl overflow-hidden shadow-lg h-fit bg-gray-100'>
            <img src={image.webformatURL} alt="" className='w-full'/>
            <div className='py-4 px-4 flex flex-col'>
                <p className='font-bold text-purple-500 text-xl mb-2'>Photo by {image.user}</p>
                <strong>Downloads: {image.downloads}</strong>
                <strong>Likes: {image.likes}</strong>
                <div className="flex gap-x-1 py-3">
                {tags.map((tag,index)=>{
                    return <p key={index} className='rounded-lg bg-slate-200 px-4 py-2 text-xs'>{tag}</p>
                })}
                </div>
            </div>
        </div>
    )
}

export default ImageCard