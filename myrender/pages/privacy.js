import Layout from './../component/layout/layout'
import details from './../../details'

const privacy = ()=>{
    return (
    <Layout>
       
        <p>This policy covers how we use your personal information.
         We take your privacy SERIOUSLY and will take all measures to protect your personal information.</p>

    <h3>What Information Do We Collect?</h3>
    <p>We only collect information that we need that is related to your order. This includes your:</p>

    <ul>
    <li>Billing Address</li>
    <li>Shipping Address</li>
    <li>Email Address</li>
    <li>Credit Card Information</li>
    </ul>

    <p>In addition we also collect information on your IP address, browser type, 
    and Refer URL data. We use this data to prevent hacking attempts, help us know what web browsers people are using,
    and find out where our visitors are coming from so that we can improve our marketing.</p>

    <h3>How Is My Information Used?</h3>
    <p>Your information is only used to fill your order. We do not sell or redistribute your information to ANYONE.</p>

    <h3>Security and Storage</h3>
    <p>Only your order data billing, shipping, and order contents data is stored on our server.
    This information is encrypted using a Secure Sockets Layer before it is transmitted over a web server. We do not store your Credit
    Card data.</p>

    <h3>Cookies and Browser Information</h3>
    <p>Cookies are small files that reside on your computer and allow us to recognize you on your next visit or store your
    shopping cart contents. We use them only to track this information.</p>
    </Layout>
    )
}

export default privacy