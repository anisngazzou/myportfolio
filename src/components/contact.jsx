import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div>
            <section className="colorlib-contact" data-section="contact">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Get in Touch</span>
							<h2 className="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5">
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-mail"></i>
								</div>
								<div className="colorlib-text">
									<p><a className="email" href="mailto:anis.ngazou@polytechnicien.tn">anis.ngazou@polytechnicien.tn</a></p>
                                    
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-map"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="https://goo.gl/maps/yzxyeXjiuxryAyQe9"target="_blank" rel="noopener noreferrer">Sidi Abar Street,M'Saken City 4070,Susah Tunisia</a></p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-phone"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="tel://">(+216)-95763116</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-7 col-md-push-1">
							<div className="row">
								<div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
									<form action="">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Name"/>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Email"/>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Subject"/>
										</div>
										<div className="form-group">
											<textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
										</div>
										<div className="form-group">
											<input type="submit" className="btn btn-primary btn-send-message" value="Send Message"/>
										</div>
									</form>
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