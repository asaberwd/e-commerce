import {Link} from './../../routes'
import { connect } from 'react-redux'
import {iniCart} from './../../actions/cartActions'

 class Nav extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cart : []
        }
    }

    componentDidMount(){

        let k = JSON.parse(localStorage.getItem('cart'))
        this.props.incart(k)
        
        let cart = localStorage.getItem('cart')
        if(cart){ 
            let obj = JSON.parse(cart)
            let itemsarr = obj.items
        this.setState({
            cart : itemsarr
        })
    }
    }
     

    render(){
    return(

    <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
        <div className="container">
        <div className="row">
        
            <div className="col-xs-2">
                <div id="colorlib-logo"><Link route="index">Store</Link></div>
            </div>

            <div className="col-xs-10 text-right menu-1" >
                <ul>

                <li><Link route="/">
                    <a >Home</a>
                </Link>
                </li>

                <li className="has-dropdown">
                    <a href="shop.html">Shop</a>
                        <ul className="dropdown">
                            <li><Link route="cart.html">Shipping Cart</Link></li>
                            <li><Link route="checkout.html">Checkout</Link></li>
                            <li><Link route="order-complete.html">Order Complete</Link></li>
                            <li><Link route="wishlist.html">Wishlist</Link></li>
                        </ul>
                </li>

                    <li className="nav-item">
                        <Link route="contact">
                            <a >contact us</a>
                        </Link>
                    </li>


                    <li>
                        <Link route="about">
                            <a>About Us</a>
                        </Link>
                    </li>

                    <li>
                        <Link route="cart">
                        <a >
                            <i className="icon-shopping-cart"></i> Cart [{this.props.cartState.items.length || 0 }] 
                        </a>
                        </Link>
                    </li>

                </ul>
            </div>

        </div>
        </div>
        </div>
    </nav> 
            
    )
    }
}

const mapStateToProps = (state)=>({
    cartState : state.cart
})

const mapDispatchToProps =(dispatch)=>({
    incart : (cat)=>(dispatch(iniCart(cat)))
  })

 

export default connect (mapStateToProps, mapDispatchToProps)(Nav)

