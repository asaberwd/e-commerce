import {Link} from './../../routes'

 class Nav extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cart : []
        }
    }

    componentDidMount(){
        let cart = localStorage.getItem('cart')
        if(cart){ 
        this.setState({
            cart : JSON.parse(cart)
        })
    }
    }
     

    render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link route="index">
        <a className="navbar-brand" >Brandat</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
            <Link route="index">
            <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
            </Link>
            </li>

            <li className="nav-item">
            <Link route="cart">
                <a className="nav-link">Cart</a>
            </Link>
            </li>

            <li className="nav-item">
            <Link route="/" >
                <a className="nav-link">Men</a>
            </Link>
            </li>

            <li className="nav-item">
            <Link route="contact">
                <a className="nav-link">contact us</a>
            </Link>
            </li>

            <li className="nav-item">
            <Link route="checkOut">
                <a className="nav-link">check out</a>
            </Link>
            </li>

            <li className="nav-item">
            <Link route="about">
                <a className="nav-link">About Us</a>
            </Link>
            </li>

            <li className="nav-item">
            <Link route="cart"><a className="nav-link">
                <i className="icon-shopping-cart"></i> Cart [{this.props.cartlen || this.state.cart.length}] </a>
            </Link>
            </li>

            </ul>
            
        </div>
        </nav>
    )
    }
}

export default Nav

