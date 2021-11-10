import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from '../firebase';
import './PlanScreen.css';

function PlanScreen() {
    const [products, setProducts] = useState([]);
    const [subscription, setSubscription] = useState(null);

    const user=useSelector(selectUser)
    useEffect(() => {
        db.collection('products').where("active","==",true).get().then((snapshot) => {
           const product={};
           snapshot.forEach(async (productData) => {
               product[productData.id] = productData.data();

            const priceSnap=  await productData.ref.collection('prices').get();

            priceSnap.docs.forEach((price) => {
                product[productData.id].prices = {
                    priceId: price.id,
                    priceData: price.data()
                }
            })
           })
           setProducts(product)
        })
    },[])
    // console.log(products)

    useEffect(() => {
        db.collection('customers').doc(user.uid)
        .collection('subscriptions')
        .get()
        .then((querysnap) =>{
            querysnap.forEach(async (subscription) => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
            })
        })
    },[user.uid])
    console.log(subscription,"ddd")
    const loadCheckOut=async (priceId) => {
        const docRef= await db.collection('customers')
        .doc(user.uid)
        .collection('checkout_sessions')
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        })

        docRef.onSnapshot(async (snapshot) => {
               const {err,sessionId} = snapshot.data();

               if(err) {
                   alert(err.message)
               }

               if(sessionId) {
                   const stripe = await loadStripe('pk_test_51JtVGiSEWa9sKTU7mjRP2Jz5BwdnzsSIquJEW9aZU55fCktSsVc7I3MDyUkYFMgCRP2ZORlJsk4qk2No6gsYedNj00RWUrNw7A');
                    stripe.redirectToCheckout({sessionId})
                }
        })
    }
    return (
        <div className="planScreen">
            {
                Object.entries(products).map(([productId, productData]) => {
                    const isCurrentPkg=productData.name?.toLowerCase()
                    .includes(subscription?.role);

                    // console.log(isCurrentPkg,"isCurrentPkg")
                    return (
                        <>
                        <div key={productId} className={`planScreen__container ${isCurrentPkg && "planScreen__container-dis"}`}>
                            <div className="planScreen__containerinfo">
                                <h4>{productData.name}</h4>
                                <h5>{productData.description}</h5>
                            </div>
                            <button onClick={()=> !isCurrentPkg && loadCheckOut(productData.prices.priceId)}>
                               {isCurrentPkg ? 'Current Package' : 'Subscribe'}
                                </button>
                        </div>
                         </>
                    )
                })
            }

        </div>
    )
}

export default PlanScreen
