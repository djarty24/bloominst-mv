import React from 'react';
import EmblaCarousel from '../carousel/EmblaCarousel';
import './Events.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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
                <iframe style={{aspectRatio: "5 / 4", width: "100%"}} src="https://embed.styledcalendar.com/#xPzT5eiLzun3xEJn3CPr" title="Styled Calendar" class="styled-calendar-container" data-cy="calendar-embed-iframe"></iframe>
                <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
            </div>
            <div className='past-section'>
                <h2>Past Events</h2>
                <div className='flex flex-col items-center justify-center border border-[#d1d5db] rounded-2xl p-6 my-6'>
                    <h3 className='font-semibold mb-2'>STEM NIGHT</h3>
                    <p className='italic text-center text-sm text-gray-600 m-0'>02/09/2024<br />Homestead High School</p>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    <a href="" className='text-center text-sm text-gray-600 m-0'>Read more coming soon</a>
                </div>
                <div className='flex'>
                    <div className='flex flex-col items-center justify-center border border-[#d1d5db] rounded-2xl p-6'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;
