import type { NextApiRequest, NextApiResponse } from "next";
import { signInWithCustomToken } from "firebase/auth";
import { getAuth } from "firebase/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    async function refreshToken(auth: any, customToken: string) {
        const user = await signInWithCustomToken(getAuth(), customToken);
        res.status(200).json({
            user,
        });
    }

    try {
        const token = req.query.customToken as string;

        refreshToken("auth", token);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
