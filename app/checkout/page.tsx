'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import Image from 'next/image'

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()
  const [loading, setLoading] = useState(false)

  const shipping: number = 0
  const total = subtotal + shipping

  const [billing, setBilling] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBilling({ ...billing, [e.target.name]: e.target.value })
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ billing, items, subtotal, shipping, total }),
      })
      const data = await res.json()
      if (data.success) {
        alert('Order placed successfully!')
        clearCart()
      } else {
        alert(data.message || 'Something went wrong')
      }
    } catch {
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <section className='py-20'>
        <div className='container mx-auto text-center'>
          <h1 className='text-3xl font-semibold text-primary mb-4'>Your Cart is Empty</h1>
          <p className='text-gray-600 mb-8'>Looks like you haven&apos;t added any products yet.</p>
          <Link
            href='/all-products'
            className='inline-block text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 leading-[48px] rounded-md'
          >
            Browse Products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className='py-10'>
      <div className='container mx-auto'>
        <h1 className='text-3xl lg:text-4xl font-semibold text-primary mb-8'>Checkout</h1>

        <form onSubmit={handlePlaceOrder}>
          <div className='grid lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 space-y-6'>
              <div className='space-y-4'>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className='border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4'
                  >
                    <div className='relative w-full sm:w-24 h-24 rounded-md overflow-hidden bg-gray-100 shrink-0'>
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className='object-cover'
                        />
                      ) : (
                        <div className='w-full h-full flex items-center justify-center text-gray-400 text-sm'>
                          No Image
                        </div>
                      )}
                    </div>

                    <div className='flex-1 min-w-0'>
                      <h3 className='text-lg font-semibold text-gray-800'>Custom {item.name}</h3>
                      <div className='flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-1'>
                        <span>Starting Price: <strong className='text-gray-800'>${item.pricePerBox.toFixed(2)}</strong></span>
                        <span className='flex items-center gap-1 text-green-600'>
                          <span className='w-1.5 h-1.5 rounded-full bg-green-500 inline-block'></span>
                          In Stock
                        </span>
                        <span>Min Order: <strong className='text-gray-800'>100 units</strong></span>
                      </div>
                      <p className='text-sm text-gray-400 mt-0.5'>
                        {item.dimensions.length > 0 && `${item.dimensions.length}" x ${item.dimensions.width}" x ${item.dimensions.depth}"`}
                        {item.dimensions.length > 0 && ' | '}
                        {item.color} | {item.stock}
                      </p>

                      <div className='flex flex-wrap items-center justify-between gap-4 mt-3'>
                        <div className='flex items-center gap-3'>
                          <label className='text-sm text-gray-600'>Qty:</label>
                          <div className='flex items-center border border-gray-300 rounded-md'>
                            <button
                              type='button'
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className='px-3 py-1 text-gray-600 hover:bg-gray-100 transition'
                            >
                              -
                            </button>
                            <span className='px-4 py-1 text-sm font-medium border-x border-gray-300'>
                              {item.quantity}
                            </span>
                            <button
                              type='button'
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className='px-3 py-1 text-gray-600 hover:bg-gray-100 transition'
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className='text-right'>
                          <p className='text-sm text-gray-500'>
                            ${item.pricePerBox.toFixed(2)} / box
                          </p>
                          <p className='text-lg font-semibold text-primary'>
                            ${(item.pricePerBox * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type='button'
                      onClick={() => removeItem(item.id)}
                      className='self-start text-gray-400 hover:text-red-500 transition shrink-0 mt-1'
                      aria-label='Remove item'
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path fillRule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clipRule='evenodd' />
                      </svg>
                    </button>
                  </div>
                ))}

                <button
                  type='button'
                  onClick={clearCart}
                  className='text-sm text-gray-500 hover:text-red-500 transition underline'
                >
                  Clear Cart
                </button>
              </div>

              <div className='border border-gray-200 rounded-lg p-6'>
                <h2 className='text-xl font-semibold text-gray-800 mb-4'>Billing Details</h2>

                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label className='text-sm text-gray-600 mb-1 block'>First Name *</label>
                    <input
                      type='text'
                      name='firstName'
                      value={billing.firstName}
                      onChange={handleChange}
                      required
                      className='h-10 w-full border border-gray-300 rounded-md px-3 text-sm outline-none focus:border-primary transition'
                    />
                  </div>
                  <div>
                    <label className='text-sm text-gray-600 mb-1 block'>Last Name *</label>
                    <input
                      type='text'
                      name='lastName'
                      value={billing.lastName}
                      onChange={handleChange}
                      required
                      className='h-10 w-full border border-gray-300 rounded-md px-3 text-sm outline-none focus:border-primary transition'
                    />
                  </div>
                  <div>
                    <label className='text-sm text-gray-600 mb-1 block'>Email *</label>
                    <input
                      type='email'
                      name='email'
                      value={billing.email}
                      onChange={handleChange}
                      required
                      className='h-10 w-full border border-gray-300 rounded-md px-3 text-sm outline-none focus:border-primary transition'
                    />
                  </div>
                  <div>
                    <label className='text-sm text-gray-600 mb-1 block'>Phone *</label>
                    <input
                      type='tel'
                      name='phone'
                      value={billing.phone}
                      onChange={handleChange}
                      required
                      className='h-10 w-full border border-gray-300 rounded-md px-3 text-sm outline-none focus:border-primary transition'
                    />
                  </div>
                  <div>
                    <label className='text-sm text-gray-600 mb-1 block'>City *</label>
                    <input
                      type='text'
                      name='city'
                      value={billing.city}
                      onChange={handleChange}
                      required
                      className='h-10 w-full border border-gray-300 rounded-md px-3 text-sm outline-none focus:border-primary transition'
                    />
                  </div>
                  <div>
                    <label className='text-sm text-gray-600 mb-1 block'>State *</label>
                    <input
                      type='text'
                      name='state'
                      value={billing.state}
                      onChange={handleChange}
                      required
                      className='h-10 w-full border border-gray-300 rounded-md px-3 text-sm outline-none focus:border-primary transition'
                    />
                  </div>
                  <div>
                    <label className='text-sm text-gray-600 mb-1 block'>ZIP Code *</label>
                    <input
                      type='text'
                      name='zip'
                      value={billing.zip}
                      onChange={handleChange}
                      required
                      className='h-10 w-full border border-gray-300 rounded-md px-3 text-sm outline-none focus:border-primary transition'
                    />
                  </div>
                  <div>
                    <label className='text-sm text-gray-600 mb-1 block'>Country *</label>
                    <input
                      type='text'
                      name='country'
                      value={billing.country}
                      onChange={handleChange}
                      required
                      className='h-10 w-full border border-gray-300 rounded-md px-3 text-sm outline-none focus:border-primary transition'
                    />
                  </div>
                  <div className='md:col-span-2'>
                    <label className='text-sm text-gray-600 mb-1 block'>Order Notes</label>
                    <textarea
                      name='notes'
                      value={billing.notes}
                      onChange={handleChange}
                      rows={3}
                      className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary transition resize-none'
                      placeholder='Special instructions or notes for your order...'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:col-span-1'>
              <div className='border border-gray-200 rounded-lg p-6 bg-gray-50 sticky top-28'>
                <h2 className='text-xl font-semibold text-gray-800 mb-4'>Order Summary</h2>

                <div className='space-y-3 text-sm'>
                  {items.map((item) => (
                    <div key={item.id} className='flex justify-between text-gray-600'>
                      <span className='truncate mr-2'>Custom {item.name} × {item.quantity}</span>
                      <span>${(item.pricePerBox * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className='border-t border-gray-200 mt-4 pt-4 space-y-2'>
                  <div className='flex justify-between text-gray-600'>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-gray-600'>
                    <span>Shipping</span>
                    <span className='text-green-600 font-medium'>
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className='flex justify-between text-lg font-semibold text-gray-800 border-t border-gray-200 pt-2'>
                    <span>Total</span>
                    <span className='text-primary'>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  className='mt-6 w-full text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 rounded-md disabled:opacity-60'
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </button>

                <Link
                  href='/all-products'
                  className='mt-3 block text-center text-sm text-gray-500 hover:text-primary transition underline'
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
