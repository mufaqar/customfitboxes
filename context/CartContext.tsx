'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

export type CartItem = {
  id: string
  name: string
  slug: string
  image: string
  quantity: number
  pricePerBox: number
  color: string
  stock: string
  dimensions: {
    length: number
    width: number
    depth: number
    unit: string
  }
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cart')
      if (stored) setItems(JSON.parse(stored))
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = useCallback((newItem: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id)
      if (existing) {
        return prev.map(i =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + newItem.quantity } : i
        )
      }
      return [...prev, newItem]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) return
    setItems(prev => prev.map(i => (i.id === id ? { ...i, quantity } : i)))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.pricePerBox * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
