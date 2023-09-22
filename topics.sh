#!/bin/sh
echo "Start: Sleep 15 seconds"
sleep 30;
wait;
echo "Begin creating topics"
docker exec Kafka1 kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 1 --replication-factor 1 --topic test-topic
echo "Done creating topics"