import { connect } from 'react-redux'
import {iniCounter, addCounter, minCounter} from './../actions/counterActions'


class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            counter : 1
        }

        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)

    }

    componentDidMount(){
        this.props.initial()
    }


    inc(e){
        e.preventDefault()
        let co = this.state.counter
        this.props.add()
            this.setState({
                counter : co + 1
            })

    }

    dec(e){
        e.preventDefault()
        let de = this.state.counter
        if(de === 1) return 0
        this.props.min()
        this.setState({
            counter : de - 1
        })

    }

    render(){
        return(
            <div className="row row-pb-sm">
                    <div className="col-md-4">
                        <div className="input-group">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn" name="minus"  data-type="minus" data-field=""
                             onClick={this.dec}>
                            <i className="icon-minus2"></i>
                            </button>
                        </span>

                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value={this.state.counter} 
                           min="1" max="100" readOnly />

                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn" name="plus" data-type="plus" data-field=""
                            onClick={this.inc}>
                            <i className="icon-plus2"></i>
                            </button>
                        </span>
                         </div>
                    </div>
                    </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>({
    initial : ()=>(dispatch(iniCounter())),
	add : ()=>(dispatch(addCounter())),
    min : ()=>(dispatch(minCounter())),
  })


export default connect (null, mapDispatchToProps)(Counter)