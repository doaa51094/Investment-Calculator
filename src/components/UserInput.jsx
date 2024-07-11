import React from "react";

const UserInput = ({onChangeInput,userInput}) => {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input type="number" required    value={userInput.annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}/>
        </p>
      </div>
      <div className="input-group"></div>
      <div className="input-group">
        <p>
          <label htmlFor="">EXPECTED RETURN</label>
          <input type="number" required value={userInput.expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}/>
        </p>
        <p>
          <label htmlFor="">duration</label>
          <input type="number" required value={userInput.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}/>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
