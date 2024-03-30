import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='w-full px-6 md:px-24 lg:px-32'>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-5 py-5'>
                <div>
                    <div className='w-fit flex gap-5 items-center justify-center'>
                        <img src="/favicon.png" alt="" className='w-[50px] h-[50px]'/>
                        <h3 className='font-semibold text-left'>Bloom Institute <span className='highlight'>Mountain View</span></h3>
                    </div>
					<h4 className='py-5'>Bloom Institute is a 501&#40;c&#41;&#40;3&#41; non-profit organization<br />EIN: 81-2908499</h4>
    			</div>
    			<div className='lg:flex lg:gap-16'>
    				<div>
    					<h3 className='text-left font-semibold'>Contact</h3>
                        <div>
                            <a href="mailto:mountainview@bloominst.org" target='_blank'><h5 className='m-0 leading-relaxed'><i className='fa fa-envelope pr-3 text-gray-600 hover:text-highlight transition-colors duration-300'></i><span className='text-gray-600 hover:text-highlight transition-colors duration-300'>mountainview@bloominst.org</span></h5></a>
                            <a href="https://www.instagram.com/mountainview.bloominst/" target='_blank'><h5 className='m-0 leading-relaxed'><i className='fa fa-instagram pr-3 text-gray-600 hover:text-highlight transition-colors duration-300'></i><span className='text-gray-600 hover:text-highlight transition-colors duration-300'>@mountainview.bloominst</span></h5></a>
                            <a href="https://www.linkedin.com/company/bloom-instituteorg/?original_referer=https%3A%2F%2Fbloominst.org%2F" target='_blank'><h5 className='m-0 leading-relaxed'><i className='fa fa-linkedin pr-3 text-gray-600 hover:text-highlight transition-colors duration-300'></i><span className='text-gray-600 hover:text-highlight transition-colors duration-300'>Bloom Institute LinkedIn</span></h5></a>
                        </div>
    				</div>
    				<div>
    					<h3 className='text-left font-semibold'>Quick Links</h3>
                        <div className='leading-relaxed'>
                            <h5 className='m-0 leading-relaxed text-gray-600 hover:text-highlight transition-colors duration-300'><Link to={"/about"}>About</Link></h5>
    						<h5 className='m-0 leading-relaxed text-gray-600 hover:text-highlight transition-colors duration-300'><Link to={"/events"}>Events</Link></h5>
    						<h5 className='m-0 leading-relaxed text-gray-600 hover:text-highlight transition-colors duration-300'><a href="https://bloominst.org/" target='_blank'>HQ</a></h5>
    						<h5 className='m-0 leading-relaxed text-gray-600 hover:text-highlight transition-colors duration-300'><a href="https://hcb.hackclub.com/donations/start/bloom-institute" target='_blank'>Donate</a></h5>
                            <h5 className='m-0 leading-relaxed text-gray-600 hover:text-highlight transition-colors duration-300'><a href="https://docs.google.com/forms/d/e/1FAIpQLSdwrf9KzKC9Na0cRpPDE1a6d1GaydH4dHMvQE6tztDXJaculQ/viewform" target='_blank'>Volunteer</a></h5>
                        </div>
    				</div>
    			</div>
            </div>
            <hr style={{color: '#cbd5e1'}} className='pb-5' />
            <p className='pb-5 text-gray-600'>© 2023 Bloom Institute. All Rights Reserved.</p>
		</footer>
	)
}

export default Footer