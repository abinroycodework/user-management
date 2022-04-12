import './AddUser.css';
import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          username: username,
          email: email,
        }),
      });
      let resJson = await res.json();
      if (res.ok) {
        setName("");
        setusername("");
        setemail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Add user</h1>
        <div class='row'>
          <div class="col-25">
            <label for="name">Name:</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div class='row'>
          <div class="col-25">
            <label for="username">Username:</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
        </div>

        <div class='row'>
          <div class="col-25">
            <label for="email">Email id:</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
        </div>
        {/* <button type="submit">Create</button> */}
        <div class="row">
      <input type="submit" value="Submit"/>
    </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default AddUser;