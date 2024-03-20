import React from 'react'
import './About.css'

const About = () => {
  return (
	<div className='about'>
		<div>
			<h1>A Bit About <span className='highlight'>Us</span></h1>
			<p>In 2022, Bloom Institute expanded nationwide, introducing different regions to connect with students across the USA. In Mountain View, our first Regional Director, Suri, led the way and assembled our team: Dorie, Meredith, Katie, Catherine, and Jemma. Suri and Katie share a middle school background, while the rest of us attend Homestead High School in California. Once our team was formed, we eagerly began collaborating to plan exciting future events— and it's been a blast! We can't wait to meet everyone and hope you all enjoy our events!</p>
		</div>
		<div className="slider">
			<div className="slide-track">
				<div className="slide"><img src="/scroll1.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll2.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll3.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll4.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll1.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll2.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll3.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll4.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll1.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll2.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll3.jpeg" alt="" /></div>
				<div className="slide"><img src="/scroll4.jpeg" alt="" /></div>
			</div>
		</div>
		<div>
			<h2>Meet <span className='highlight'>Our Team</span></h2>
			<p>Welcome to the Mountain View region! We are so excited to host many fun events and get to meet everyone. Our wonderful team has been working diligently to plan our events. We hope to see everyone there!</p>
		</div>
	</div>
  )
}

export default About