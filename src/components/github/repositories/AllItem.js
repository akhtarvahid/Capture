import React from 'react';
import Item from '../repositories/Item';

const AllItem = (props) => {
    return (
       <div className="all-item">    
        <div className="cards-root">
        {props.repos.map(item=>
         <Item item={item} key={item.id}/>
        )}   
        </div>
      </div>
    )
};

export default AllItem;