import React from 'react';

const ItemListContainer = ({ greeting }) => {
const containerStyle = {
    padding: '2px',
    textAlign: 'center',
};

return (
    <div style={containerStyle}>
        <h2>{greeting}</h2>
    </div>
);
}
export default ItemListContainer;
