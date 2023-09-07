import React, { useState } from 'react';
import {
  Card,
  Input,
  Textarea,
  Typography,
  Button
} from "@material-tailwind/react";

function CreatePost() {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [pdfLink, setPdf] = useState('');

  const handleCreate = () => {
    // Add logic to send the new post data to your backend
    // Example API request:
    // fetch('/api/posts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ title, content }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle successful creation, e.g., redirect to the new post's page
    //   });
  };
  
  return (
    <center>
        <form className="mt-28 mb-4 w-screen max-w-screen-lg sm:w-96">
          <div className="mb-4 flex w-full flex-col gap-6">
            <div class="shrink-0 mt-5 flex justify-center">
              <img class="h-20 w-20 object-cover rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Current profile photo" />
            </div>

            <Input size="lg" label="Give your paper a title" onChange={(e) => setTitle(e.target.value)} />
            <Input size="lg" label="To which subject your paper is about" onChange={(e) => setSubject(e.target.value)} />
            <Textarea className='h-64' size="lg" label="Write about your paper in detail" onChange={(e) => setContent(e.target.value)} />
            <Input size="lg" label="Give pdf link of your paper " onChange={(e) => setPdf(e.target.value)} />
          </div>
          <Button className="my-6" fullWidth onClick={handleCreate}> {/* onClick={handleRegister} */}
            Post
          </Button>
        </form>
    </center>
  );
}

export default CreatePost;
