import { faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                <Button variant="primary">Ir a detalle</Button>
              </Card.Body>
            </Card>
          ); 
      })
}


</div>
}

export default ItemListContainerComponent

