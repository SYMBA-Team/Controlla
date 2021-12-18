import { Typography, Grid } from "@mui/material";
import "./style.css";
import { useState } from "react";
import image1 from "../../images/Store/Book.png";
import image2 from "../../images/Store/Magazin.png";
import image3 from "../../images/Store/Resturant.png";
import image4 from "../../images/Store/Store.png";
import OptionSelector from "../../components/OptionSelector";
import Service from "../../components/Service";
const ServicesTypes = [
    { title: "SUPPER MARKET", image: image4 },
    {
        title: "RESTAURENT",
        image: image3,
        options: [
            { title: "Reservation", choices: ["ID Check", "Tickets"] },
            { title: "Food selection", choices: ["Size", "Price", "Quantity"] },
        ],
    },
    { title: "MAGAZINE", image: image2 },
    { title: "BOOK STORE", image: image1 },
];
export default function Commercial({ setSystem }) {
    const [step, setStep] = useState(-1);

    if (step === -1)
        return (
            <Grid className="Container Commercial" container alignItems="center" justifyContent="center">
                <Typography variant="h1">Commercial</Typography>
                <Grid container wrap="nowrap" alignItems="center" justifyContent="center">
                    {ServicesTypes.map((elm, i) => (
                        <Service
                            key={"Service" + i}
                            {...elm}
                            onClick={(e) => {
                                setSystem((s) => ({ ...s, serviceType: elm.title, serviceTypeId: i }));
                                setStep(() => i);
                            }}
                        />
                    ))}
                </Grid>
            </Grid>
        );
    else return <OptionSelector options={ServicesTypes[step].options} setSystem={setSystem} />;
}
