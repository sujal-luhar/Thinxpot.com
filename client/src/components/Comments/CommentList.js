import React, { useEffect, useState } from 'react';
import api from "../../api/axios";


function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the specific post from your backend API
    // Example API request:
    // fetch(`/api/posts/${postId}/comments`)
    //   .then(response => response.json())
    //   .then(data => setComments(data));
  }, [postId]);

  return (
    // <div>
    //   <h3>Comments</h3>
    //   <ul>
    //     {comments.map((comment) => (
    //       <li key={comment._id}>{comment.text}</li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <div className='mb-6'>
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
          <p class="font-sans tracking-wide text-md subpixel-antialiased width-auto font-medium text-black flex-shrink">
            I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
          </p>
        </div>
      </div>
      <div className='mb-6'>
        <hr class="border-gray-600"></hr>
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
          <p class="font-sans tracking-wide text-md subpixel-antialiased width-auto font-medium text-black flex-shrink">
            I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
          </p>
        </div>
      </div>
      <div className='mb-6'>
        <hr class="border-gray-600"></hr>
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
          <p class="font-sans tracking-wide text-md subpixel-antialiased width-auto font-medium text-black flex-shrink">
            I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
          </p>
        </div>
      </div>
      <div className='mb-6'>
        <hr class="border-gray-600"></hr>
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
          <p class="font-sans tracking-wide text-md subpixel-antialiased width-auto font-medium text-black flex-shrink">
            I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
