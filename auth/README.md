scp -r auth/* root@134.209.96.47:
in project root

ssh root@134.209.96.47

run the following commands
sudo chown 10001:65533 volumes/verdaccio/conf/htpasswd && sudo chown -R 10001:65533 volumes/verdaccio/storage/ && screen

Run screen

docker-compose up
