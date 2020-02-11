# node.jsの環境

## コンテナビルド
`docker-compose up --build`

## コンテナのstart
`docker-compose up -d`

## コンテナ内に遷移
`docker exec -it node-app /bin/sh`  
`docker exec -it host_mysql /bin/sh`

### docker-compose のバージョンに注意
調べた結果、1.25.3の模様　バージョンを以下のコマンドで上げる  
`curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`