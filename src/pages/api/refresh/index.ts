import type { NextApiRequest, NextApiResponse } from "next";
import { signInWithCustomToken } from "firebase/auth";
import { getAuth } from "firebase/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    async function refreshToken(customToken: string) {
        try {
            const user = await signInWithCustomToken(getAuth(), customToken);
            res.status(200).json({
                user,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error });
        }
    }
    const token = req.body.customToken as string;
    // const token = req.query.customToken as string;

    refreshToken(token);
}
