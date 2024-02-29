import { products } from "../../common/products/ProductsList";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Counter } from "../../common/counter/Counter";

export const ItemDetail = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { img, name, price, description } = product ?? {};

  /*const [product, setProduct] = useState(
    "../../common/products/ProductsList.js"
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setProduct(resp);
      setIsLoading(false);
    });
  }, [id]); */

  return (
    <div className="productContainer">
      {products.map((product) => {
        return (
          <Card style={{ width: "30rem" }} key={product.id}>
            <Card.Img src={product.img} alt={product.alt} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Card.Text>Description: {product.description} </Card.Text>
              <Counter />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
