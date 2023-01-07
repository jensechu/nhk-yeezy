module.exports = {
  username: 'NHKyeezy',
  password: process.argv[3] || '5be2846282d61c3c70d8890e6a43e4f2',
  subreddit: process.env.SUBREDDIT || 'NHKEasyNews',
  separator: "\n\n&nbsp;\n\n",
  delay: 2000,
  loopInterval: "300000",
  pingInterval: "300000",
  port: process.env.PORT || 5001,
  url: process.env.URL || 'http://localhost:5000',
  env: process.env.NODE_ENV || 'development'
};