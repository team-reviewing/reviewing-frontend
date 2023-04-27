#!/bin/bash
REPOSITORY=/home/ubuntu/deploy 

cd $REPOSITORY 

npm install 

npm install next

pm2 reload all
