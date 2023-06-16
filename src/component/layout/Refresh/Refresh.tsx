import { useEffect, useState } from "react";

export default function refresh({ auth }: any) {
    const [result, setResult] = useState<string>();

    useEffect(() => {
        auth.onAuthChange((e1: any, e2: any) => {
            if (e2 != undefined) {
                setResult(e2);
            }
        });
    }, []);
    return <span>{result}</span>;
}
