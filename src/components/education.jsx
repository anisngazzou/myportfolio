import React, { Component } from 'react'

export default class Etude extends Component {
  render() {
    return (
        <div>
            <section className="colorlib-education" data-section="education">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Education</span>
							<h2 className="colorlib-heading animate-box">Education</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div className="fancy-collapse-panel">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingOne">
									        <h4 className="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Engineering Degree Of Computer Science </a>
									        </h4>
									    </div>
									    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									         <div className="panel-body">
									            <div className="row">
										      		<div className="col-md-6">
										      			<p><strong>09/2016 - Present</strong> </p>
										      		</div>
										      		<div className="col-md-6">
										      			<p><strong>Polytechnic School of Sousse</strong><img src="https://polytecsousse.tn/wp-content/uploads/2019/08/poly_logo.png" alt="im1" style={{width:'70px',paddingLeft: '18px'}}/></p>
														  <p><strong>EUR-ACE </strong>Accreditation<img src="https://polytecsousse.tn/wp-content/uploads/2019/07/logo_eurace_2.png" alt="im2" style={{width:'170px',paddingLeft: '68px'}}/></p>
										      		</div>
										      	</div>
									         </div>
									    </div>
									</div>
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingTwo">
									        <h4 className="panel-title">
									            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Preparatory cycle</a>
									        </h4>
									    </div>
									    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
									        <div className="panel-body">
											<div className="row">
										      		<div className="col-md-6">
											<p><strong>09/2012 - 06/2015</strong> </p>
											</div>
											<div className="col-md-6">
											
														<p><strong>Preparatory Institute for Engineering Studies of Monastir</strong></p>
														<p><strong>Mathematical and technological specialty</strong></p>
													
											</div>
													
									        </div>
											</div>
									    </div>
									</div>
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingThree">
									        <h4 className="panel-title">
									            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Baccalaureate Technical Sciences</a>
									        </h4>
									    </div>
									    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
									        <div className="panel-body">
											<div className="row">
										      		<div className="col-md-6">
											<p><strong>09/2009–06/2012</strong> </p>
											</div>
											<div className="col-md-6">
											
														<p><strong>Othman Chatti Msaken High School</strong><img src="https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-9/14457359_772857109520630_7242783371762657977_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=2Gq03HL830sAX9pBMne&_nc_ht=scontent.fnbe1-1.fna&oh=07fa8c5ea534c1c766c1c126c602672a&oe=5F3B6A93" alt="im3" style={{width:'100px',paddingLeft: '15px'}}/></p>
														<p><strong>Technological specialty</strong></p>
													
											</div>
													
									        </div>
											</div>
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
