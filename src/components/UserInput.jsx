import React from "react";

const UserInput = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group"></div>
      <div className="input-group">
        <p>
          <label htmlFor="">EXPECTED RETURN</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">DURATION</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
