module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f3e4713392c726c732f64031788bc340'),
  },
});
