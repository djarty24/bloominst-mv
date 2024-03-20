import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
	return (
		<footer>
            <div className='footer'>
                <div className='footer-left'>
    				<ul>
    					<li><span style={{display: "flex", alignItems: "center", gap: "20px"}}><img src="/favicon.png" alt="" /><span style={{fontSize: "25px"}}>Bloom Institute Mountain View</span></span></li>
    					<li><br /></li>
    					<li>Bloom Institute is a 501&#40;c&#41;&#40;3&#41; non-profit organization</li>
    					<li>EIN: 81-2908499</li>
    				</ul>
    			</div>
    			<div className='footer-right'>
    				<div>
    					<h3 style={{ fontWeight: "500" }}>Contact</h3>
    					<ul id='footer-contact'>
    						<li><i className='fa fa-envelope'></i><a className='hover' href="mailto:mountainview@bloominst.org" target='_blank'>mountainview@bloominst.org</a></li>
    						<li><i className='fa fa-instagram'></i><a className='hover' href="https://www.instagram.com/mountainview.bloominst/" target='_blank'> @mountainview.bloominst</a></li>
    						<li><i className='fa fa-linkedin'></i><a className='hover' href="https://www.linkedin.com/company/bloom-instituteorg/?original_referer=https%3A%2F%2Fbloominst.org%2F" target='_blank'> Bloom Institute LinkedIn</a></li>
    					</ul>
    				</div>
    				<div>
    					<h3 style={{ fontWeight: "500" }}>Quick Links</h3>
    					<ul>
    						<li><Link className='hover' to={"/about"}>About</Link></li>
    						<li><Link className='hover' to={"/events"}>Events</Link></li>
    						<li><a className='hover' href="https://bloominst.org/" target='_blank'>HQ</a></li>
    						<li><a className='hover' href="https://hcb.hackclub.com/donations/start/bloom-institute" target='_blank'>Donate</a></li>
    					</ul>
    				</div>
    			</div>
            </div>
            <div style={{padding: "20px 80px 10px 80px"}}>
                <hr style={{color: "lightgray"}} />
                <h4 style={{fontSize: "18px", fontWeight: "400"}}>© 2023 Bloom Institute. All Rights Reserved.</h4>
            </div>
		</footer>
	)
}

export default Footer