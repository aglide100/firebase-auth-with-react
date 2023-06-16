import { useEffect, useState } from "react";

export default function credential(props: any) {
    const [result, setResult] = useState<string>();

    useEffect(() => {
        const res = localStorage.getItem("UserCredential");
        if (res != undefined) {
            setResult(res);
        }
    }, []);
    return <>{result}</>;
}
