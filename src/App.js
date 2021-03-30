import React, { useState } from "react";
import "./styles.css";

import GoogleLogin from "react-google-login";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };
  return (
    <div className="App">
      <h1>Login with gooogle</h1>
      <h2>Wellcome: {name}</h2>
      <h2>Email: {email}</h2>
      <img src={url} alt={name} />

      <GoogleLogin
        clientId="276552287152-0gacviigk927idf03i54amms4jr4b3ph.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
