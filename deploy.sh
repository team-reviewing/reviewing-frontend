#!/bin/bash
REPOSITORY=/home/ubuntu/deploy 

cd $REPOSITORY 

sudo npm install 

pm2 start index.js

