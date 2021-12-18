import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Service from "../components/Service";
import HealthImage from "../images/Health.svg";
import ProductImage from "../images/Product.svg";
import JudgeImage from "../images/Judge.png";
import HealthCare from "../Services/HealthCare";
import Commercial from "../Services/Commercial";
import Governement from "../Services/Governement";
const Services = [
    {
        title: "Health Care",
        image: HealthImage,
        render: (prop) => <HealthCare {...prop} />,
    },
    {
        title: "Commercial",
        image: ProductImage,
        render: (prop) => <Commercial {...prop} />,
    },
    {
        title: "Governement",
        image: JudgeImage,
        render: (prop) => <Governement {...prop} />,
    },
];
const installation = ["SERVICES", "TYPE OF SERVICE"];

export default function Installation() {
    const [step, setStep] = useState(false),
        [system, setSystem] = useState({ service: "", serviceId: 0 });

    if (!step)
        return (
            <Grid className="Container" container alignItems="center" justifyContent="center">
                <Typography variant="h1">{installation[step]}</Typography>
                <Grid container wrap="nowrap" alignItems="center" justifyContent="center">
                    {Services.map((elm, i) => (
                        <Service
                            key={"Service" + i}
                            {...elm}
                            onClick={(e) => {
                                setSystem(() => ({ service: elm.title, serviceId: i }));
                                setStep(() => true);
                            }}
                        />
                    ))}
                </Grid>
            </Grid>
        );

    return Services[system.serviceId].render({ system, setSystem });
}
