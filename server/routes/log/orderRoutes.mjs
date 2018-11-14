import Order from './../../models/order.mjs'
import OrderProduct from './../../models/orderProduct.mjs'
import Product from './../../models/product.mjs'
import User from './../../models/product.mjs'


import generate from 'nanoid/generate'



export const viewAllOrders = async(req, res)=>{
    let orders = await Order.find().populate('user')
    try{
        if(!orders) return res.status(404).json('no orders found')
        res.json(orders)
    }catch(err){
        res.status(401).json(`errore is : ${err}`)
    }
}

// create order document and orderproduct documents

export const createNewOrder = async(req,res)=>{
    let items = req.body.items
    let k = 0 , tot = 0

    // ensure products price and weight are up to date
    // and get order total weight and price

    for(let i = 0 ; i < items.length; i++){
        let product = await Product.findById(items[i]._id)
        try{
            items[i].weight = product.weight
            items[i].price = product.unitPrice

            k += items[i].weight * items[i].qua
            tot += items[i].price * items[i].qua
        }catch(err){
            res.status(404).json('error finding your products')
            throw err
        }
        
    }

    //create new order

    let newOrder = new Order({
        orderId: generate('1234567890abcdefghimnABCDEFGHIMNOY',7) ,
        totalweight : k,
        totalprice : tot ,
        shipAddress : req.body.address,
        user : req.body.user
    })

    let saveOrder = await newOrder.save()
    try{
        console.log('order added')
       
    }catch(err){
        res.status(404).json('error finding your products')
        throw err   
    }

    // create new orderproduct document for each product in order

    items.map(async (item, i)=>{
        let newOrderProduct = new OrderProduct({
            order : saveOrder._id,
            user : saveOrder.user,
            product : item._id,
            quantity : item.qua,
            price : item.price,
            weight : item.weight,
            total : item.price * item.qua,
        })

        let orderProductSaved = await newOrderProduct.save()

         // add order number to product
        let updateProduct = await Product.findByIdAndUpdate( item._id,{$push:{'orders' : saveOrder._id} } , {new : true})

        try{
            console.log(`product number ${ i + 1 } was saved : ${orderProductSaved}`)
            console.log(`product len : ${updateProduct.orders.length}, userorders : ${updateUser}`)
        }catch(err){
            res.status(404).json('error saving order product ${i}')
            throw err 
        }
    })
    res.send(`order with products was saved : ${saveOrder}`)

}
