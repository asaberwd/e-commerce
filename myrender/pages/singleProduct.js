import fetch from 'isomorphic-unfetch'
import Layout from './../component/layout/layout.js'
import details from './../../details'
import RelatedPro from './../component/productByCat.js'
import {addNewItem} from './../actions/cartActions'
import Counter from './../component/counter'

import { connect } from 'react-redux'


class Mypost extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cart :[],
            qua : 1,           
        }

        this.onClick = this.onClick.bind(this)

        this.rr = {_id:props.data._id, price : props.data.unitPrice,
            pic : this.props.data.pictures[0], qua : this.state.qua , pro : this.props.data.productName,
            total : (this.props.data.unitPrice * 1) }

    }



    static async getInitialProps({ query }){

		const res = await fetch(`http://localhost:8080/api/products/${query.slug}`)
		const data = await res.json()
		const cat = await fetch(`http://localhost:8080/api/products/category/${data.category}`)
		const pro = await cat.json()
		let newcat = pro.filter(product => product._id !== data._id)
		console.log(newcat)

        return { data, newcat }
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
		let pro = {_id:this.props.data._id, price : this.props.data.unitPrice,
            		pic : this.props.data.pictures[0], qua : 1 , pro : this.props.data.productName,
					weight : this.props.data.weight ,total : (this.props.data.unitPrice * 1) }
		
		pro.qua = this.props.count

		
		this.props.addItem(pro)

    }


  

    render(){
    return(
            <Layout title={this.props.data.productName} desc={this.props.data.prodDescription} img={this.props.data.pictures[0]} 
            cartlen={this.state.cart.length} >
            

<div className="row row-pb-lg">
<div className="col-md-10 col-md-offset-1">
    <div className="product-detail-wrap">
        <div className="row">
                <div className="col-md-5">
                <div className="product-entry">
                    <div className="product-img" style={{backgroundImage: `url(${this.props.data.pictures[0]})`}}>
                        <p className="tag"><span className="sale">Sale</span></p>
                    </div>
                    <div className="thumb-nail">
                        <a href="#" className="thumb-img" style={{backgroundImage: `url(${this.props.data.pictures[0]})`}}></a>
                        <a href="#" className="thumb-img" style={{backgroundImage: `url(${this.props.data.pictures[0]})`}}></a>
                        <a href="#" className="thumb-img" style={{backgroundImage: `url(${this.props.data.pictures[0]})`}}></a>
                    </div>
                </div>
            </div>

            <div className="col-md-7">
                <div className="desc">
                    <h3>{this.props.data.productName}</h3>
                    <p className="price">
                        <span>{this.props.data.unitPrice} $</span> 
                        <span className="rate text-right">
                            <i className="icon-star-full"></i>
                            <i className="icon-star-full"></i>
                            <i className="icon-star-full"></i>
                            <i className="icon-star-full"></i>
                            <i className="icon-star-half"></i>
                            (74 Rating)
                        </span>
                    </p>
                    <p> {this.props.data.prodDescription} </p>
                    
                                      

			<Counter />                  
                </div>

                
                <div >
                <span className="btn btn-primary btn-addtocart" onClick={this.onClick}>
                    <i className="icon-shopping-cart"></i> Add to Cart
                </span>
                </div>
                
            </div>


        </div>
    </div>
</div>
</div>


        <div className="row">
					<div className="col-md-10 col-md-offset-1">
						<div className="row">
							<div className="col-md-12 tabulation">
								<ul className="nav nav-tabs">
									<li className="active"><a data-toggle="tab" href="#description">Description</a></li>
									<li><a data-toggle="tab" href="#manufacturer">Manufacturer</a></li>
									<li><a data-toggle="tab" href="#review">Reviews</a></li>
								</ul>
								<div className="tab-content">
									<div id="description" className="tab-pane fade in active">
										<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
										<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
										<ul>
											<li>The Big Oxmox advised her not to do so</li>
											<li>Because there were thousands of bad Commas</li>
											<li>Wild Question Marks and devious Semikoli</li>
											<li>She packed her seven versalia</li>
											<li>tial into the belt and made herself on the way.</li>
										</ul>
						         </div>
						         <div id="manufacturer" className="tab-pane fade">
						         	<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
										<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
								      
								   </div>
								   <div id="review" className="tab-pane fade">
								   	<div className="row">
								   		<div className="col-md-7">
								   			<h3>23 Reviews</h3>
								   			<div className="review">
										   		<div className="user-img" style={{backgroundImage: `url(../static/images/person1.jpg)`}}></div>
										   		<div className="desc">
										   			<h4>
										   				<span className="text-left">Jacob Webb</span>
										   				<span className="text-right">14 March 2018</span>
										   			</h4>
										   			<p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-half"></i>
										   					<i className="icon-star-empty"></i>
									   					</span>
									   					<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
										   			</p>
										   			<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
										   		</div>
										   	</div>
										   	<div className="review">
										   		<div className="user-img" style={{backgroundImage: `url(../static/images/person2.jpg)` }}></div>
										   		<div className="desc">
										   			<h4>
										   				<span className="text-left">Jacob Webb</span>
										   				<span className="text-right">14 March 2018</span>
										   			</h4>
										   			<p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-half"></i>
										   					<i className="icon-star-empty"></i>
									   					</span>
									   					<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
										   			</p>
										   			<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
										   		</div>
										   	</div>
										   	<div className="review">
										   		<div className="user-img" style={{backgroundImage: `url(../static/images/person3.jpg)` }}></div>
										   		<div className="desc">
										   			<h4>
										   				<span className="text-left">Jacob Webb</span>
										   				<span className="text-right">14 March 2018</span>
										   			</h4>
										   			<p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-half"></i>
										   					<i className="icon-star-empty"></i>
									   					</span>
									   					<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
										   			</p>
										   			<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
										   		</div>
										   	</div>
								   		</div>
								   		<div className="col-md-4 col-md-push-1">
								   			<div className="rating-wrap">
									   			<h3>Give a Review</h3>
									   			<p className="star">
									   				<span>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					(98%)
								   					</span>
								   					<span>20 Reviews</span>
									   			</p>
									   			<p className="star">
									   				<span>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-empty"></i>
									   					(85%)
								   					</span>
								   					<span>10 Reviews</span>
									   			</p>
									   			<p className="star">
									   				<span>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-empty"></i>
									   					<i className="icon-star-empty"></i>
									   					(98%)
								   					</span>
								   					<span>5 Reviews</span>
									   			</p>
									   			<p className="star">
									   				<span>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-empty"></i>
									   					<i className="icon-star-empty"></i>
									   					<i className="icon-star-empty"></i>
									   					(98%)
								   					</span>
								   					<span>0 Reviews</span>
									   			</p>
									   			<p className="star">
									   				<span>
									   					<i className="icon-star-full"></i>
									   					<i className="icon-star-empty"></i>
									   					<i className="icon-star-empty"></i>
									   					<i className="icon-star-empty"></i>
									   					<i className="icon-star-empty"></i>
									   					(98%)
								   					</span>
								   					<span>0 Reviews</span>
									   			</p>
									   		</div>
								   		</div>
								   	</div>
								   </div>
					         </div>
				         </div>
						</div>
					</div>
				</div>

            <RelatedPro pros={this.props.newcat} />


            </Layout>
    )
    }
}

const mapStateToProps = (state)=>({
	count : state.counter
})

const mapDispatchToProps =(dispatch)=>({
	addItem : (item)=>(dispatch(addNewItem(item)))
  })


export default connect (mapStateToProps, mapDispatchToProps)(Mypost)





