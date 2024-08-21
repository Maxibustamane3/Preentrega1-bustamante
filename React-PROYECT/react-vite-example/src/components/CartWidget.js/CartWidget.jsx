import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
const widgetStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5px',
};

const badgeStyle = {
    backgroundColor: '#007bff',
    borderRadius: '50%',
    color: 'white',
    padding: '0.5px',
    fontSize: '0.8px',
};

return (
    <div style={widgetStyle}>
        <FaShoppingCart />
        <span style={badgeStyle}>5</span>
    </div>
);
}
export default CartWidget;
