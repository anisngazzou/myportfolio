import React, { Component } from 'react'
import data from "./Data.json";
export default class Projects extends Component {
  render() {
    return (
			<div>    
                <section className="colorlib-work" data-section="academic projects">
				    <div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent projects</h2>
						</div>
					</div>
					<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
						
					</div>
					<div className="row">
					{
						data.project.map((p, i) => {
            				return (
						<div  key={i} className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: p.img}}>
								<div className="desc">
									<div className="con">
										<h3><a href={p.url}>{p.title}</a></h3>
										<span><p>{p.desc} </p></span>
										<p className="icon">
											<span><a ><i className="icon-share3"></i></a></span>
											<span><a ><i className="icon-eye"></i> </a></span>
											<span><a ><i className="icon-heart"></i> </a></span>
										</p>
									</div>
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