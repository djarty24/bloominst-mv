import React from 'react'
import Member from './Member';
import './About.css'

const About = () => {
  return (
	<div className='about'>
		<div className='section'>
			<h1>A Bit About <span className='highlight'>Us</span></h1>
            <h3>Hi there, we&#x27;re Bloom Institute&#x27;s Mountain View Chapter!</h3>
			<p className='text-center text-gray-600'>In 2022, Bloom Institute expanded nationwide, introducing different regions to connect with students across the USA. ri, led the way and assembled our team: Dorie, Meredith, Katie, Catherine, and Jemma. Suri and Katie share a middle school background, while the rest of us attend Homestead High School in California. Once our team was formed, we eagerly began collaborating to plan exciting future events— and it's been a blast! We can't wait to meet everyone and hope you all enjoy our events!</p>
		</div>

		<div className='section bg-accent'>
			<h2>Meet <span className='highlight'>Our Team</span></h2>
			<p className='text-center'>Our wonderful team has been working diligently to plan our events. We hope to see everyone there!</p>
            <div className="container mx-auto pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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