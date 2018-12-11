import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {

  componentDidMount(){
    let k = JSON.parse(localStorage.getItem('cart'))
    if (k === null)localStorage.setItem('cart','{}')
}


  render () {
    const {Component, pageProps, reduxStore} = this.props
    reduxStore.subscribe(()=>{
      let storecart = reduxStore.getState().cart
      console.log(reduxStore.getState().cart,"ramy")
      localStorage.setItem('cart', JSON.stringify(storecart) )

    })
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)