import React from 'react'
import Contact from "./contactCard";


function ContactList({state}) {
    return (
        <div className="contact-list-container">

        {state.users.map((user, index) => (
          <Contact key={index} user={user} />
        ))}
  </div>
    )
}

export default ContactList
