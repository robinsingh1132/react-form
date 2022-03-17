import React from 'react';
import Form from '../Form';
import "./contact.css";

const Contact = () => {
	return (
		<>
			<div class="container mt-4">
				<div style={{ textAlign: "center" }}>
					<h2>Contact Us</h2>
					<p>Swing by for a cup of coffee, or leave us a message:</p>
				</div>
				<div class="row">
					<div class="column">
						<img src="https://picsum.photos/200" style={{ width:"100%"}} />
					</div>
					<div class="column">
						<Form/>
					</div>
				</div>
			</div>
		</>
	)
}
export default Contact;
