import { faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemListContainerComponent = ({products}) => {


  return <div style={{display:'flex',color:'white',fontSize:'2rem',margin:'auto', flexWrap:'wrap',height:'80vh'}}>
{
      products.map((product) =>{
        return (
            <Card key={product.id} style={{ width: '18rem', margin:'10px' }}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Link to={`/item/${product.id}`}> Ir a detalle</Link>
              </Card.Body>
            </Card>
          ); 
      })
}


</div>
}

export default ItemListContainerComponent

