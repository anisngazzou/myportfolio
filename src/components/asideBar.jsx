
import React, { Component } from 'react'
import data from './Data.json'
const socialMediaList = data.intro;
export default class Sidebar extends Component {
  render() {
    return (
      <div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
       	<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
			<div className="text-center">
				<div className="author-img" style={{backgroundImage: 'url(images/0.jpg)'}}/>
				<h1 id="colorlib-logo"><a href="index.html">Ngazou Anis</a></h1>
				<span className="position"><a >IT Student</a> in Tunisia</span>
				
			</div>
			<nav id="colorlib-main-menu" role="navigation" className="navbar">
				<div id="navbar" className="collapse">
					<ul>
						 <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
						{socialMediaList.map(s => (<li><a href="#" data-nav-section={s}>{s}</a></li>))}
					</ul>
				
				</div>
			</nav>

			<div className="colorlib-footer">
				
				<ul>
					<li><a href="https://www.facebook.com/nole.anis/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a></li>
					<li><a href="#"><i className="icon-twitter2"></i></a></li>
					<li><a href="https://www.instagram.com/ngazouanis/"target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li>
					<li><a href="https://www.linkedin.com/in/anis-ngazzou/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>
				</ul>
			</div>

		</aside>
      </div>
      </div>
    );
  }
  }
  
 