import { Route, Routes } from "react-router-dom";
import Installation from "./pages/Installation";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import { useContext, useEffect, useState } from "react";
import { LinearProgress, Snackbar, Alert, AlertTitle, Typography, Divider } from "@mui/material";
import { Context as AuthContext } from "./context/auth";
export default function Router() {
    const {
        state: { user, installed, checking, signinError },
        CheckInstall,
        clearErrorSignin,
    } = useContext(AuthContext);
    useEffect(() => {
        CheckInstall();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const [open, setOpen] = useState();

    useEffect(() => {
        if (signinError) setOpen(true);
    }, [signinError]);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
        setTimeout(clearErrorSignin, 0.1);
    };
    console.log(installed);
    if (checking)
        return (
            <div className="Loading">
                <LinearProgress color="success" />
                Loading
            </div>
        );
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                open={open && signinError.length > 0}
                autoHideDuration={10000}
                onClose={handleClose}
                style={{ maxWidth: "35%" }}
            >
                <Alert severity="error" onClose={handleClose}>
                    <AlertTitle>
                        <strong>Error</strong>
                    </AlertTitle>
                    {signinError
                        ? signinError.map((e, i) =>
                              i !== signinError.length - 1 ? (
                                  <div key={i}>
                                      <Typography style={{ margin: "5px 0" }}>{e.msg}</Typography>
                                      <Divider />
                                  </div>
                              ) : (
                                  <div key={i}>
                                      <Typography style={{ margin: "5px 0" }}>{e.msg}</Typography>
                                  </div>
                              )
                          )
                        : null}
                </Alert>
            </Snackbar>
            <Routes>
                <Route exact path="/" element={installed ? <Main /> : user !== null ? <Installation /> : <Login />} />
                <Route exact path="/Login" element={user !== null ? <Main /> : <Login />} />
                <Route exact path="/Admin" element={user !== null ? <Admin /> : <Login />} />
            </Routes>
        </>
    );
}
