FROM node:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
ARG PORT=3000
ARG COMMAND=start
ENV PORT $PORT
RUN npm install
EXPOSE $PORT
CMD ["npm","start"]