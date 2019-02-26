module.exports = {
  apps: [
    {
      name: "tutorial-2",
      script: "./source/index.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-54-189-172-129.us-west-2.compute.amazonaws.com/tutorial-2",
      key: "~/.ssh/tutorial.pem",
      ref: "origin/master",
      repo: "git@github.com:yashraikar1087/aws-deploy.git",
      path: "/home/ubuntu/",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
