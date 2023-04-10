import React from "react";

const DeleteItemComponent = ({deleteLastItem, noItemsFound}) => {
    return (
        <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button> 
    )
}

export default DeleteItemComponent;