import React from "react";

interface ContactProps {
  email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please reach out at {email}</p>
    </div>
  );
};

export default Contact;
