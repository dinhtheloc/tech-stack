import React from "react";
const CardArticle = () => {
    return (
        <article className='rounded-xl overflow-hidden'>
            <div style={{ height: 270 }}>
                <img className='object-cover h-full'
                    alt='link url'
                    src={'https://res.cloudinary.com/practicaldev/image/fetch/s--bGI7lHyT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ihh9bt0m353ry4174on6.png'}>
                </img>
            </div>

            <div className='bg-white p-4'>
                <div className='flex items-center'>
                    <img
                        alt='link url'
                        className='w-8 h-8 mr-2'
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--csFo8fP5--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/544828/101a9a36-3f92-4c6b-a8db-d716c8c21b3b.png"></img>
                    <div className='flex-1'>
                        <div className='text-sm font-semibold'>Shreyas Pahune</div>
                        <time className='text-sm text-gray-500'>Sep 24 (23 hours ago)</time>
                    </div>
                </div>
                <div className='pl-8 mt-4'>
                    <div className='text-3xl font-bold hover:text-yellow-500 cursor-pointer transition-colors'>
                        Make your own API under 30 lines of code
                    </div>

                    <div className='mt-4 text-sm text-gray-500'>
                        <span className='mr-2 hover:text-yellow-500 cursor-pointer transition-colors'>#hashtag</span>
                        <span className='mr-2 hover:text-yellow-500 cursor-pointer transition-colors'>#hashtag2</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CardArticle;