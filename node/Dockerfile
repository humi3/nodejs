FROM node:13.8.0-alpine3.11

# 諸々インストール
#  webpack
#  typescript
#  mysql @types/mysql
RUN npm i -D webpack webpack-cli typescript ts-loader
RUN npm i -D mysql @types/mysql

ENV NODE_ENV=development

WORKDIR /app