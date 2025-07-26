import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'

// Client-side Stripe instance
export const getStripe = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  )
  return stripePromise
}

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

// Subscription tier configurations
export const SUBSCRIPTION_TIERS = {
  basic: {
    name: 'Basic',
    description: 'Access to basic content',
    features: ['Basic content access', 'Monthly posts', 'Community access'],
    stripePriceId: process.env.STRIPE_BASIC_PRICE_ID,
  },
  premium: {
    name: 'Premium',
    description: 'Access to premium content and perks',
    features: ['All basic features', 'Premium content', 'Direct messaging', 'Early access'],
    stripePriceId: process.env.STRIPE_PREMIUM_PRICE_ID,
  },
  vip: {
    name: 'VIP',
    description: 'Full access with exclusive benefits',
    features: ['All premium features', 'VIP exclusive content', '1-on-1 video calls', 'Custom requests'],
    stripePriceId: process.env.STRIPE_VIP_PRICE_ID,
  },
}

// Creator plan configurations
export const CREATOR_PLANS = {
  starter: {
    name: 'Starter',
    price: 0,
    stripePriceId: null, // Free plan
    features: [
      'Up to 100 subscribers',
      '5GB storage',
      'Basic analytics',
      'Email support',
      '10% platform fee'
    ]
  },
  pro: {
    name: 'Pro',
    price: 2900, // $29.00 in cents
    stripePriceId: process.env.STRIPE_PRO_PLAN_PRICE_ID,
    features: [
      'Up to 10K subscribers',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      '5% platform fee'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 9900, // $99.00 in cents
    stripePriceId: process.env.STRIPE_ENTERPRISE_PLAN_PRICE_ID,
    features: [
      'Unlimited subscribers',
      '1TB storage',
      'White-label platform',
      '24/7 support',
      '2% platform fee'
    ]
  }
}

// Helper function to format price
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100)
}

// Helper function to create checkout session
export const createCheckoutSession = async (priceId: string, customerId?: string) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer: customerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: {
        priceId,
      },
    })

    return session
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

// Helper function to create customer
export const createCustomer = async (email: string, name?: string) => {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
    })

    return customer
  } catch (error) {
    console.error('Error creating customer:', error)
    throw error
  }
}

// Helper function to get customer subscriptions
export const getCustomerSubscriptions = async (customerId: string) => {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
    })

    return subscriptions.data
  } catch (error) {
    console.error('Error fetching subscriptions:', error)
    throw error
  }
}

// Helper function to cancel subscription
export const cancelSubscription = async (subscriptionId: string) => {
  try {
    const subscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    })

    return subscription
  } catch (error) {
    console.error('Error canceling subscription:', error)
    throw error
  }
}

// Webhook signature verification
export const verifyWebhookSignature = (
  payload: string | Buffer,
  signature: string
) => {
  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
    return event
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    throw error
  }
}
