import React, { Component } from 'react'
import data from "./Data.json";
const aboutList = data.about;
export default class About extends Component {
  render() {
    return (
        <div>
		
			
            <section className="colorlib-about" data-section="about">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="col-md-12">
									<div className="about-desc">
										<span className="heading-meta">About Me</span>
										<h2 className="colorlib-heading">{aboutList[0]}</h2>
										<p><strong>Hi I'm Ngazou Anis</strong>{aboutList[1]}</p>
										<p>{aboutList[2]}</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
									<div className="services color-1">
										<span className="icon2"><i className="icon-bulb"></i></span>
										<h3>Web Design</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
									<div className="services color-2">
										<span className="icon2"><i className="icon-globe-outline"></i></span>
										<h3>Web Development</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-4">
										<span className="icon2"><i className="icon-data"></i></span>
										<h3>Restful API</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
									<div className="services color-3">
										<span className="icon2"><i className="icon-phone3"></i></span>
										<h3>Mobile Development</h3>
									</div>
								</div>
								 
							</div>
							{/* <div className="row">
								<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
									<div className="hire">
										<h2>I am happy to know you <br/>that 300+ projects done sucessfully!</h2>
										<a href="#" className="btn-hire">Hire me</a>
									</div>
								</div>
							</div> */}
							<div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="colorlib-narrow-content">
					<div className="row">
					</div>
					<div className="row">
						<div className="col-md-3 text-center animate-box">
							<span className="colorlib-counter js-counter" data-from="0" data-to="127" data-speed="5000" data-refresh-interval="50"></span>
							<span className="colorlib-counter-label">Cups of coffee</span>
						</div>
						<div className="col-md-3 text-center animate-box">
							<span className="colorlib-counter js-counter" data-from="0" data-to="23" data-speed="5000" data-refresh-interval="50"></span>
							<span className="colorlib-counter-label">Projects</span>
						</div>
						<div className="col-md-3 text-center animate-box">
							<span className="colorlib-counter js-counter" data-from="0" data-to="4" data-speed="3500" data-refresh-interval="50"></span>
							<span className="colorlib-counter-label">Internships</span>
						</div>
						<div className="col-md-3 text-center animate-box">
							<span className="colorlib-counter js-counter" data-from="0" data-to="9" data-speed="3500" data-refresh-interval="50"></span>
							<span className="colorlib-counter-label">Collaborations</span>
						</div>
					</div>
				</div>
			</div>

						</div>
					</div>
				</div>
			</section>
            </div>
            )
  }
}