import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import {
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

function EditProfile({ userId }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [education, setEducation] = useState('');

  const handleEdit = () => {
    // Add logic to send updated profile data to your backend
    // Example API request:
    // fetch(`/api/profiles/${userId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle successful update
    //   });
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Edit Profile
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <Typography variant="h3" className="my-2 text-center" color="blue-gray">
          Edit
        </Typography>
        <Card color="transparent" className="flex mt-5 items-center justify-center h-[80vh] overflow-y-scroll" shadow={false}>
          <form className="mt-28 mb-4 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div class="shrink-0 mt-5">
                <img class="h-20 w-20 object-cover rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Current profile photo" />
              </div>

              <Button className='w-40'><label htmlFor='avatarUpload' className="block">Change Avatar</label></Button>

              <input id="avatarUpload" type="file" style={{ display: "none" }} />

              <Input size="lg" label="Fullname" onChange={(e) => setName(e.target.value)} />
              <Input size="lg" label="Location" onChange={(e) => setLocation(e.target.value)} />
              <Input size="lg" label="Affiliation" onChange={(e) => setAffiliation(e.target.value)} />
              <Input size="lg" label="Education" onChange={(e) => setEducation(e.target.value)} />
              <Textarea label="Bio" onChange={(e) => setBio(e.target.value)}></Textarea>
            </div>
            <Button className="mt-6" fullWidth onClick={handleEdit}> {/* onClick={handleRegister} */}
              Edit
            </Button>
          </form>
        </Card>
      </Dialog>
    </>
  );
}

export default EditProfile;
