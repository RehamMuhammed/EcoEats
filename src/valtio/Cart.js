import { proxy } from "valtio";

export const cartStore = proxy({
    cart: [],
    isVisible: false,
    totalprice: 0,
})

export const AddToCart = (item) => {
    cartStore.totalprice += +item.price
    for (let i = 0; i < cartStore.cart.length; i++) {
        if (cartStore.cart[i]._id === item._id) {
            cartStore.cart[i].quantity++;
            return;
        }
    }
    cartStore.cart.push({
        ...item,
        quantity: 1
    });
}

export const RemoveFromCart = (id) => {
    cartStore.cart = cartStore.cart.filter((item) => {
        if (item._id === id) {
            cartStore.totalprice -= item.price * item.quantity;
            return false;
        }
        return true;
    });

}

export const PlusOne = (id) => {
    // cartStore.totalprice += +item.price
    for (let i = 0; i < cartStore.cart.length; i++) {
        if (cartStore.cart[i]._id === id) {
            cartStore.cart[i].quantity++;
            cartStore.totalprice += +cartStore.cart[i].price
            return;
        }
    }

}


export const MinusOne = (id) => {
    // 
    for (let i = 0; i < cartStore.cart.length; i++) {
        if (cartStore.cart[i]._id === id) {
            cartStore.cart[i].quantity--;
            cartStore.totalprice -= +cartStore.cart[i].price
            return;
        }
    }
}


export function toggleCart(status) {
    cartStore.isVisible = status
}