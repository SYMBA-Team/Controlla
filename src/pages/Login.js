import { Grid, Typography, Paper } from "@mui/material";
import borne from "../images/borne.png";
import { Context as AuthContext } from "../context/auth";
import { useContext, useState } from "react";
import "./Login.css";
export default function Login() {
    const {
        state: { loading },
        signin,
    } = useContext(AuthContext);
    const [crds, setCrds] = useState({ userName: "", password: "" });
    return (
        <Grid container className="Login">
            <Grid sm={6} container className="leftSide" direction="column" justifyContent="center" alignItems="center">
                <h1>EVERYWHERE</h1>
                <img src={borne} alt="Borne project" />
                <h3 style={{ margin: "2em auto" }}>
                    <span>Powered by</span> @SYMBA
                </h3>
            </Grid>
            <Grid container sm={6} direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h1" align="center">
                    Welcome
                </Typography>
                <Typography variant="p" align="center" sx={{ margin: "1em auto" }}>
                    You have to login to setup your system
                </Typography>
                <Paper sx={{ margin: "0.5em auto", borderRadius: "2em", overflowX: "hidden" }}>
                    <input
                        onChange={(e) => {
                            setCrds((d) => {
                                return { ...d, userName: e.target.value };
                            });
                        }}
                        type="text"
                        placeholder="UserName"
                        autoComplete="username"
                        value={crds.userName}
                    />
                </Paper>
                <Paper sx={{ margin: "0.5em auto", borderRadius: "2em", overflowX: "hidden" }}>
                    <input
                        onChange={(e) => {
                            setCrds((d) => {
                                return { ...d, password: e.target.value };
                            });
                        }}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={crds.password}
                    />
                </Paper>
                <Paper sx={{ margin: "0.5em auto", borderRadius: "2em", overflowX: "hidden" }}>
                    <button
                        onClick={(e) => {
                            signin(crds);
                        }}
                        disable={`${loading}`}
                    >
                        Log In
                    </button>
                </Paper>
            </Grid>
        </Grid>
    );
}
