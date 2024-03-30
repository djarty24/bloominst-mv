
import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-intro wide-section'>
            <div className='home-intro-text'>
                <h4 className='font-semibold text-gray-600'>BLOOM INSTITUTE MOUNTAIN VIEW</h4>
                <h1 className="text-left">Learning <span className='highlight'>beyond</span> the classroom.</h1>
                <p>We are a student-led non-profit that encourages middle schoolers in Mountain View to explore exciting subjects. We organize fun events to spark their interests and inspire a love for learning beyond the classroom, aiming for a successful future. Join us in cultivating passions!</p>
            </div>
            <img src="/mountain-view.png" alt="" />
        </div>

        <div className="section bg-accent">
            <h2>Our Goals</h2>
            <p>At our events, we aim to cover unique topics through workshops and seminars. By focusing on non-traditional subjects, we want students to discover new passions and interests. Our dedicated team is working hard to share this knowledge with as many students as we can!</p>
        </div>

        <div className="wide-section">
            <h2 className='text-center'>Events We've Hosted</h2>
            <div className='events'>
                <div className="home-event">
                    <h4 className='caption'>MARCH 9 AND MARCH 16</h4>
                    <h3>Math Night</h3>
                    <p>Our first events were hosted on March 9, and March 16, 2023. We hosted a fun math night for all local elementary school students to enjoy!</p>
                </div>
                <div className="home-event">
                    <h4 className='caption'>SEPTEMBER 16</h4>
                    <h3>Tie-Dye Booth</h3>
                    <p>We hosted a fun tie-dye booth at the annual Silicon Valley Fun Fest at Memorial Park.</p>
                </div>
                <div className="home-event">
                    <h4 className='caption'>FEBRUARY 9</h4>
                    <h3>STEM Night</h3>
                    <p>We hosted a DNA animal cell slime modeling event for STEM Night at Homestead High.</p>
                </div>
                <div className="home-event">
                    <h4 className='caption'>TO BE ANNOUNCED!</h4>
                    <h3>Stay tuned!</h3>
                    <p>We plan to host many more events in the future!</p>
                </div>
            </div>
        </div>

        <div className="p-14 bg-accent">
                <div className="home-map">
                <img className='border m-8 bg-gray-600' src="/map.png" alt="Map of Mountain View" />
                <div>
                    <h2>Welcome to the Mountain View Chapter!</h2>
                    <p>Located in the heart of Silicon Valley, our region is known for its diverse community and rich history. Mountain View houses the headquarters of many of the world's largest companies, including Google and Alphabet Inc., LinkedIn, and Microsoft.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
