#!/bin/bash

echo "##### Installing dependencies"
npm install
echo "##### Building release"
npm run build
echo "##### Removing old files from release folder"
rm -r /var/www/countriesofthe.world/html/*
echo "##### Copying new build to release folder"
cp -r ../build/* /var/www/countriesofthe.world/html
