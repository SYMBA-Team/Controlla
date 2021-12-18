import { Grid, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Menu from "./Menu";
import Order from "./Order";
import { PersonPinSharp as PersonPinSharpIcon } from "@mui/icons-material";

export default function MainCommercial() {
    const [tab, setTab] = useState(0);
    return (
        <Grid container direction="column" className="Container Commercial Food" wrap="nowrap" alignItems="center">
            <Tabs
                value={tab}
                onChange={(e, newValue) => {
                    setTab(newValue);
                }}
                indicatorColor={"transparent"}
                centered
            >
                <Tab label="MENU" />
                <Tab label="ORDER" />
                <Tab label="BILL" />
                <Tab icon={<PersonPinSharpIcon />} aria-label="person" />
            </Tabs>
            {(() => {
                switch (tab) {
                    case 0:
                        return <Menu />;
                    case 1:
                        return <Order />;
                }
            })()}
        </Grid>
    );
}
