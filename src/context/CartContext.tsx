import { createContext, useContext, useEffect, useMemo, useState, type ReactNode} from "react";
import type { productCar, productTp } from "../constants/types";

type CartContextType = {
    cart: productCar[];
    total: number;
    totalItens: number;
    addProduct: (product: productTp) => void;
    removeProduct: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext(){
    const context = useContext(CartContext);
    
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}

type CartProviderProps = {
    children: ReactNode;
}

export function CartProvider({children}: CartProviderProps){
    const [cart, setCart] = useState<productCar[]>(()=>{
        const storage = localStorage.getItem("cart");
        return storage ? JSON.parse(storage) : [];
    });

    const addProduct = (product: productTp) =>{
        setCart(prev =>{
            const exists = prev.find(item => item.id === product.id)
            if(exists){
                alert("Item já está no carinho")
                return prev;
            }
            return [...prev, { id: product.id, name: product.name, image: product.image, price: product.price, quantity: 1}]
        })
    }

    const removeProduct = (id: number) =>{
        setCart(prev => prev.filter(item => item.id !== id));
    }

    const updateQuantity = (id: number, quantity: number) =>{
        if (quantity < 1) return;
        setCart(prev => prev.map(item => item.id === id ? {...item, quantity: quantity} : item))
    }

    const clearCart = ()=> setCart([]);

    const total = useMemo(()=>{
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cart])

    const totalItens = useMemo(()=>{
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    },[cart])

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, total, totalItens,addProduct, removeProduct, updateQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}
