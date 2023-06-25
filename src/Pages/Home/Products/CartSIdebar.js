import React from 'react';

const CartSIdebar = ({ cartItem }) => {
    return (
        <div className="cart-sidebar">
            {cartItem.name}
        </div>
    );
};

export default CartSIdebar;