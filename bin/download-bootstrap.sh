#!/usr/bin/bash

ROOT_DIR=$(cd $(dirname $0)/..; pwd)
VERSION='bootstrap@5.0.0-beta1'

mkdir -p $ROOT_DIR/app/assets/javascripts/resizing/rails/bootstrap/
rm -rf   $ROOT_DIR/app/assets/javascripts/resizing/rails/bootstrap/*
wget "https://cdn.jsdelivr.net/npm/${VERSION}/dist/css/bootstrap.min.css" -P $ROOT_DIR/app/assets/javascripts/resizing/rails/bootstrap/

mkdir -p $ROOT_DIR/app/assets/stylesheets/resizing/rails/bootstrap/
rm -rf   $ROOT_DIR/app/assets/stylesheets/resizing/rails/bootstrap/*
wget "https://cdn.jsdelivr.net/npm/${VERSION}/dist/js/bootstrap.bundle.min.js" -P $ROOT_DIR/app/assets/stylesheets/resizing/rails/bootstrap/
