import React, { useEffect, useState } from 'react';

function PostSingle({ postId }) {
    // const [post, setPost] = useState(null);

    // useEffect(() => {
    //   // Fetch the specific post by postId from your backend API
    //   // Example API request:
    //   // fetch(`/api/posts/${postId}`)
    //   //   .then(response => response.json())
    //   //   .then(data => setPost(data));
    // }, [postId]);

    // if (!post) {
    //   return <div>Loading...</div>;
    // }

    return (
        <div className='pl-64 pr-64'>
            <div class="flex flex-shrink-0 p-4 pb-0">
                <a href="#" class="flex-shrink-0 group ">
                    <div class="flex items-center">
                        <div>
                            <img class="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1396348683424124928/kzyZonlB_400x400.jpg" alt="" />
                        </div>
                        <div class="ml-4 float-left">
                            <p class="text-base leading-6 font-medium text-black">
                                Sujal Luhar
                                <span class="text-sm ml-2 leading-5 font-medium text-gray-600 group-hover:text-gray-500 transition ease-in-out duration-150">
                                    @SujalLuhar . 27 December
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="pl-16">
                <p class="font-sans tracking-wide text-lg subpixel-antialiased width-auto font-medium text-black flex-shrink">
                    I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
                </p>
                <div className="flex align-middle">
                    <span className=' text-gray-600 text-4xl'>&middot;</span>
                    <span className="text-sm text leading-5 mt-3 font-medium text-gray-600 group-hover:text-gray-500 transition ease-in-out duration-150">
                        Complex Variables (math.CV)
                    </span>
                </div>

                <div class="flex">
                    <div class="w-full">

                        <div class="flex items-center">
                            <div class="flex-1 text-center">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 hover:text-gray-300">
                                    <svg class="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                </a>
                            </div>

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 hover:text-gray-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </a>
                            </div>

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 hover:text-gray-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                </a>
                            </div>
                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 hover:text-gray-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <hr class="border-gray-600"></hr>
        </div>
    );
}

export default PostSingle;
