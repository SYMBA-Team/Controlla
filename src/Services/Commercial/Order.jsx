import { Grid, Divider } from "@mui/material";
export default function Order() {
    return (
        <Grid container>
            <Grid item sm={6} className="Back" />
            <Grid item sm={6} className="order">
                <h2>The order :</h2>
                <Grid container direction="row" item sm={12} justifyContent="space-between">
                    <h3>02 Cheese Burger</h3>
                    <h3>200DA</h3>
                </Grid>
                <Grid container direction="row" item sm={12} justifyContent="space-between">
                    <h3>03 Double cheese burger </h3>
                    <h3>540DA</h3>
                </Grid>
                <Grid container direction="row" item sm={12} justifyContent="space-between">
                    <h3>01 Beef Burger </h3>
                    <h3>200DA</h3>
                </Grid>
                <Divider />
                <Grid container direction="row" item sm={12} justifyContent="space-between">
                    <h3>Total </h3>
                    <h3>940DA</h3>
                </Grid>
            </Grid>
        </Grid>
    );
}
