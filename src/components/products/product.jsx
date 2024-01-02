import { useParams, useNavigate } from "react-router-dom";

export default function Product({ products }) {
  let { id } = useParams();
  const navigate = useNavigate();
  console.log(navigate);

  //   console.log("id", id);

  const mockBuyNow = () => {
    alert(
      "You pressed Buy Now! Congrats! Our sophisticated system is already charging your card and sending you your purchase. Let's go back to the home page!"
    );

    navigate("/candles");
  };

  const foundProduct = products.find((product) => product.id === id);

  if (foundProduct) {
    return (
      <section>
        <h5>{foundProduct.name}</h5>
        <img src={foundProduct.image} alt={foundProduct.name} />
        <p>{foundProduct.type}</p>
        <p>{foundProduct.style}</p>
        <p>${foundProduct.price}</p>
        <button onClick={mockBuyNow}>Buy Now!</button>
      </section>
    );
  }
  return <h1>No products found</h1>;
}
