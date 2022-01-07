import React, { useState } from "react";

function MessageApk() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);
  const [user, setUsername] = useState("");
  const [userId, setUserid] = useState("");

  const insertId = (e) => {
    setUserid(e.target.value);
  };
  const insertName = (e) => {
    setUsername(e.target.value);
  };

  const insertData = (e) => {
    const newmsg = e.target.value;
    setMsg(newmsg);
  };

  const sendData = () => {
    const newlist = [msg, ...list];
    setList(newlist);
    setMsg(" ");
  };

  return (
    <div className="container">
      {/* header */}
      <div className="row d-flex align-items-center bg-secondary my-2">
        <div className="col-3">
          <h1>MyChatApp</h1>
        </div>
        <div className="col-2 border-light" placeholder="Student Name..">
          <input type="text" onChange={insertId} />
        </div>
        <div className="col-2 mx-2">
          <h4>User Id: {userId}</h4>
        </div>
        <div className="col-2" placeholder="Student ID...">
          <input type="text" onChange={insertName} />
        </div>
        <div className="col-2 mx-2">
          <h4>User: {user}</h4>
        </div>
      </div>
      {/* input */}
      <div className="row my-3">
        <div className="col-8">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="send msg..."
            aria-label=".form-control-lg example"
            onChange={insertData}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-dark my-2 " onClick={sendData}>
            send
          </button>
        </div>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={index}>
            <div className="alert alert-secondary" role="alert">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageApk;
