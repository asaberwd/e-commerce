import Layout from './../component/layout/layout.js'
import {Link} from './../routes'
import axios from 'axios'

export default class Contact extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			firstName : '',
			lastName : '',
			email : '',
			subject : '',
			message : '',
			success : '',
			error : ''
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}


	onChange(e){

		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault()
		this.setState({
			success : 'sending your message...'
		})
		axios.post('http://localhost:8080/api/contactus',
		{
			"email":this.state.email,
			"firstName":this.state.firstName,
			"lastName": this.state.lastName,
			"subject": this.state.subject,
			"message": this.state.message
		})
		.then(res=>{
			console.log(res.data)
			this.setState({
				success : 'message sent successfully',
				firstName : '',
				lastName : '',
				email : '',
				subject : '',
				message : '',
			})
		})
		.catch(e =>{console.log(e)
			this.setState({
				error : `error sending your message , ${e}`
			})})
	}


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
							{this.state.success ? <h3>{this.state.success}</h3> : ''}
							<form onSubmit={this.onSubmit}>

								<div className="row form-group">
									<div className="col-md-6 padding-bottom">
										<label htmlFor="fname">First Name</label>
										<input type="text" id="fname" name="firstName" className="form-control" placeholder="Your firstname"
										value={this.state.firstName} onChange={this.onChange} />
									</div>
									<div className="col-md-6">
										<label htmlFor="lname">Last Name</label>
										<input type="text" id="lname" name="lastName" className="form-control" placeholder="Your lastname" 
										value={this.state.lastName} onChange={this.onChange}/>
									</div>
								</div>

								<div className="row form-group">
									<div className="col-md-12">
										<label htmlFor="email">Email</label>
										<input type="text" id="email" name="email" className="form-control" placeholder="Your email address"
										value={this.state.email} onChange={this.onChange} />
									</div>
								</div>

								<div className="row form-group">
									<div className="col-md-12">
										<label htmlFor="subject">Subject</label>
										<input type="text" id="subject" name="subject" className="form-control" placeholder="Your subject of this message"
										value={this.state.subject} onChange={this.onChange} />
									</div>
								</div>

								<div className="row form-group">
									<div className="col-md-12">
										<label htmlFor="message">Message</label>
										<textarea name="message" id="message" cols="30" rows="10" className="form-control" 
										value={this.state.message} onChange={this.onChange} placeholder="Say something about us"></textarea>
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