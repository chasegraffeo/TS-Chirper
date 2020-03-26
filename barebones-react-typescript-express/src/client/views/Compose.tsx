import * as React from "react";
import { useState } from "react";
import { GiFeatherWound } from "react-icons/gi";
import { useHistory } from "react-router";

const Compose: React.FC<ComposeProps> = () => {
  
  const history = useHistory();
  
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({username, message});
    let res = await fetch('/api/chirps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, message })
    })
    if(res.ok) {
      history.push('/');
    }else{
      console.log('something went wrong :(');      
    }
  };

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <form className="form-group p-3 shadow border">
            <label htmlFor="username">@Username</label>
            <input
              value={username}
              onChange={handleUsernameChange}
              placeholder="We be chirpin'?"
              id="username"
              type="text"
              className="form-control"
            />
            <label htmlFor="message">Message</label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              rows={8}
              placeholder="What you saying bro?"
              name="message"
              className="form-control"
              id="message"
            ></textarea>
            <button
              onClick={submitChirp}
              className="btn btn-outline-warning btn-block mt-3 w-75 mx-auto shadow-sm"
            >
              <GiFeatherWound />
              Chirp It!
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

interface ComposeProps {}

export default Compose;
