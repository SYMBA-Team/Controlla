import { Grid } from "@mui/material";
import "./Service.css";
export default function Service({ title, image, onClick }) {
    return (
        <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            className="Service"
            sm={3}
            sx={{ margin: "auto" }}
            onClick={onClick}
        >
            <h2>{title}</h2>
            <img src={image} alt={title} />
        </Grid>
    );
}
