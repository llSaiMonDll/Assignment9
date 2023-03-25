import React, { useState } from "react";
const MyForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Email: ${email}\nName: ${firstName}\nLastname: ${lastName}\nPhone Number: ${phoneNumber}\nPassword: ${password}`
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handlePhoneNumChange = (e) => {
    const phoneNumber = e.target.value.replace(/\D/g, "");
    if (phoneNumber.length <= 10) {
      setPhoneNumber(phoneNumber);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <section>
        <h1>Register</h1>
        <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
        </label>
        <br/>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            pattern="[A-Za-z]{1,32}"
          />
        </label>
        <br/>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
            pattern="[A-Za-z]{1,32}"
          />
        </label>
        <br/>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumChange}
            required
            pattern="[0-9]{10}"
          />
        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default MyForm;