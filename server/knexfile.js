module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres://candacewilson:postgres@localhost/cw-web-store',
	},
	test: {
		client: 'pg',
		connection: 'postgres://candacewilson:postgres@localhost/test-cw-web-store',
	},
};
