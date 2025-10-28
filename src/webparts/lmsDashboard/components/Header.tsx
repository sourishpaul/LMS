import * as React from 'react'

const Header = () => {
  return (
 <header className="main-header">
	<div className="d-flex align-items-center logo-box justify-content-start">	
		{/* <!-- Logo --> */}
		<a href="index.html" className="logo">
		  {/* <!-- logo--> */}
		  <div className="logo-mini w-30">
			  <span className="light-logo"><img src="../../../images/logo-letter.png" alt="logo"/></span>
			  <span className="dark-logo"><img src="../../../images/logo-letter-white.png" alt="logo"/></span>
		  </div>
		  <div className="logo-lg">
			  <span className="light-logo"><img src="../../../images/logo-dark-text.png" alt="logo"/></span>
			  <span className="dark-logo"><img src="../../../images/logo-light-text.png" alt="logo"/></span>
		  </div>
		</a>	
	</div>   
    {/* <!-- Header Navbar --> */}
    <nav className="navbar navbar-static-top">
      {/* <!-- Sidebar toggle button--> */}
	  <div className="app-menu">
		<ul className="header-megamenu nav">
			<li className="btn-group nav-item">
				<a href="#" className="waves-effect waves-light nav-link push-btn btn-primary-light ms-0" data-toggle="push-menu" role="button">
					<i data-feather="menu"></i>
			    </a>
			</li>
			<li className="btn-group d-lg-inline-flex d-none">
				<div className="app-menu">
					<div className="search-bx mx-5">
						<form>
							<div className="input-group">
							  <input type="search" className="form-control" placeholder="Search"/>
							  <div className="input-group-append">
								<button className="btn" type="submit" id="button-addon3"><i className="icon-Search"><span className="path1"></span><span className="path2"></span></i></button>
							  </div>
							</div>
						</form>
					</div>
				</div>
			</li>
		</ul> 
	  </div>
		
      <div className="navbar-custom-menu r-side">
        <ul className="nav navbar-nav">
			<li className="btn-group d-md-inline-flex d-none">
              <a href="javascript:void(0)" title="skin Change" className="waves-effect skin-toggle waves-light">
			  	<label className="switch">
					<input type="checkbox" data-mainsidebarskin="toggle" id="toggle_left_sidebar_skin"/>
					<span className="switch-on"><i data-feather="moon"></i></span>
					<span className="switch-off"><i data-feather="sun"></i></span>
				</label>
			  </a>				
            </li>
			<li className="dropdown notifications-menu btn-group">
				<a href="#" className="waves-effect waves-light btn-primary-light svg-bt-icon bg-transparent" data-bs-toggle="dropdown" title="Notifications">
					<i data-feather="bell"></i>
					<div className="pulse-wave"></div>
			    </a>
				<ul className="dropdown-menu animated bounceIn">
				  <li className="header">
					<div className="p-20">
						<div className="flexbox">
							<div>
								<h4 className="mb-0 mt-0">Notifications</h4>
							</div>
							<div>
								<a href="#" className="text-danger">Clear All</a>
							</div>
						</div>
					</div>
				  </li>
				  <li>
					{/* <!-- inner menu: contains the actual data --> */}
					<ul className="menu sm-scrol">
					  <li>
						<a href="#">
						  <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
						</a>
					  </li>
					  <li>
						<a href="#">
						  <i className="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
						</a>
					  </li>
					  <li>
						<a href="#">
						  <i className="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
						</a>
					  </li>
					  <li>
						<a href="#">
						  <i className="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
						</a>
					  </li>
					  <li>
						<a href="#">
						  <i className="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
						</a>
					  </li>
					  <li>
						<a href="#">
						  <i className="fa fa-user text-primary"></i> Nunc fringilla lorem 
						</a>
					  </li>
					  <li>
						<a href="#">
						  <i className="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
						</a>
					  </li>
					</ul>
				  </li>
				  <li className="footer">
					  <a href="#">View all</a>
				  </li>
				</ul>
			</li>
			<li className="btn-group nav-item d-xl-inline-flex d-none">
				<a href="#" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="" id="live-chat">
					<i data-feather="message-circle"></i>
			    </a>
			</li>
			
			
			<li className="btn-group nav-item d-xl-inline-flex d-none">
				<a href="#" data-provide="fullscreen" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen">
					<i data-feather="maximize"></i>
			    </a>
			</li>
			
			{/* <!-- User Account--> */}
			<li className="dropdown user user-menu">
				<a href="#" className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
					<div className="d-flex pt-1 align-items-center">
					<img src="../../../images/avatar/avatar-13.png" className="avatar rounded-circle bg-primary-light h-40 w-40 me-5" alt="" />

						<div style={{textAlign: "left"}} className="text-left me-10">
							<p className="pt-5 fs-14 mb-0 fw-500">Nikhil Darji</p>
							<small className="fs-10 mb-0 text-uppercase text-mute">Employee</small>
						</div>
					</div>
				</a>
			</li>		  			
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Header