import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    const ContactData = { id: Math.random(), name, number: mobile, location };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all The fields!");
    } else {
      props.oncontactAdded(ContactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <h2>Contact Adder:</h2>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contact Name"
          ></input>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Contact Number"
          ></input>
          <input
            type="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          ></input>
          <br />
          <br />
          <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
