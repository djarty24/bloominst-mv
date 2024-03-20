import React from 'react'
import './Events.css'

const Events = () => {
  return (
	<div>
		<div className="section">
			<h1>Events</h1>
			<p>Within our events, we hope to touch on many unique topics by hosting workshops and seminars. We chose these non-traditional topics in hopes that students can find new passions, interests, and be able develop new hobbies. We believe that they are important in a student's creative development, which is why our team is working diligently to make sure this knowledge can reach as many students as possible.</p>
		</div>
		<div className="section" style={{backgroundColor: "#EEF1FF"}}>
			<h2>Calendar</h2>
			<h3>This feature is currently under development! Please check back in a little while.</h3>
			<h3>Your patience is greatly appreciated.</h3>
		</div>
        <div className="section"><h2><span className='highlight'>Past</span> Events</h2></div>
    		<div className="events">
    			<div className="event" style={{}}>
    				<h3>Math & Puzzles Night</h3>
                    <h4>On March 9th and March 16th (2023), we hosted a math night for elementary school students! A variety of math "puzzles" were displayed around several booths, as well as some fun hands-on activities. It was such a fun night and hope there will be more to come!</h4>
    			    <img src="/math-night-1.png" alt="" />
    			    <img src="/math-night-2.png" alt="" />
                </div>
    			<div className="event">
    				<h3>Community Fair Tie-Dye Booth</h3>
                    <h4>On September 9th 2023, Bloom Institute held a tie-dye booth at the annual Silicon Valley Day 'n Night Fun Fest! Thank you to all the volunteers that helped out, and the people who stopped by to make some cool tie-dye. It was an incredibly fun experience!</h4>
                    <img src="/tie-dye-1.png" alt="" />
    			    <img src="/tie-dye-2.png" alt="" />
                </div>
    		</div>
        <div className="section"></div>
	</div>
  )
}

export default Events