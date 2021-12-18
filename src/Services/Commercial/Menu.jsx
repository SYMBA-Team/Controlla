import { Grid } from "@mui/material";
import image1 from "../../images/Resturant/Bacon-Cheese.png";
import image2 from "../../images/Resturant/Burrito.png";
import image3 from "../../images/Resturant/Double-Cheese-Burger2.png";
import image4 from "../../images/Resturant/Double-Cheese-Burger.png";
import image5 from "../../images/Resturant/Grilled-Cheese-Sandwich.png";
import image6 from "../../images/Resturant/Hot-Dog.png";
function Card({ title, image, price }) {
    return (
        <>
            <div>{price}DA</div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </>
    );
}
const prods = [
    { title: "Cheese Burger", image: image1, price: 100 },
    { title: "Tacos", image: image2, price: 300 },
    { title: "Double chees Burger", image: image3, price: 180 },
    { title: "Beef Burger", image: image4, price: 200 },
    { title: "Sandwich", image: image5, price: 150 },
    { title: "Hot Dog", image: image6, price: 120 },
];
export default function Menu() {
    return (
        <Grid container container direction="row" wrap="wrap" justifyContent="center">
            {prods.map((prod) => (
                <Grid item sm={3} className="Card">
                    <Card {...prod} />
                </Grid>
            ))}
        </Grid>
    );
}
