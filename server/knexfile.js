module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:Bokeh2470@localhost/cw-web-store',
  },
  test: {
    client: 'pg',
    connection: 'postgres://postgres:Bokeh2470@localhost/test-cw-web-store',
  },
};
