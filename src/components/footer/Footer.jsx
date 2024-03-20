import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
            <div>
                <div>
    				<ul>
    					<li><img src="/favicon.png" alt="" />Bloom Institute Mountain View</li>
    					<li><br /></li>
    					<li>Bloom Institute is a 501&#40;c&#41;&#40;3&#41; non-profit organization</li>
    					<li>EIN: 81-2908499</li>
    				</ul>
    			</div>
    			<div>
    				<div>
    					<h3>Contact</h3>
    					<ul>
    						<li><i className='fa fa-envelope'></i><a href="mailto:mountainview@bloominst.org" target='_blank'>mountainview@bloominst.org</a></li>
    						<li><i className='fa fa-instagram'></i><a href="https://www.instagram.com/mountainview.bloominst/" target='_blank'> @mountainview.bloominst</a></li>
    						<li><i className='fa fa-linkedin'></i><a href="https://www.linkedin.com/company/bloom-instituteorg/?original_referer=https%3A%2F%2Fbloominst.org%2F" target='_blank'> Bloom Institute LinkedIn</a></li>
    					</ul>
    				</div>
    				<div>
    					<h3>Quick Links</h3>
    					<ul>
    						<li><Link to={"/about"}>About</Link></li>
    						<li><Link to={"/events"}>Events</Link></li>
    						<li><a href="https://bloominst.org/" target='_blank'>HQ</a></li>
    						<li><a href="https://hcb.hackclub.com/donations/start/bloom-institute" target='_blank'>Donate</a></li>
    					</ul>
    				</div>
    			</div>
            </div>
            <div>
                <hr />
                <h4>© 2023 Bloom Institute. All Rights Reserved.</h4>
            </div>
		</footer>
	)
}

export default Footer