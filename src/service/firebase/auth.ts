import { firebaseAuth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

class Auth {
    async login(name: any) {
        try {
            const provider = this.getProvider(name);
            // return await signInWithRedirect(firebaseAuth, provider)
            return await signInWithPopup(firebaseAuth, provider).then();
        } catch (error) {
            console.error(error);
            alert(error);
            return null;
        }
    }
    async logout() {
        try {
            await firebaseAuth.signOut();
        } catch (error) {
            alert("error! ," + error);
        }
    }
    getProvider(name: any) {
        switch (name) {
            case "Google":
                return googleProvider;
            default:
                throw new Error(`${name} is unknown provider.`);
        }
    }
    onAuthChange = (callback: any) => {
        // firebaseAuth.onAuthStateChanged(user => {
        //     callback(user)
        // })
        firebaseAuth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user);
                // const serializedObj = JSON.stringify(clone(user));
                // console.log(serializedObj);
                const tokenResult = await user.getIdTokenResult(true);
                callback(user, tokenResult.token);
            } else {
                callback(null, null);
            }
        });
    };
}
export default Auth;
