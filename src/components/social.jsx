import React, { Component } from 'react'
import data from "./Data.json";
export default class Social extends Component {
  render() {
    return (
        <div>
            <section className="colorlib-blog" data-section="volunteering">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Think Act Interact</span>
							<h2 className="colorlib-heading">Volunteer Works</h2>
						</div>
					</div>
					<div className="row">
					{
						data.social.map((s, i) => {
            				return (
								<div key={i} className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
									<div className="blog-entry">
										<a href={s.url} className="blog-img"><img src={s.img} className="img-responsive" alt="HTM"/></a>
											<div className="desc">
												<span><small>{s.time}</small> | <small> {s.type} </small></span>
												<h3><a href={s.url}>{s.title}</a></h3>
												<p>{s.description}<br/><strong>Events:</strong> {s.events}</p>
											</div>
									</div>
								</div>   
							);
						})
					}
					</div>
				</div>
			</section>
       </div>
       )
       }
	   }

