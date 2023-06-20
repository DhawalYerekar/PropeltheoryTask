import React, { useState } from "react";
import "./Header.css";
import '@supabase/supabase-js' 
import Backgroundimage from "../Assets/WhatsApp Image 2023-06-20 at 11.05.23 AM.jpeg";
import axios from "axios";

const Header = () => {
    const [fname, setfname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [business, setBusiness] = useState("");
    const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create the form data object
      const formData = {
        fname,
        email,
        phone,
        business,
        msg,

      };

  const response = await axios.post("https://vdrikmsvxskjgmvbcgqb.supabase.co", formData);

  console.log("Data sent successfully:", response.data);
  console.log("Full Name:", fname);
  console.log("Email:", email);
  console.log("Phone No:", phone);
  console.log("Business Type:", business);
  console.log("Description:", msg);

  setfname("");
  setEmail("");
  setPhone("");
  setBusiness("");
  setMsg("");
} catch (error) {
  console.error("Error inserting data:", error.message);
}
};


  return (
    <section className="header">
      <div className="img-container">
        <img src={Backgroundimage} alt="backgroundimg" />
      </div>

      <div className="header-container">
        <h1>Contact Us</h1>
        <p>
          Connect with our experts to learn how Brandlytical can help your brand
          drive meaningful results.
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Talk to us </h1>
          <input
            onChange={(e) => setfname(e.target.value)}
            id="name"
            name="name"
            type="text"
            placeholder="Full Name *"
            value={fname}
          />
          <input
            type="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            name="email"
            placeholder="Email* "
            required="true"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            value={email}
          />
          <input
            type="number"
            placeholder="Phone no.*"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            value={phone}
          />
          <input
            type="text"
            placeholder="Type of Bussiness"
            name="bussiness"
            onChange={(e) => setBusiness(e.target.value)}
            id="bussiness"
            value={business}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Describe your requirement"
            onChange={(e) => setMsg(e.target.value)}
            id="msg"
            value={msg}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Header;
