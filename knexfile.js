
module.exports = {
  
  development: {
    client: 'pg',
    connection: 'postgres://localhost/ride-tracker'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL

  }

}
