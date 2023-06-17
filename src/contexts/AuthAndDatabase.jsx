import React, { useContext, useEffect, useState, createContext } from 'react';
import { auth, database } from '../../firebase';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs, deleteDoc, setDoc, doc } from "firebase/firestore";
const AuthAndDatabase = createContext();



export function useAuth() {
    return useContext(AuthAndDatabase)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(false);




    async function deleteSupplierFromDatabase(supplier) {
        try {
            await deleteDoc(doc(database, 'suppliers', supplier.businessName))
        } catch (error) {
            console.error('failed to delete supplier from database: ' + error)
        }
    }



    async function getSuppliersFromDatabase() {
        try {
            const querySnapshot = await getDocs(collection(database, 'suppliers'));
            const suppliers = querySnapshot.docs.map((doc) => doc.data());
            return suppliers;
        } catch (error) {
            console.error(`could not receive suppliers data from database: ${error}`);
        }
    }




    async function addSupplierToDatabase(supplier) {
        try {
            await setDoc(doc(database, 'suppliers', supplier.businessName), {
                ...supplier,
            })
        } catch (error) {
            console.error('failed to add supplier to database: ' + error)
        }
    }


    async function checkIfAdmin(user) {
        if (user) {
            try {
                const queryObject = query(collection(database, 'admin'), where('email', '==', user.email))
                const querySnapshot = await getDocs(queryObject);
                console.log(querySnapshot)
                if (querySnapshot.size > 0) {
                    setCurrentUser({ ...user, role: 'admin' })
                }
                else {
                    setCurrentUser({ ...user, role: 'manager' })
                }
            } catch (error) {
                console.error('failed to determine if user is admin: ' + error)
            }
        }
    }

    async function addUserToDatabase(email, role) {
        try {
            if (role === 'admin') {
                await addDoc(collection(database, `admin/`), {
                    email,
                })
            }
            if (role === 'manager') {
                await addDoc(collection(database, `manager/`), {
                    email,
                })
            }
        } catch (error) {
            alert('error adding user to database' + error)
        }
    }
    function handleLogOut() {
        handleSignOut().then(alert('logged out'));
    }

    async function handleLoginForm(event, setLoading, setErrorMessage) {
        event.preventDefault();
        const form = event.target;
        setLoading(true);
        try {
            await handleSignIn(form.email.value, form.password.value);
        } catch (error) {
            setErrorMessage(`failed to login: ${error.message}`);
        } finally { setLoading(false) }

    }

    async function handleCreateAccountForm(event, setLoading, setErrorMessage) {
        event.preventDefault();
        setLoading(true)
        const form = event.target;
        if ((form.password.value !== form.confirmPassword.value) || (form.email.value !== form.confirmEmail.value)) {
            setLoading(false)
            return setErrorMessage('Email and/or password confirmation do not match')
        }
        setErrorMessage('')
        try {
            const user = await handleSignUp(form.email.value, form.password.value)
            await addUserToDatabase(form.email.value, form.role.value, user)
        } catch (error) {
            setErrorMessage(`failed to create an account: ${error.message}`)
        } finally { setLoading(false) }
    }

    function handleSignIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function handleSignOut() {
        return signOut(auth)
    }

    function handleSignUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            await checkIfAdmin(user);
            if (!user && !currentUser) {
                setCurrentUser(user);
            }
        });
        return unsubscribe;
    }, []);



    const value = {
        currentUser,
        handleSignUp,
        handleSignOut,
        handleSignIn,
        handleCreateAccountForm,
        handleLoginForm,
        handleLogOut,
        checkIfAdmin,
        addSupplierToDatabase,
        getSuppliersFromDatabase,
        deleteSupplierFromDatabase,
    };

    return (
        <AuthAndDatabase.Provider value={value}>
            {children}
        </AuthAndDatabase.Provider>
    )
}