import { useState } from "react";
import "./Contact.css";

function Contact() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");

function submit(e){
e.preventDefault();
alert("Message Sent");
}

return (

<div className="contact-page">

<h1>Contact Us</h1>

<p>
We usually reply within 24 hours
</p>

<form onSubmit={submit} className="contact-form">

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Your Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<textarea
placeholder="Your Message"
rows="5"
/>

<button>
Send Message
</button>

</form>

</div>

);

}

export default Contact;