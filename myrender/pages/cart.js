import Layout from './../component/layout/layout.js'
import details from './../../details'

class Cart extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			cart : []
		}

		this.singpro = this.singpro.bind(this)
		this.onClick = this.onClick.bind(this)

	}


	componentDidMount(){
        let pnu = JSON.parse( localStorage.getItem('cart') )
     
         if(pnu) {
             this.setState({
                 cart : pnu
             })
         }
		 
	  } 

	  onClick(e){
		  e.preventDefault()
		  let key = parseInt( e.target.name )
		  let oldcart = this.state.cart
		  oldcart.splice( key, 1)
		  this.setState({
			  cart : oldcart
		  })
		  localStorage.setItem('cart', JSON.stringify(this.state.cart) )
	  }
	  
	  singpro(){
		  return this.state.cart.map((pro , i)=>{
			  return(
				<div className="product-cart" key={i}>
				<div className="one-forth">
					<div className="product-img" style={{backgroundImage: `url(${pro.pic})`}}>
					</div>
					<div className="display-tc">
						<h3>{pro.pro}</h3>
					</div>
				</div>
				<div className="one-eight text-center">
					<div className="display-tc">
						<span className="price">${pro.price}</span>
					</div>
				</div>
				<div className="one-eight text-center">
					<div className="display-tc">
						<input type="number" id="quantity" name="quantity" className="form-control input-number text-center" 
						value={pro.qua} readOnly min="1" max="100" />
					</div>
				</div>
				<div className="one-eight text-center">
					<div className="display-tc">
						<span className="price">${(pro.price * pro.qua)}</span>
					</div>
				</div>
				<div className="one-eight text-center">
					<div className="display-tc">
						<a href="#" className="closed" name={i} onClick={this.onClick}></a>
					</div>
				</div>
			</div>
			  )
		  })
	  }

render(){ 
	console.log(this.state.cart)
	return (
		<Layout>
					<div className="container">
					<h1>{details.title}</h1>
					<p>{details.describtion}</p>
		
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
								{this.singpro()}
							
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
													<div className="col-md-3">
														<input type="submit" value="Apply Coupon" className="btn btn-primary" />
													</div>
												</div>
											</form>
										</div>
										<div className="col-md-3 col-md-push-1 text-center">
											<div className="total">
												<div className="sub">
													<p><span>Subtotal:</span> <span>$200.00</span></p>
													<p><span>Delivery:</span> <span>$0.00</span></p>
													<p><span>Discount:</span> <span>$45.00</span></p>
												</div>
												<div className="grand-total">
													<p><span><strong>Total:</strong></span> <span>$450.00</span></p>
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
	</Layout> )
}

}


export default Cart