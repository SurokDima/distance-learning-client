FROM node:16-alpine AS development
ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
RUN yarn install

# Copy app files
COPY . .

# Expose port
EXPOSE 5173

RUN ls
# Start the app
CMD [ "yarn", "start" ]