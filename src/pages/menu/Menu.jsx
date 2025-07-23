import React from 'react';
import Beverages from './Beverages';
import Biryani from './Biryani';
import Curries from './Curries';
import Desserts from './Desserts';
import Snacks from './Snacks';
import Tandoori from './Tandoori';

function Menu() {
    return (
        <>
            <Biryani />
            <Beverages />
            <Curries />
            <Desserts />
            <Snacks />
            <Tandoori />
        </>
    );
}


export default Menu;