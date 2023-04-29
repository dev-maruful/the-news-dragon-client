import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Our terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        rerum magnam dignissimos nam voluptate! Dignissimos provident voluptate
        commodi repudiandae, sint necessitatibus nulla ipsam
        repellendusaspernatur, unde officiis laboriosam saepe asperiores a eius
        aperiam ad! Perspiciatis laudantium necessitatibus rem hic et
        voluptatibus, illum sunt iure impedit totam sed recusandae incidunt quas
        quidem deleniti laborum nihil atque cum. Ratione quasi molestiae optio
        laudantium veritatis animi blanditiis impedit, praesentium architecto
        eveniet qui voluptates, quas, natus et quod quae dicta velit dolores
        vero fuga! Sed, nam vel mollitia laborum quisquam iusto doloribus,
        tempore distinctio minima quis quae eos eaque debitis ullam maiores
        dolorum blanditiis.
      </p>
      <p>
        Go to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
