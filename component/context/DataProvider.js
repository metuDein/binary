'use client'
import { auth, db } from "@app/firebase/config";
import { doc, getDoc } from "firebase/firestore";

import { createContext, useState, useEffect } from "react";


const DataContext = createContext({})


export const DataProvider = ({ children }) => {

    // Initial state
    const [user, setUser] = useState(null)
    const [userDetails, setUserDetails] = useState(null)

    //Functions
    const fetchUserDetails = async () => {
        auth.onAuthStateChanged(async (user) => {
            const docRef = doc(db, "users", user?.uid)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setUserDetails(docSnap.data())
            } else {
                console.log("No such document! or no user loggged in");
            }
        })
    }

    useEffect(() => {
        fetchUserDetails()
    }, [])


    return (
        <DataContext.Provider
            value={{
                user,
                setUser,
                userDetails,
                setUserDetails,
            }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataContext