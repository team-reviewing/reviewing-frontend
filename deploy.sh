#!/bin/bash
REPOSITORY=/home/ubuntu/deploy 

cd $REPOSITORY 

sudo npm install 

sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000

sudo pm2 reload all
