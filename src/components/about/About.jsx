import React from 'react'
import Member from './Member';
import './About.css'

const About = () => {
  return (
	<div className='about'>
		<div className='section'>
			<h1>A Bit About <span className='highlight'>Us</span></h1>
            <h3>Hi there, we&#x27;re Bloom Institute&#x27;s Mountain View Chapter!</h3>
			<p className='text-center text-gray-600'>In 2022, Bloom Institute expanded nationwide, introducing different regions to connect with students across the USA. In Mountain View, our first Regional Director, Suri, led the way and assembled our team: Dorie, Meredith, Katie, Catherine, and Jemma. Suri and Katie share a middle school background, while the rest of us attend Homestead High School in California. Once our team was formed, we eagerly began collaborating to plan exciting future events— and it's been a blast! We can't wait to meet everyone and hope you all enjoy our events!</p>
		</div>
		<div className="slider">
			<div className="slide-track">
				<div className="slide"><img src="/tie-dye-booth/a.jpeg" alt="" /></div>
                <div className="slide"><img src="/stem-night/a.png" alt="" /></div>
				<div className="slide"><img src="/tie-dye-booth/b.jpeg" alt="" /></div>
                <div className="slide"><img src="/stem-night/b.png" alt="" /></div>
				<div className="slide"><img src="/tie-dye-booth/c.jpeg" alt="" /></div>
                <div className="slide"><img src="/stem-night/c.png" alt="" /></div>
				<div className="slide"><img src="/tie-dye-booth/d.jpeg" alt="" /></div>
                <div className="slide"><img src="/stem-night/d.png" alt="" /></div>
				<div className="slide"><img src="/tie-dye-booth/e.jpeg" alt="" /></div>
                <div className="slide"><img src="/stem-night/e.png" alt="" /></div>
				<div className="slide"><img src="/tie-dye-booth/f.jpeg" alt="" /></div>
				<div className="slide"><img src="/stem-night/f.png" alt="" /></div>
			</div>
		</div>
		<div className='section bg-accent'>
			<h2>Meet <span className='highlight'>Our Team</span></h2>
			<p>Welcome to the Mountain View region! We are so excited to host many fun events and get to meet everyone. Our wonderful team has been working diligently to plan our events. We hope to see everyone there!</p>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
                    <Member position="Chapter Director" name="Meredith Tan" photo="/officers/meredith.png" />
                    <Member position="Treasurer" name="Miyu Nojiri" photo="/officers/miyu.png" />
                    <Member position="Public Relations" name="Catherine Yang" photo="/officers/catherine.png" />
                    <Member position="Public Relations" name="Keira Hsieh" photo="/officers/keira.png" />
                    <Member position="Activities Director" name="Katie Wu" photo="/officers/katie.png" />
                    <Member position="Activities Director" name="Jocelyn Wang" photo="/officers/jocelyn.png" />
                    <Member position="Website Manager" name="Amy Jo" photo="/officers/amy.png" />
                    <Member position="Website Manager" name="Revati Tambe" photo="/officers/revati.png" />
                </div>
            </div>
        </div>
	</div>
  )
}

export default About