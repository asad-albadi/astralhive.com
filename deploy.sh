#!/bin/bash
set -e

# Check if commit message is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <commit-message>"
  exit 1
fi

# Define paths
BUILD_DIR="build/web"
TARGET_DIR="/mnt/crucial_nvme/Projects/astralhive_website/prod"
CNAME_FILE="${TARGET_DIR}/CNAME"

# Build the Flutter web app with no tree shake icons
flutter build web --release --no-tree-shake-icons

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Build successful. Moving files to production directory."

  # Retain CNAME file
  if [ -f "$CNAME_FILE" ]; then
    mv "$CNAME_FILE" /tmp/CNAME_backup
  fi

  # Remove existing files in the destination directory
  rm -rf ${TARGET_DIR}/*
  
  # Move the CNAME file back
  if [ -f /tmp/CNAME_backup ]; then
    mv /tmp/CNAME_backup "$CNAME_FILE"
  fi
  
  # Move the contents of build/web/ to the production directory
  mv ${BUILD_DIR}/* ${TARGET_DIR}/

  echo "Files moved to $TARGET_DIR."

  # Change to the target directory
  cd $TARGET_DIR

  # Check if the target directory is a git repository
  if [ -d ".git" ]; then
    # Switch to the prod branch
    git checkout prod

    # Commit the changes to the repository
    git add .
    git commit -m "$1"
    git push origin prod

    echo "Changes committed and pushed to the repository."
  else
    echo "Not a git repository. Skipping git operations."
  fi
else
  echo "Build failed. Exiting."
  exit 1
fi
