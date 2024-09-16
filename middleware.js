export { default } from "next-auth/middleware"


export const config = {
    matcher:
        [
            '/user/profile',
            '/user/profile/mining',
            '/user/profile/traders',
            '/user/profile/history',
            '/user/profile/deposit',
            '/user/profile/withdrawal',
            '/user/profile/upgrade',
            '/user/profile/settings',
            '/user/profile/deposit/mining',
            '/user/profile/deposit/trading'
        ]
}