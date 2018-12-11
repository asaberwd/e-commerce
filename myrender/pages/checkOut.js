import Layout from './../component/layout/layout.js'
import {Link} from './../routes'
import {connect} from 'react-redux'

class checkOut extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            total : 0,
            creataccount : false,
            errors : {}
        }
        this.cartItems = this.cartItems.bind(this)
        this.toggleCheck = this.toggleCheck.bind(this)
        this.address = this.address.bind(this)
    }
    componentDidMount(){
        let tot = 0
        for(let i = 0; i < this.props.cartState.length;i++){
            tot += this.props.cartState[i].total
        }
        this.setState({
            total : tot
        })
    }

    cartItems(){
        return this.props.cartState.map(item =>{
            return(
                <li key={item._id}><span>{item.qua} x {item.pro}</span> <span>${item.total}</span></li>
            )
        })
    }

    toggleCheck(e){
        this.setState({
            [e.target.name] : e.target.checked

        })
    }

    address(type){
        return (
            <form method="post" className="colorlib-form">
            <h2>{type}</h2>
          <div className="row">
           <div className="col-md-12">
              <div className="form-group">
                  <label htmlFor="country">Select Country</label> *
                 <div className="form-field">
                     <i className="icon icon-arrow-down3"></i>
                    <select name="people" id="people" className="form-control">
                          <option value="#">Select country</option>
                        <option value="#">Alaska</option>
                        <option value="#">China</option>
                        <option value="#">Japan</option>
                        <option value="#">Korea</option>
                        <option value="#">Philippines</option>
                    </select>
                 </div>
              </div>
           </div>
           <div className="form-group">
                    <div className="col-md-6">
                        <label htmlFor="fname">First Name</label> *
                        <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lname">Last Name</label> *
                        <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="companyname">Company Name</label>
                    <input type="text" id="companyname" className="form-control" placeholder="Company Name" />
              </div>
           </div>
           <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="fname">Address</label> *
                    <input type="text" id="address" className="form-control" placeholder="Enter Your Address" />
              </div>
              <div className="form-group">
                    <input type="text" id="address2" className="form-control" placeholder="Second Address" />
              </div>
           </div>
           <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="companyname">Town/City</label>
                    <input type="text" id="towncity" className="form-control" placeholder="Town or City" />
              </div>
           </div>
           <div className="form-group">
                    <div className="col-md-6">
                        <label htmlFor="stateprovince">State/Province</label> *
                        <input type="text" id="fname" className="form-control" placeholder="State Province" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lname">Zip/Postal Code</label>
                        <input type="text" id="zippostalcode" className="form-control" placeholder="Zip / Postal" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-6">
                        <label htmlFor="email">E-mail Address</label> *
                        <input type="text" id="email" className="form-control" placeholder="State Province" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Phone">Phone Number</label> *
                        <input type="text" id="zippostalcode" className="form-control" placeholder="" />
                    </div>
                </div>
                {type === 'Billing Details' ? (<div><div className="form-group">
                                <div className="col-md-12">
                                    <div className="radio">
                                      <label><input type="checkbox" name="creataccount" checked={this.state.creataccount}
                                       onChange={this.toggleCheck} /> Create an Account? </label>

                                     {this.state.creataccount ? ( <div>
                                          <label>Password</label>
                                          <input type="password" id="pass"/>
                                          <label>Repeat Password</label>
                                          <input type="password" id="pass2"/>
                                      </div>): null}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="radio">
                                      <label><input type="checkbox" name="anotheraddress" checked={this.state.anotheraddress}
                                      onChange={this.toggleCheck} /> Ship to different address</label>

                                      {this.state.anotheraddress ? this.address('Shipping Details') : null}

                                    </div>
                                </div>
                            </div>  </div>): null}
      </div>
    </form>
        )
    }



    render(){
        
        return (
        <Layout>
            
            <div className="row row-pb-md">
                <div className="col-md-10 col-md-offset-1">
                    <div className="process-wrap">
                        <div className="process text-center active">
                            <p><span>01</span></p>
                            <h3>Shopping Cart</h3>
                        </div>
                        <div className="process text-center active">
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
            <div className="row">
                <div className="col-md-7">
                   {this.address('Billing Details')}

                </div>
                <div className="col-md-5">

                    <div className="cart-detail">
                        <h2>Cart Total</h2>
                        <ul>
                            <li>
                                <span>Subtotal</span> <span>${this.state.total}</span>
                                <ul>
                                    {this.cartItems()}
                                </ul>
                            </li>
                            <li><span>Shipping</span> <span>$15.00</span></li>
                            <li><span>Order Total</span> <span>${this.state.total +15}</span></li>
                        </ul>
                    </div>

                    <div className="cart-detail">
                        <h2>Payment Method</h2>

                        <div className="form-group">
                            <div className="col-md-12">
                                <div className="radio">
                                   <label><input type="radio" name="optradio" />Direct Bank Tranfer</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <div className="radio">
                                   <label><input type="radio" name="optradio" />Check Payment</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <div className="radio">
                                   <label><input type="radio" name="optradio" />Paypal</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <div className="checkbox">
                                   <label><input type="checkbox" value="" />I have read and accept the terms and conditions</label>
                                </div>
                            </div>
                        </div>

                    </div>

                        <div className="col-md-12">
                            <p><a href="#" className="btn btn-primary">Place an order</a></p>
                        </div>

                </div>
            </div>
    </Layout> )
    }
}

const mapStateToProps = (state)=>({
   cartState : state.cart.items
})

export default connect (mapStateToProps)(checkOut)