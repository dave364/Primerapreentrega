import Item from "./Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(shoe => <Item key={shoe.id} info={shoe} />)
    );
}

export default ItemList;