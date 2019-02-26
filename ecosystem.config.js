module.exports = {
  apps: [
    {
      name: "tutorial-2",
      script: "./index.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-54-189-172-129.us-west-2.compute.amazonaws.com/",
      key: "~/.ssh/tutorial.pem",
      ref: "origin/master",
      repo: "git@github.com:yashraikar1087/aws-deploy.git",
      path: "/home/ubuntu/tutorial-2",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
