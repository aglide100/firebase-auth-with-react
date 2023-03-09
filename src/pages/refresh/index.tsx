import Auth from "@/service/firebase/auth";
import dynamic from "next/dynamic";

const Refresh = dynamic(
    () =>
        import("../../component/layout/Refresh/Refresh").catch((err) => {
            return () => <>Can't load {err}</>;
        }),
    {
        loading: () => <></>,
        ssr: false,
    }
);

export default function Home() {
    const auth = new Auth();

    return (
        <div>
            {/* <Logout onLogOut={auth.logout}></Logout> */}
            <Refresh auth={auth}></Refresh>
        </div>
    );
}
