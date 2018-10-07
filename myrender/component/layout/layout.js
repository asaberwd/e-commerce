import Navbar from './navbar'
import Myhead from './head'
import Footer from './footer'


const layout = (props)=>{
    return(
        <div>
            <Myhead title={props.title} desc={props.desc} img={props.img} />
            <Navbar cartlen={props.cartlen} />
            {props.children}
            <Footer/>
        </div>
    );
}

export default layout