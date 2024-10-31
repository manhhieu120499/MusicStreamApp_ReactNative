export const ValidateEmail = (email) => {
	const regex = /^\w+@(gmail\.com|edu\.com\.vn|outlook\.com\.vn)$/;
	return regex.test(email);
};

export const ValidatePassword = (password) => {
	const regex = /^[A-Z][a-z0-9]+[@|#]$/;
	return regex.test(password);
};
