import React, { useEffect, useState } from 'react';
import PostDescription from './PostDescription';
import LikeButton from '../Likes/LikeButton';
import CommentForm from '../Comments/CommentForm';
import { Link } from 'react-router-dom';
import { formatDistanceToNow, format } from 'date-fns';
import { enIN } from 'date-fns/locale'; // You can use a different locale if needed


function PostSingle({ postId }) {
    const [post, setPost] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const toggleForm = (e) => {
        e.preventDefault();
        setShowForm(!showForm);
    };

    useEffect(() => {
        //   Fetch the specific post by postId from your backend API
        //   Example API request:
        fetch(`/api/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data));
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    function formatCreatedAt(createdAt) {
        const currentDate = new Date();
        const createdAtDate = new Date(createdAt);
      
        // Check if the post was created within the last 24 hours
        if (currentDate - createdAtDate < 24 * 60 * 60 * 1000) {
          return formatDistanceToNow(createdAtDate, { addSuffix: true, locale: enIN });
        } else {
          return format(createdAtDate, 'd MMMM', { locale: enIN });
        }
      }
    
      const postCreatedAt = formatCreatedAt(post.createdAt); // Assuming 'post' is your data object
      
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
                                    @SujalLuhar . {postCreatedAt}
                                    {/* @SujalLuhar . 27 December */}
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="pl-16">
                {/* <p class="font-sans tracking-wide text-lg subpixel-antialiased width-auto font-medium text-black flex-shrink">
                    I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
                </p> */}
                <Link to={`/postdetail/${postId}`}>
                    <p class="font-sans tracking-wide text-lg subpixel-antialiased width-auto font-medium text-black flex-shrink">
                        {post.title}
                    </p>
                </Link>

                <div className="flex align-middle">
                    <span className=' text-gray-600 text-4xl'>&middot;</span>
                    {/* <span className="text-sm text leading-5 mt-3 font-medium text-gray-600 group-hover:text-gray-500 transition ease-in-out duration-150">
                        Complex Variables (math.CV)
                    </span> */}
                    <span className="text-sm text leading-5 mt-3 font-medium text-gray-600 group-hover:text-gray-500 transition ease-in-out duration-150">
                        {post.subject}
                    </span>
                </div>

                    {/* <PostDescription description="I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others." /> */}
                    <PostDescription description={post.content} />

                <div class="flex">
                    <div>

                        <div class="flex items-center">
                            <div class="flex-1 text-center">
                                <a href="#" onClick={toggleForm} class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-[5px] hover:bg-gray-100 hover:text-gray-600">
                                    <svg class="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke={showForm ? '#337CCF' : 'currentColor'} viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                </a>
                            </div>

                            <LikeButton />

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-[5px] hover:bg-gray-100 hover:text-gray-600">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            {showForm &&
                <>
                    <hr className="border-gray-600"></hr>
                    <CommentForm />
                </>}
            <br />
            <hr class="border-gray-600"></hr>
        </div>
    );
}

export default PostSingle;
