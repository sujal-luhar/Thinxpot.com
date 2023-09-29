import React, { useState } from 'react';
import { Button, Textarea } from '@material-tailwind/react';
import api from "../../api/axios";


function CommentForm({ postId }) {
  const [text, setComment] = useState('');

  const handleComment = () => {
    // Add logic to send the new comment to your backend
    // Example API request:
    // fetch(`/api/posts/${postId}/comments`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ text }),
    // })
    //   .then(response => {
    //     if (response.status === 200) {
    //       // Handle successful comment submission
    //       setText('');
    //     }
    //   });
  };

  return (
    // <div>
    //   <h3>Add a Comment</h3>
    //   <textarea
    //     placeholder="Write a comment..."
    //     value={text}
    //     onChange={(e) => setText(e.target.value)}
    //   />
    //   <button onClick={handleSubmit}>Submit</button>
    // </div>
    <div className='my-6 block'>
      <Textarea size="lg " label="Comment" onChange={(e) => setComment(e.target.value)} />
      <Button className="float-right" onClick={handleComment}> {/* onClick={handleRegister} */}
        Comment
      </Button>
    </div>
  );
}

export default CommentForm;
