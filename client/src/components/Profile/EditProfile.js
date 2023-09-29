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
import axios from 'axios';
import api from '../../api/axios';

function EditProfile({ userId }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [selectedFile, setSelectedFile] = useState(null);

  // userId = '65142f79b7842cf7f018dd7a'
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [education, setEducation] = useState('');
  const [bio, setBio] = useState('');

  const handleEdit = async () => {
    // Check if any of the required fields are empty
    if (!first_name || !last_name || !location || !affiliation || !education || !bio) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Add logic to send updated profile data to your backend
    // Example API request:
    await api.put(`/api/users/${userId}/editprofile`, {
      first_name,
      last_name,
      location,
      affiliation,
      education,
      bio
    })
      .then((response) => {
        console.log('Profile updated successfully', response.data);
        alert('Profile updated successfully')

        setFirstName('');
        setLastName('');
        setLocation('');
        setAffiliation('');
        setEducation('');
        setBio('');
      })
      .catch((error) => console.error(error));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('profilePhoto', selectedFile);
      formData.append('userId', userId); // Send the user's ID along with the file

      await api.post('/api/upload/ProfilePhoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success, e.g., show a success message
      console.log('Profile photo uploaded successfully');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error uploading profile photo:', error);
    }
  };
  

  return (
    <>
      <Button onClick={handleOpen} className='bg-black hover:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150'>
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
              <div class="shrink-0 mt-10">
                <img class="h-20 w-20 object-cover rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Current profile photo" />
              </div>

              <Button onClick={handleUpload} className='w-40'><label htmlFor='avatarUpload' className="block">Change Avatar</label></Button>

              <input id="avatarUpload" type="file" name="profilePhoto" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />

              <Input size="lg" label="Firstname" onChange={(e) => setFirstName(e.target.value)} />
              <Input size="lg" label="Lastname" onChange={(e) => setLastName(e.target.value)} />
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
