import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const Contexto = createContext()

export const useCartContext = () => {
    const cartContext = useContext(Contexto)
    return cartContext
}

export const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])

    const addNewProduct = (product) => {
        const oldProduct = cart.find((currentProduct) => currentProduct.id === product.id)

        if (!oldProduct) {
            const newCart = [...cart, product]
            setCart(newCart)

        } else {
            const oldCart = cart.filter((currentProduct) => currentProduct.id !== product.id)
            const newProduct = { ...product, quantity: product.quantity + oldProduct.quantity }
            setCart([...oldCart, newProduct])
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const deleteProduct = (product) => {
        const newCart = cart.filter((currentProduct) => currentProduct.id !== product.id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => cart.reduce((acumulador, actProduct) => acumulador + actProduct.quantity, 0)

    console.log(cart);

    return (
        <Contexto.Provider value={{
            cart,
            addNewProduct,
            isInCart,
            clearCart,
            deleteProduct,
            totalPrice,
            totalProducts
        }}>
            {children}
        </Contexto.Provider>
    )
}
/*
import { useState, createContext, useEffect } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
        } else {
            const cartActualizado = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const productActualizado = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productActualizado
                } else {
                    return prod
                }
            })
            setCart(cartActualizado)
        }
    }
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    
    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    useEffect(() => {
        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
    }, [cart]) 

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart]) 
    
    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const clearCart = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getProductQuantity, getTotalQuantity, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )*/