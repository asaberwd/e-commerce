import Layout from './../component/layout/layout.js'
import details from './../../details'
import {Link} from './../routes'

export default class Contact extends React.Component {


    render(){

        return (

            <Layout>
                <div id="colorlib-contact">
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<h3>Contact Information</h3>
						<div className="row contact-info-wrap">
							<div className="col-md-3">
								<p><span><i className="icon-location"></i></span> 198 West 21th Street, <br/> Suite 721 New York NY 10016</p>
							</div>
							<div className="col-md-3">
								<p><span><i className="icon-phone3"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
							</div>
							<div className="col-md-3">
								<p><span><i className="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
							</div>
							<div className="col-md-3">
								<p><span><i className="icon-globe"></i></span> <a href="#">yoursite.com</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-10 col-md-offset-1">
						<div className="contact-wrap">
							<h3>Get In Touch</h3>
							<form action="#">
								<div className="row form-group">
									<div className="col-md-6 padding-bottom">
										<label htmlFor="fname">First Name</label>
										<input type="text" id="fname" className="form-control" placeholder="Your firstname" />
									</div>
									<div className="col-md-6">
										<label htmlFor="lname">Last Name</label>
										<input type="text" id="lname" className="form-control" placeholder="Your lastname" />
									</div>
								</div>

								<div className="row form-group">
									<div className="col-md-12">
										<label htmlFor="email">Email</label>
										<input type="text" id="email" className="form-control" placeholder="Your email address" />
									</div>
								</div>

								<div className="row form-group">
									<div className="col-md-12">
										<label htmlFor="subject">Subject</label>
										<input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
									</div>
								</div>

								<div className="row form-group">
									<div className="col-md-12">
										<label htmlFor="message">Message</label>
										<textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
									</div>
								</div>
								<div className="form-group text-center">
									<input type="submit" value="Send Message" className="btn btn-primary" />
								</div>
							</form>		
						</div>
					</div>
				</div>
			</div>

            </Layout>
        )
    }

}