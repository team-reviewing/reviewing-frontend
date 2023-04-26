#!/bin/bash
REPOSITORY=/home/ubuntu/deploy 

cd $REPOSITORY 

sudo npm install 
sudo npm ci
sudo npx pm2 reload all