import React, { useEffect, useState } from "react";
import { Input, Textarea, Button, Alert } from "@material-tailwind/react";
import api from "../../api/axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [pdfLink, setPdf] = useState("");
  const [authorId, setAuthor] = useState("64f7173ecaa7ceedd35b3872");
  const [showAlert, justShow] = useState(false);

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
    await api
      .post("/api/posts/create", { data: postData })
      .then((response) => {
        if (response.status === 201) {
          console.log("Post created");
          justShow(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        justShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      <center>
      {showAlert && (
        <Alert severity="success">
          <strong>Post Created Successfully. Please check it out!</strong>
        </Alert>
      )}
        <form className="mt-28 mb-4 w-screen max-w-screen-lg sm:w-96">
          <div className="mb-4 flex w-full flex-col gap-6">
            <div class="shrink-0 mt-5 flex justify-center">
              <img
                class="h-20 w-20 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="Current profile photo"
              />
            </div>

            <Input
              size="lg"
              label="Give your paper a title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <Input
              size="lg"
              label="To which subject your paper is about"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <Textarea
              className="h-64"
              size="lg"
              label="Write about your paper in detail"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <Input
              size="lg"
              label="Give pdf link of your paper "
              onChange={(e) => setPdf(e.target.value)}
              value={pdfLink}
            />
          </div>
          <Button
            className="my-6"
            fullWidth
            onClick={() => {
              handleCreate();
              setTitle("");
              setSubject("");
              setContent("");
              setPdf("");
            }}
          >
            Post
          </Button>
        </form>
      </center>
    </>
  );
}

export default CreatePost;
