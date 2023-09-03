import React, { useState } from 'react';

function EditProfile({ userId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
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
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditProfile;
