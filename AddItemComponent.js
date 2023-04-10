import React from 'react';

const AddItemComponent = ({value, handleChange, addItem, inputIsEmpty}) => {
    return (
        <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form> 
    )
}

export default AddItemComponent