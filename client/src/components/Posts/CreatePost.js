// import React, { useState } from 'react';
// import {
//   Card,
//   Input,
//   Textarea,
//   Typography,
//   Button
// } from "@material-tailwind/react";
// import axios from 'axios';

// function CreatePost() {
//   const [title, setTitle] = useState('');
//   const [subject, setSubject] = useState('');
//   const [content, setContent] = useState('');
//   const [pdfLink, setPdf] = useState('');
//   const [author, setAuthor] = useState('');
//   const [isCreating, setIsCreating] = useState(false);

//   setAuthor('sujal@gmail.com')

//   const handleCreate = () => {
//     // Disable the button while the request is in progress
//     setIsCreating(true);

//     // Add logic to send the new post data to your backend using Axios
//     axios.post('/api/posts/create', { title, subject, content, pdfLink, author })
//       .then(response => {
//         // Handle successful creation, e.g., redirect to the new post's page
//         console.log('Post created successfully', response.data);
//         // You can add redirection logic here if needed

//         // Reset the form and enable the button
//         setTitle('');
//         setSubject('');
//         setContent('');
//         setPdf('');
//         setAuthor('');
//         setIsCreating(false);
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error creating post', error);
//         setIsCreating(false); // Enable the button in case of an error
//       });
//   };

//   return (
//     <center>
//         <form className="mt-28 mb-4 w-screen max-w-screen-lg sm:w-96">
//           <div className="mb-4 flex w-full flex-col gap-6">
//             <div class="shrink-0 mt-5 flex justify-center">
//               <img class="h-20 w-20 object-cover rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Current profile photo" />
//             </div>

//             <Input size="lg" label="Give your paper a title" onChange={(e) => setTitle(e.target.value)} />
//             <Input size="lg" label="To which subject your paper is about" onChange={(e) => setSubject(e.target.value)} />
//             <Textarea className='h-64' size="lg" label="Write about your paper in detail" onChange={(e) => setContent(e.target.value)} />
//             <Input size="lg" label="Give pdf link of your paper " onChange={(e) => setPdf(e.target.value)} />
//           </div>
//           {/* <Button className="my-6" fullWidth onClick={handleCreate}> {/* onClick={handleRegister} */}
//             {/* Post
//           </Button>  */}
//           <Button className="my-6" fullWidth onClick={handleCreate} disabled={isCreating}> {/* Disable the button when the request is in progress */}
//           {isCreating ? 'Creating...' : 'Post'} {/* Show 'Creating...' when the request is in progress */}
//         </Button>
//         </form>
//     </center>
//   );
// }

// export default CreatePost;




import React, { useState } from 'react';
import {
  Card,
  Input,
  Textarea,
  Typography,
  Button
} from "@material-tailwind/react";
import axios from 'axios'; // Import Axios
import { redirect } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [pdfLink, setPdf] = useState('');
  const [authorId, setAuthor] = useState('64f7173ecaa7ceedd35b3872');


  const handleCreate = async () => {
    // Check if any of the required fields are empty
    if (!title || !subject || !content || !pdfLink || !authorId) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Create an object containing the post data
    const postData = {
      title,
      subject,
      content,
      pdfLink,
      authorId,
    };

    await axios.post('/api/posts/create', {
      title,
      subject,
      content,
      pdfLink,
      authorId
    })
      .then((response) => {
        console.log('Post created successfully', response.data);
        alert('Post created successfully')

        setTitle('');
        setSubject('');
        setContent('');
        setPdf('');
      })
      .catch((error) => console.error(error));

  };


  return (
    <center>
      <form className="mt-28 mb-4 w-screen max-w-screen-lg sm:w-96">
        <div className="mb-4 flex w-full flex-col gap-6">
          <div class="shrink-0 mt-5 flex justify-center">
            <img class="h-20 w-20 object-cover rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Current profile photo" />
          </div>

          <Input size="lg" label="Give your paper a title" onChange={(e) => setTitle(e.target.value)} value={title} />
          <Input size="lg" label="To which subject your paper is about" onChange={(e) => setSubject(e.target.value)} value={subject} />
          <Textarea className='h-64' size="lg" label="Write about your paper in detail" onChange={(e) => setContent(e.target.value)} value={content} />
          <Input size="lg" label="Give pdf link of your paper " onChange={(e) => setPdf(e.target.value)} value={pdfLink} />
        </div>
        <Button className="my-6" fullWidth onClick={handleCreate}>
          Post
        </Button>
      </form>
    </center>
  );
}

export default CreatePost;

