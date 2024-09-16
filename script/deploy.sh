#!/bin/bash

#Deploy MongoDB
kubectl apply -f ../deployment/db/mongodb-deployment.yaml

#Deploy hackathon-app with helm
cd ../hackathon-app
helm upgrade hackathon-app . --install --wait --timeout 7200s --history-max 50