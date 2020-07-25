import React, { Component } from 'react'
import data from "./Data.json";
export default class Skills extends Component {
  render() {
    return (
        <div>

		<section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">continue to study and learn new skills</span>
                    <h2 className="colorlib-heading animate-box">My Skills</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
    <p>{data.skills}</p>
                </div>
                {
						data.sk.map((s, i) => {
            				return (

                <div key={i} className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                    <div className="progress-wrap">
                            <h3>{s.name}</h3>
                        <div className="progress">
                             <div className={s.class} role="progressbar" aria-valuenow={s.val}
                              aria-valuemin="0" aria-valuemax="100" style={{width:s.val+"%"}}>
                            <span>{s.val}%</span>
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