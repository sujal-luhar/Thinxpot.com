import React, { useEffect, useState, useRef } from 'react';
import CommentForm from '../Comments/CommentForm';
import CommentList from '../Comments/CommentList';
import LikeButton from '../Likes/LikeButton';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { formatDistanceToNow, format } from 'date-fns';
import { enIN } from 'date-fns/locale'; // You can use a different locale if needed
import api from "../../api/axios";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const targetBlockRef = useRef(null);

  useEffect(() => {
    api
      .get(`/api/posts/${postId}`)
      .then((response) => {
        if (response && response.data && response.data.data) {
          setPost(response.data.data);
        } else {
          console.error("Invalid or empty response data");
        }
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        // You can also set an error state here to display to the user.
      });
  }, [postId]);
  
  if (!post) {
    return <div>Loading...</div>;
  }

  const scrollToCenter = () => {
    if (targetBlockRef.current) {
      const windowHeight = window.innerHeight;
      const blockTop = targetBlockRef.current.offsetTop;
      const scrollPosition = blockTop - (windowHeight / 2);

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollClick = () => {
    // After scrolling up, scroll down by 6rem
    setTimeout(() => {
      window.scrollTo({
        top: 0,  // Scroll to top of the document
        behavior: 'smooth', // Smooth scrolling animation
      });
    }, 1000); // Adjust the delay as needed
  };

  const toggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  function formatCreatedAt(createdAt) {
    const currentDate = new Date();
    const createdAtDate = new Date(createdAt);

    // Check if the post was created within the last 24 hours
    if (currentDate - createdAtDate < 24 * 60 * 60 * 1000) {
      return formatDistanceToNow(createdAtDate, {
        addSuffix: true,
        locale: enIN,
      });
    } else {
      return format(createdAtDate, "d MMMM", { locale: enIN });
    }
  }

  const postCreatedAt = post ? formatCreatedAt(post.createdAt) : ""; // Check if 'post' is not null

  if (!post) {
    return null; // Return null if 'post' is still null
  }

  return (
    <div className='pl-64 pr-64'>
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group ">
          <div className="flex items-center">
            <div>
              <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1396348683424124928/kzyZonlB_400x400.jpg" alt="" />
            </div>
            <div className="ml-4 float-left">
              <p className="text-base leading-6 font-medium text-black">
              {post.authorFName} {post.authorLName}
                <span className="text-sm ml-2 leading-5 font-medium text-gray-600 group-hover:text-gray-500 transition ease-in-out duration-150">
                @{post.authorName} . {postCreatedAt}
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="font-sans tracking-wide text-lg subpixel-antialiased width-auto font-medium text-black flex-shrink">
          {post.title}
        </p>
        {/* <p className="font-sans tracking-wide text-lg subpixel-antialiased width-auto font-medium text-black flex-shrink">
          I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
        </p> */}
        <div className="flex align-middle">
          <span className=' text-gray-600 text-4xl'>&middot;</span>
          <span className="text-sm text leading-5 mt-3 font-medium text-gray-600 group-hover:text-gray-500 transition ease-in-out duration-150">
            {post.subject}
          </span>
          {/* <span className="text-sm text leading-5 mt-3 font-medium text-gray-600 group-hover:text-gray-500 transition ease-in-out duration-150">
            Complex Variables (math.CV)
          </span> */}
        </div>
        <p className="font-sans mt-6 tracking-wide text-md subpixel-antialiased width-auto font-extralight text-[#20354b] flex-shrink">
          {post.content}
        </p>
        {/* <p className="font-sans mt-6 tracking-wide text-md subpixel-antialiased width-auto font-extralight text-[#20354b] flex-shrink">
          I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
          I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
          I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
          I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
          I am very excited build this plateform for educational purpose. Here you can share your knowledge and experience with others. People in academics area can share their research and knowledge with others.
        </p> */}
        <br />

        <div>
          <iframe
            src={post.pdfLink}
            title="PDF Viewer"
            width="100%"
            height="500px"
          ></iframe>
        </div>
        {/* <div>
          <iframe
            src={"https://arxiv.org/pdf/2309.01846.pdf"}
            title="PDF Viewer"
            width="100%"
            height="500px"
          ></iframe>
        </div> */}
        <div class="flex">
          <div>

            <div class="flex items-center" >
              <div class="flex-1 text-center" onClick={scrollToCenter}>
                <a href="#" onClick={toggleForm} class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-[5px] hover:bg-gray-100 hover:text-gray-600">
                  <svg class="text-center h-6 w-6" fill='none' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke={showForm ? '#337CCF' : 'currentColor'} viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                </a>
              </div>

              <LikeButton postId={postId}/>

              <div class="flex-1 text-center py-2 m-2">
                <a href="#" class="w-12 mt-1 group flex items-center text-gray-700 px-3 py-2 text-base leading-6 font-medium rounded-[5px] hover:bg-gray-100 hover:text-gray-600">
                  <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                </a>
              </div>
            </div>
          </div>


        </div>

      </div>
      <div ref={targetBlockRef}>
        {showForm &&
          <>
            <hr className="border-gray-600"></hr>
            <CommentForm />
          </>}
      </div>
      <br />
      <hr className="border-gray-600"></hr>
      <CommentList />
    </div>
  );
}

export default PostDetail;
