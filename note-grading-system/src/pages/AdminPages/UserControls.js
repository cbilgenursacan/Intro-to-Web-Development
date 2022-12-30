import React from "react";

const UserControls = () => {
    return(
        <div>
            <div className="users">
      <h2>Users</h2>
      <hr/>
      <div className="pb-3">
        <label>
          <input
            type="search"
            className=""
            placeholder="Search for users..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
    {props.users.length > 0 ? 
        props.users
            .filter((user) => user.userName.toLowerCase().includes(query.toLowerCase()))
            .map((user) => (
                <div className="user">
                    <h3>{user.userName}</h3>
                    <hr />
                    <h4>{user.userCode}</h4>
                    <h4 className="mb-3">{user.userr}</h4>
                    <button className="btn btn-danger">Delete</button>
                </div>
            ))
        :
        <></>
    }
    </div>

        </div>
    );
}

export default UserControls;