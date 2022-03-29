import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { useStore } from "../lib/store";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

export default function Home() {
	const user = useStore((state) => state.user);
	const setUser = useStore((state) => state.setUser);
	const logout = useStore((state) => state.logout);

	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					name: user.displayName,
					uid: user.uid,
					photoUrl: user.photoURL,
					email: user.email,
				});
			} else {
				logout();
			}
		});
	}, []);

	return (
		<div className="">
			<Head>
				<title>LinkedIn</title>
				<meta name="description" content="LinkedIn Copy" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="flex bg-[#f3f2ef] justify-start">
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}
		</div>
	);
}
