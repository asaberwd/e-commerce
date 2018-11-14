import Product from './../component/product'


const Products = (props)=>(
    <section className="products-sec">

        <div className="row">
         { props.data.map((pro, key)=>{
            return <Product key={key} pro={pro} />
                  }) }
        </div>

    </section>
    
)

export default Products