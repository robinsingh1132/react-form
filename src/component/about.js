import React from 'react';
import "./about.css"
const About = () => {
	return (
		<>
			<div class="about-section">
				<h1>About Us Page</h1>
				<p>Some text about who we are and what we do.</p>
				<p>Resize the browser window to see that this page is responsive by the way.</p>
			</div>

			<h2 class="text-center">Our Team</h2>
			<div class="row">
				<div class="col">
					<div class="card">
						<img src="https://picsum.photos/100/100" className='mt-4' alt="Jane" style={{width:"40%"}} />
						<div class="container text-center">
							<h2>Jane Doe</h2>
							<p class="title">CEO & Founder</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>jane@example.com</p>
							<p><button class="button">Contact</button></p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<img src="https://picsum.photos/100/100" className='mt-4' alt="Mike" style={{width:"40%"}} />
						<div class="container text-center">
							<h2>Mike Ross</h2>
							<p class="title">Art Director</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>mike@example.com</p>
							<p><button class="button">Contact</button></p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<img src="https://picsum.photos/100/100" className='mt-4' alt="John" style={{width:"40%"}} />
						<div class="container text-center">
							<h2>John Doe</h2>
							<p class="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p><button class="button">Contact</button></p>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
export default About;
