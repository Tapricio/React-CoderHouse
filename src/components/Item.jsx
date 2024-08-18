import React from "react";  

const Item = ({array}) => ( 
<ul>
  {
    array.map((item,index) => (
        <li key={index}>item {item}, index {index}</li>
      )
    )
  }
</ul>
)

export default Item