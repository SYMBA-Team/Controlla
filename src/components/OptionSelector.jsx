import { Grid, Typography, ToggleButton, Button } from "@mui/material";
import { useState, useContext } from "react";
import { Context as AuthContext } from "../context/auth";
import "./OptionSelector.css";
import { CheckCircleOutline as CheckCircleOutlineIcon, CheckCircle as CheckCircleIcon } from "@mui/icons-material";

export default function OptionSelector({ options, setSystem }) {
    const { SetInstall } = useContext(AuthContext);
    const [selected, setSelected] = useState(
        Array(options.length)
            .fill()
            .map((option, i) => Array(options[i].choices.length).fill(true))
    );
    return (
        <Grid
            className="Container OptionSelector"
            container
            alignItems="start"
            justifyContent="start"
            direction="column"
        >
            <Typography variant="h1" sx={{ margin: "0 auto!important" }}>
                Features
            </Typography>
            <Typography variant="p" sx={{ margin: "1.2em" }}>
                Pick the features you need
            </Typography>
            {options.map((option, i) => (
                <Grid
                    key={"option" + i}
                    container
                    wrap="nowrap"
                    alignItems="center"
                    justifyContent="start"
                    direction="row"
                >
                    <Grid item sm={3} className="Type">
                        {option.title}
                    </Grid>
                    {option.choices.map((choice, j) => (
                        <ToggleButton
                            key={"choices" + j}
                            value="check"
                            selected={selected[i][j]}
                            className="Selector"
                            onChange={() => {
                                setSelected((s) => {
                                    s[i][j] = !s[i][j];
                                    return [...s];
                                });
                            }}
                        >
                            {choice}
                            {selected[i][j] ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                        </ToggleButton>
                    ))}
                </Grid>
            ))}
            <Grid
                container
                wrap="nowrap"
                alignItems="center"
                justifyContent="start"
                direction="row"
                sx={{ margin: "auto 0 0" }}
            >
                <Button sx={{ margin: "auto auto 0 0", fontSize: "2.5em" }} onClick={() => {}}>
                    {"<< Previous"}
                </Button>

                <Button
                    sx={{ margin: "auto 0 0 auto", fontSize: "2.5em" }}
                    onClick={() => {
                        setSystem((s) => {
                            let ss = { ...s, options };
                            SetInstall(ss);
                            return ss;
                        });
                    }}
                >
                    {"Next >>"}
                </Button>
            </Grid>
        </Grid>
    );
}
