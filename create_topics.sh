#!/bin/sh

echo "Begin creating topics"
docker-compose exec kafka kafka-topics --create --topic test-topic --partitions 1 --replication-factor 1 --bootstrap-server localhost:9092
echo "Done creating topics"