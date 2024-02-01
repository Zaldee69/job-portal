FROM node:18-alpine

# Uncomment if use of process.dlopen is necessary
# apk add --no-cache libc6-compat

WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build

ENV PORT 3000
EXPOSE 3000

CMD ["yarn", "start"]