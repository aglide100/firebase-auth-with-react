import { useRouter } from "next/router";
import React from "react";
import GoogleBtn from "../../atom/GoogleBtn/GoogleBtn";
import firebase from "firebase/app";
const Login = ({ auth }: any) => {
    const router = useRouter();

    const onLogin = (e: any) => {
        auth.login(e.target.textContent).then((res: any) => {
            // console.log(res)
            localStorage.setItem("UserCredential", JSON.stringify(res));

            router.push({
                pathname: "/refresh",
            });
        });
    };

    return (
        <div
            style={{
                width: "full",
                height: "full",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginTop: "10%",
                    width: "390px",
                    height: "450px",
                    borderRadius: "10px",
                    border: "1px",
                    boxShadow: "0 5px 10px 0 rgb(0 0 0 / 10%)",
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: "20%" }}>
                    Hello
                </h1>
                <div
                    style={{
                        width: "full",
                        height: "full",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "2px",
                            marginBottom: "2px",
                        }}
                    >
                        <GoogleBtn onClick={onLogin}></GoogleBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
