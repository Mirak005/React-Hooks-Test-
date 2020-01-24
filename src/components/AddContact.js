import React from 'react'
import { Button } from "@material-ui/core";


function AddContact({state , handelAdd , handelChange}) {
    return (
        <div className="users-container">
          <h2>Add User with React hooks</h2>
          <label>User Name</label>
          <input
            type="text"
            name="name"
            value={state.user.name}
            onChange={event => handelChange(event, event.target.name)}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.user.email}
            onChange={e => handelChange(e, e.target.name)}
          />

          <Button
            className="add-btn"
            onClick={handelAdd}
            variant="contained"
            color="primary"
          >
            Add Contact
          </Button>
        </div>
    )
}

export default AddContact