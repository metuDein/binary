import { signOut } from "next-auth/react"
import { NextResponse } from "next/server"


export const GET = async (request) => {
    await signOut()
    return NextResponse.json({ success: 'signed out' }, { status: 200 })
} 