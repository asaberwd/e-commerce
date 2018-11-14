

const Related = (props)=> { 
    if(props.pros.length > 0){
        return ( 
    <div className="colorlib-shop">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 text-center colorlib-heading">
						<h2><span> Products You May Like </span></h2>
						<p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<div className="row">

                { props.pros.map((pro, i)=>{
                        return <Products pro={pro} key={i}/>
                    }) }

				
					
				</div>
			</div>
	</div>
   
)}else{ return(<div></div>)} }


const Products = (props)=> ( 

    <div className="col-md-3 text-center">
    <div className="product-entry">
            <div className="product-img" style={{backgroundImage: `url(${props.pro.pictures[0]})`}}>
                            <p className="tag"><span className="new">New</span></p>
                            <div className="cart">
                                <p>
                                    <span className="addtocart"><a href="#"><i className="icon-shopping-cart"></i></a></span> 
                                    <span><a href="product-detail.html"><i className="icon-eye"></i></a></span> 
                                    <span><a href="#"><i className="icon-heart3"></i></a></span>
                                    <span><a href="add-to-wishlist.html"><i className="icon-bar-chart"></i></a></span>
                                </p>
                            </div>
            </div>

            <div className="desc">
                    <h3><a href="shop.html">{props.pro.productName}</a></h3>
                    <p className="price"><span>${props.pro.unitPrice}</span></p>
            </div>
    </div>
    </div>
    )

    export default Related
