import React from "react";

const Contacts = ({ contacts }) => {
  const { title, phone, email, address } = contacts;
  return (
    <section>
      <p className="mb-4 text-gray-600">
        <a href={`tel:${phone}`} className="hover:underline">
          <span>Phone: </span>
          {phone}
        </a>
      </p>

      <p className="mb-4 text-gray-600">
        <a href={`mailto:${email}`} className="hover:underline">
          <span>Email: </span>
          {email}
        </a>
      </p>
      <p className="mb-4 text-gray-600">
        <span>Address: </span>
        {address}
      </p>
    </section>
  );
};

export default Contacts;
