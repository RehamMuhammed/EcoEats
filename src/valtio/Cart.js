import { proxy } from "valtio";

export const cartStore = proxy({
    cart: [],
    isVisible: false,
    totalprice: 0
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

export function toggleCart(status) {
    cartStore.isVisible = status
}