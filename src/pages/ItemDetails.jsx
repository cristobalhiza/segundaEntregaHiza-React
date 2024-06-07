import React from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ImageGallery from "../components/ImageGalleryComponent/ImageGalleryComponent";

const ItemDetailsContainer = () => {
  const { itemId } = useParams();
  const { product, loading, error } = useProductDetails(itemId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <ImageGallery images={product.images} />
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
        <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
        <ListGroup.Item>Descuento: {product.discountPercentage}%</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Comprar Ahora</Card.Link>
        <Card.Link href="#">Agregar al carrito</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailsContainer;