import React, {useEffect, useState} from 'react'
import Product from './product'
import axios from 'axios'

const Cart = (props) => {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const products = JSON.parse(localStorage.getItem('currentProductDetails'))

    useEffect(() => {
        setProductName(products.product_name)
        setPrice(products.price)
    }, [])

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script")
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    async function makePayment() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res) {
            alert("Server error, Are you online?")
            return
        }
        
        const result = await axios.post('http://localhost:5000/payment/orders')

        if(!result) {
            alert("Server error. Are you online?")
            return
        }

        const { amount: id, order_id, currency} = result.data

        const options = {
            key: "rzp_test_ugVmg1hXmNJwKA",
            amount: amount.toString(),
            currency: currency,
            name: "Every-Commerce",
            description: "Sample Transaction",
            image: { logo },
            notes: {
                "billing_name": "TestBilling"
            },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    razorPaymentId: response.razorpay_payment_id,
                    razorPayOrderId: response.razorpay_order_id,
                    razorPaySignature: response.razorpay_signature,
                }
                const result = await axios.post("http://localhost:5000/payment/success", data)
                alert(result.data.msg)
            },
            prefill: {
                name: "Every-Commerce",
                email: "maheshmuttinti@gmail.com",
                contact: "9876543210"
            },
            theme: {
                color: "#61dafb"
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }
    return (
        <div>
            <h3>Your Cart</h3>
            <h4>Product Details</h4>
            <div>Product Name: {productName}</div>
            <div>Price: &#8377; {price}</div><br />
            <button className="btn btn-primary" onClick={makePayment}>
                Buy Order
            </button>
        </div>
    )
}

export default Cart