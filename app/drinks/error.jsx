// Must use client for Error component to work
'use client';

const error = error => {
	return <div>{error.error.message}</div>;
};

export default error;
