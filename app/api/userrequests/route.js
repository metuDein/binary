import { dbConn } from "@utils/database";
import User from "@models/users";
import { NextResponse } from "next/server";


export const PATCH = async (req, res) => {
    await dbConn()
    try {
        const { id, username, password, wallet, phoneNumber } = await req.json()
        const user = await User.findOne({ _id: id }).exec()
        console.log(user);

        if (!user) {
            return new NextResponse({ status: 404, body: 'User not found' })
        }

        if (username) user.username = username
        if (password) user.password = password
        if (wallet) user.wallet = wallet
        if (phoneNumber) user.phoneNumber = phoneNumber

        const result = await user.save()

        return NextResponse.json({ message: 'user updated' }, { status: 200, body: result })


    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "user update failed" }, { status: 500 })
    }
}