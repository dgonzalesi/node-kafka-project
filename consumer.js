const kafka = require("kafka-node")
const Consumer = kafka.Consumer
const client = new kafka.KafkaClient({ kafkaHost: "localhost:29092" })

const topics = [{ topic: "test-topic", partition: 0 }]

const options = {
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
    encoding: "utf8",
}

const consumer = new Consumer(client, topics, options)

consumer.on("message", (message) => {
    console.log("Received message:", message.value)
})

consumer.on("error", (err) => {
    console.error("Consumer error:", err)
})

process.on("SIGINT", () => {
    consumer.close(true, () => {
        console.log("Consumer closed.")
        process.exit()
    })
})
