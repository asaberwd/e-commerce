import {Link} from './../routes'
import { connect } from 'react-redux'
import { addNewItem } from './../actions/cartActions'


class Product extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cartItems : [],
            pro : {_id:props.pro._id, price : props.pro.unitPrice,
                pic : this.props.pro.pictures[0], qua : 1 , pro : this.props.pro.productName,
                total : (this.props.pro.unitPrice * 1) }
        }

        this.onClick = this.onClick.bind(this)
    }

 componentDidMount(){
   
 }    


     //breif = this.props.pro.prodDescription.slice(0,120) 

     onClick(e){
        e.preventDefault()
        let pro = {_id:this.props.pro._id, price : this.props.pro.unitPrice,
            pic : this.props.pro.pictures[0], qua : 1 , pro : this.props.pro.productName,
            total : (this.props.pro.unitPrice * 1) }

        this.props.addItem(pro)

     }



    render(){
        return(
            <div className="col-md-4 text-center">
            <div className="product-entry">
            
                 <Link route="singleProduct" params={{ slug: this.props.pro.slug }}>
                <div className="product-img" style={{ backgroundImage : `url(${this.props.pro.pictures[0]})`}}>
                <p className="tag"><span className="new">{ this.props.pro.category ? this.props.pro.category.catName : this.props.pro.slug}</span></p>

                    <div className="cart">
                        <p>
                            <span className="addtocart" ><a href="" onClick={this.onClick}><i className="icon-shopping-cart"></i></a></span> 
                            <span><a href="product-detail.html"><i className="icon-eye"></i></a></span> 
                            <span><a href="#"><i className="icon-heart3"></i></a></span>
                            <span><a href="add-to-wishlist.html"><i className="icon-bar-chart"></i></a></span>
                        </p>
                    </div>
                </div>
                </Link>

                <div className="desc">
                    <h3>{this.props.pro.productName}</h3>
                    <p className="price"><span>{this.props.pro.unitPrice}</span></p>
                </div>

            </div>
            </div>



        )
    }
}




const mapDispatchToProps =(dispatch)=>({
    addItem : (item)=>(dispatch(addNewItem(item)))
  })

export default connect (null, mapDispatchToProps) (Product)