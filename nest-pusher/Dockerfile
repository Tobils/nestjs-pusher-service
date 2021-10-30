# Create node image
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Copy file to /app directory
COPY . /app

# install dependencies
RUN npm install \
  && npm install pm2 -g \
  # compile typescript
  && npm run build \
  # Remove dev dependencies
  && npm prune --production --silent \
  # Remove unused file/folder
  && rm -rf src \
  && rm tsconfig.json 
  
  #&& rm  Dockerfile .dockerignore

# Expose port 3000
EXPOSE 3001

# run node service
CMD [ "pm2-runtime", "./dist/main.js", "--name", "pusher-gateway" ]