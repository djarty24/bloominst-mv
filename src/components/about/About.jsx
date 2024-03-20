import React from 'react'
import Member from './Member';
import './About.css'

const About = () => {
  return (
	<div className='about'>
		<div className='section'>
			<h1>A Bit About <span className='highlight'>Us</span></h1>
			<p className='text-center text-gray-600'>In 2022, Bloom Institute expanded nationwide, introducing different regions to connect with students across the USA. In Mountain View, our first Regional Director, Suri, led the way and assembled our team: Dorie, Meredith, Katie, Catherine, and Jemma. Suri and Katie share a middle school background, while the rest of us attend Homestead High School in California. Once our team was formed, we eagerly began collaborating to plan exciting future events— and it's been a blast! We can't wait to meet everyone and hope you all enjoy our events!</p>
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
		<div className='section bg-accent'>
			<h2>Meet <span className='highlight'>Our Team</span></h2>
			<p>Welcome to the Mountain View region! We are so excited to host many fun events and get to meet everyone. Our wonderful team has been working diligently to plan our events. We hope to see everyone there!</p>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
                    <Member position="Chapter Director" name="Meredith Tan" photo="meredith.jpg" />
                    <Member position="Treasurer" name="Miyu Nojiri" photo="miyu.jpg" />
                    <Member position="Public Relations" name="Catherine Yang" photo="catherine.jpg" />
                    <Member position="Public Relations" name="Keira Hsieh" photo="keira.jpg" />
                    <Member position="Activities Director" name="Katie Wu" photo="katie.jpg" />
                    <Member position="Activities Director" name="Jocelyn Wang" photo="jocelyn.jpg" />
                    <Member position="Website Manager" name="Amy Jo" photo="amy.jpg" />
                    <Member position="Website Manager" name="Revati Tambe" photo="revati.jpg" />
                </div>
            </div>
        </div>
	</div>
  )
}

export default About