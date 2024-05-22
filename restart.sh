cd /home/ubuntu/app/landing-page/frontend && git pull origin dev

cd /home/ubuntu/app/landing-page/frontend && docker build -t landing-frontend:latest .

docker rm -f landing-frontend

docker run -d  -p 8008:3000 --restart on-failure --log-opt max-size=100m --health-interval 2s --health-retries 2 --health-timeout 10s  --name landing-frontend landing-frontend:latest