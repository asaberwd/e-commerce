
import Head from 'next/head'

const myhead = (props)=>{
    let title = props.title
    let desc = props.desc
    let img = props.img

    return(
        <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <title>E-commerce App</title>

        <meta name="description" content={props.desc} />
	    <meta name="keywords" content="" />
	    <meta name="author" content="" />
    
    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
      

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
        crossOrigin="anonymous"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" 
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" 
        crossOrigin="anonymous"></script>


        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"/>



    <meta property="og:title" content={props.title} />
	<meta property="og:image" content={props.img} />
	<meta property="og:url" content="" />
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content={props.desc} />
	<meta name="twitter:title" content={props.title} />
	<meta name="twitter:image" content={props.img} />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />


	<link rel="stylesheet" href="./../static/css/animate.css"/>

	<link rel="stylesheet" href="./../static/css/icomoon.css"/>

	<link rel="stylesheet" href="./../static/css/bootstrap.css"/>

	<link rel="stylesheet" href="./../static/css/magnific-popup.css"/>

	<link rel="stylesheet" href="./../static/css/flexslider.css" />

	<link rel="stylesheet" href="./../static/css/owl.carousel.min.css"/>

	<link rel="stylesheet" href="./../static/css/owl.theme.default.min.css"/>
	
	<link rel="stylesheet" href="./../static/css/bootstrap-datepicker.css"/>

	<link rel="stylesheet" href="./../static/fonts/flaticon/font/flaticon.css"/>

	<link rel="stylesheet" href="./../static/css/style.css"/>

	<script src="./../static/js/modernizr-2.6.2.min.js"></script>
  </Head>
        
    )
}

export default myhead