import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div>
            <div className='section'>
                <h1>Events</h1>
                <p className='text-center text-gray-600'>Within our events, we hope to touch on many unique topics by hosting workshops and seminars. We chose these non-traditional topics in hopes that students can find new passions, interests, and be able develop new hobbies. We believe that they are important in a student's creative development, which is why our team is working diligently to make sure this knowledge can reach as many students as possible.</p>
            </div>
            <div className='section bg-accent'>
                <h2>Calendar</h2>
                {/* <iframe className='calendar w-full' src="https://calendar.google.com/calendar/embed?src=mountainview%40bloominst.org&ctz=America%2FLos_Angeles"></iframe> */}
                <iframe style={{aspectRatio: "5 / 4"}} className='calendar w-full' src="https://embed.styledcalendar.com/#xPzT5eiLzun3xEJn3CPr" title="Styled Calendar" class="styled-calendar-container" data-cy="calendar-embed-iframe"></iframe>
                <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
            </div>
            <div className='section'>
                <h2>Past Events</h2>
                <p>This feature is currently under development! Please check back in a little while.</p>
            </div>
        </div>
    )
}

export default Events;
