#!/bin/bash
BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "main" ]; then
  echo "Must be on main branch"
  exit 1
fi
TAG=$(date +"%Y-%m-%d-%H%M%S")
git tag $TAG
git push origin $TAG
echo "Tagged and pushed: $TAG"