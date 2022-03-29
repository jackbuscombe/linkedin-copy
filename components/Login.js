import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useStore } from "../lib/store";

function Login() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");

	const auth = getAuth();

	const user = useStore((state) => state.user);
	const setUser = useStore((state) => state.setUser);

	const loginToApp = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setUser(userCredential.user);
			})
			.catch((error) => {
				alert("Sign in error: ", error.message);
			});
	};

	const register = () => {
		if (!name) {
			return alert("Please enter a full name!");
		}
		if (!email) {
			return alert("Please enter an email!");
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				updateProfile(auth.currentUser, {
					displayName: name,
					photoURL: photoUrl,
				});
				setUser({
					name: userCredential.displayName,
					uid: userCredential.uid,
					photoUrl: userCredential.photoURL,
					email: userCredential.email,
				});
			})
			.catch((error) => {
				alert("Account creation failed... Error code: " + error.code + " Error message: " + error.message);
			});
	};

	return (
		<div className="grid place-items-center mx-auto py-[100px] ">
			<img className="object-contain h-[70px] my-[20px]" src="https://pbs.twimg.com/profile_images/1468001580184047616/PxDlAA8N_400x400.jpg" alt="" />

			<form className="flex flex-col">
				<input value={name} onChange={(e) => setName(e.target.value)} className="login-input" type="text" placeholder="Full name (required if registering)" />
				<input value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="login-input" type="text" placeholder="Profile picture URL (optional)" />
				<input value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" type="email" placeholder="Email" />
				<input value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" type="password" placeholder="Password" />
				<button className="w-[365px] h-[50px] text-lg text-white bg-[#0074b1] rounded-sm" type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>

			<p className="mt-[20px]">
				Not a member?{" "}
				<span className="text-[#0074b1] underline cursor-pointer" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}
export default Login;
