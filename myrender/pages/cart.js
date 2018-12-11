import Layout from './../component/layout/layout.js'
import { connect } from 'react-redux'
import update from 'react-addons-update'; // ES6
import {Link} from './../routes'
import CartItems from './../component/cartItems'
import cookie from 'js-cookie'
import jwt from 'jsonwebtoken'


class Cart extends React.Component{

	constructor(props){
		super(props)
		this.k = jwt.decode(cookie.get('token'))
		

		this.state = {
			cart : [],
			total : 0,
			token : this.k
		}
		console.log(this.state.token)

	}

	componentDidMount(){
		

		setTimeout(()=>{

			let tot = 0
			for(let i = 0; i < this.props.cartState.length;i++){
				tot += this.props.cartState[i].total
			}
			this.setState({
				cart : this.props.cartState,
				total : tot
			})
		},1000)
        
		
	}
	  

render(){ 
	
	return (
		<Layout>
		
					<div className="colorlib-shop">
					<div className="container">
						<div className="row row-pb-md">
							<div className="col-md-10 col-md-offset-1">
								<div className="process-wrap">
									<div className="process text-center active">
										<p><span>01</span></p>
										<h3>Shopping Cart</h3>
									</div>
									<div className="process text-center">
										<p><span>02</span></p>
										<h3>Checkout</h3>
									</div>
									<div className="process text-center">
										<p><span>03</span></p>
										<h3>Order Complete</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="row row-pb-md">
							<div className="col-md-10 col-md-offset-1">
								<div className="product-name">
									<div className="one-forth text-center">
										<span>Product Details</span>
									</div>
									<div className="one-eight text-center">
										<span>Price</span>
									</div>
									<div className="one-eight text-center">
										<span>Quantity</span>
									</div>
									<div className="one-eight text-center">
										<span>Total</span>
									</div>
									<div className="one-eight text-center">
										<span>Remove</span>
									</div>
								</div>

								<CartItems />
							
							</div>
							<div className="col-md-6"></div>
							<div className="col-md-3">
								<input type="submit" value="Update Cart" className="btn btn-primary" />
							</div>
							
						</div>
						<div className="row">
							<div className="col-md-10 col-md-offset-1">
								<div className="total-wrap">
									<div className="row">
										<div className="col-md-8">
											<form action="#">
												<div className="row form-group">
													<div className="col-md-9">
														<input type="text" name="quantity" className="form-control input-number" 
														placeholder="Your Coupon Number..." />
													</div>
												</div>
											</form>
											<div className="col-md-3">
														<input type="submit" value="Apply Coupon" className="btn btn-primary" />
													</div>
										</div>
										<div className="col-md-3 col-md-push-1 text-center">
											<div className="total">
												<div className="sub">
													<p><span>Subtotal:</span> <span>${this.state.total}</span></p>
													<p><span>Delivery:</span> <span>$15.00</span></p>
													<p><span>Discount:</span> <span>$00.00</span></p>
												</div>
												<div className="grand-total">
													<p><span><strong>Total:</strong></span> <span>${this.state.total + 15}</span></p>
												</div>
											</div>

											<div>
											<Link route={this.state.token ? "c" : "checkOut"}><input type="submit" value="Proceed To Checkout" className="btn btn-primary" /></Link>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		
	</Layout> )
}

}

const mapStateToProps = (state)=>({
	cartState : state.cart
})




export default connect (mapStateToProps)(Cart)