#!/bin/bash
REPOSITORY=/home/ubuntu/deploy 

cd $REPOSITORY 

npm install 

pm2 reload all
