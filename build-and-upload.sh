NEW_VERSION=$(git rev-parse @)
echo "Building new version: $NEW_VERSION"
npm run build
git add .
git commit -m "New version $NEW_VERSION"
git push origin