const Contact = (props) => {
  return (
    <>
      <div className="contact">
        Name: {props.data.name}
        <br />
        Number: {props.data.number}
        <br />
        Location: {props.data.location}
        <br />
      </div>
    </>
  );
};

export default Contact;
