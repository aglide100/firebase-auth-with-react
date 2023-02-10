import React from "react";

const Login = ({auth}:any) => {
    const onLogin = (e:any) => {
        auth.login(e.target.textContent).then(console.log);
    }

    return (
        <div>
            <li>
                <button onClick={onLogin}>Google</button>
            </li>
        </div>
    )
}

export default Login