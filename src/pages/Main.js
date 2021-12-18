import Commercial from "../Services/Commercial/main";
import { useContext } from "react";
import { Context as AuthContext } from "../context/auth";
export default function Main() {
    const {
        state: { installed },
    } = useContext(AuthContext);
    switch (installed.service) {
        case "Commercial":
            return <Commercial />;
        default:
            return <h1>Not Added yet</h1>;
    }
}
