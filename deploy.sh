#!/bin/bash

# Define paths
BUILD_DIR="build/web"
TARGET_DIR="/home/asad/Projects/astralhive_website/prod"

# Build the Flutter web app with no tree shake icons
flutter build web --release --no-tree-shake-icons

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Build successful. Moving files to production directory."
  
  # Create the target directory if it does not exist
  if [ ! -d "$TARGET_DIR" ]; then
    mkdir -p "$TARGET_DIR"
  fi

  # Move the contents of build/web/ to the production directory
  mv $BUILD_DIR/* $TARGET_DIR/

  echo "Files moved to $TARGET_DIR."
else
  echo "Build failed. Exiting."
  exit 1
fi
