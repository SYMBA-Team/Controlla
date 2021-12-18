import createDataContext from "./createDataContext";
import api from "../Api";

const authReducer = (state, action) => {
    switch (action.type) {
        case "signin":
            return {
                ...state,
                user: action.payload.user,
            };
        case "logout":
            return {
                user: null,
            };
        case "add_error_signin":
            return { ...state, signinError: action.payload };
        case "clear_error_signIn":
            return { ...state, signinError: [] };
        case "set_loading":
            return { ...state, loading: action.payload };
        case "set_checking":
            return { ...state, checking: action.payload };
        case "set_Installed":
            return { ...state, installed: action.payload };

        default:
            return state;
    }
};
const signin =
    (dispatch) =>
    async ({ userName, password }) => {
        try {
            dispatch({ type: "set_loading", payload: true });
            const response = await api.post("/auth", {
                userName,
                password,
            });
            dispatch({ type: "signin", payload: response.data });
            dispatch({ type: "clear_error_signIn" });
        } catch (err) {
            dispatch({
                type: "add_error_signin",
                payload: err.response.data.errors,
            });
        } finally {
            dispatch({ type: "set_loading", payload: false });
        }
    };
const CheckInstall = (dispatch) => async () => {
    try {
        dispatch({ type: "set_checking", payload: true });
        await Promise.all([
            api
                .get("/")
                .then((res) => {
                    dispatch({ type: "set_Installed", payload: res.data });
                })
                .catch(() => {
                    dispatch({ type: "set_Installed", payload: null });
                }),
            api
                .get("/auth")
                .then((response) => {
                    dispatch({ type: "signin", payload: response.data });
                })
                .catch((err) =>
                    dispatch({
                        type: "add_error_signin",
                        payload: err.response.data.errors,
                    })
                ),
        ]).finally(() => dispatch({ type: "set_checking", payload: false }));
    } catch (err) {
        console.error(err);
    }
};
const SetInstall = (dispatch) => async (system) => {
    dispatch({ type: "set_checking", payload: true });
    api.post("/", system)
        .then(() => dispatch({ type: "set_Installed", payload: system }))
        .catch((err) => dispatch({ type: "set_Installed", payload: null }))
        .finally(() => dispatch({ type: "set_checking", payload: false }));
};

const logout = (dispatch) => () => {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
};

const clearErrorSignin = (dispatch) => () => {
    dispatch({ type: "clear_error_signin" });
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signin,
        logout,
        clearErrorSignin,
        CheckInstall,
        SetInstall,
    },
    {
        user: null,
        loading: false,
        checking: false,
        signinError: [],
        installed: null,
        system: null,
    }
);
