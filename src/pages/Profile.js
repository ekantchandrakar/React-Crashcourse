import React from "react";
import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
	const { username } = useContext(AppContext);
	return (
		<div>
			PROFILE, user is {username}
			<ChangeProfile />
		</div>
	);
};

export default Profile;
