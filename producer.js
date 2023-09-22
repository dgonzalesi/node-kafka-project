const kafka = require("kafka-node")
const kafkaBroker = "localhost:29092"
const kafkaTopic = "test-topic"

// Create a Kafka Producer client
const client = new kafka.KafkaClient({ kafkaHost: kafkaBroker })
client.setMaxListeners(100000)
const producer = new kafka.Producer(client)

// Initialize the producer
producer.on("ready", () => {
    console.log("Kafka producer is ready")

    // Function to generate a random message
    function generateRandomMessage() {
        return `Message ${Math.floor(Math.random() * 10000)}`
    }

    // Send 10,000 random messages to Kafka
    for (let i = 0; i < 10000; i++) {
        const message = generateRandomMessage()
        console.log("message: ", message)
        const payloads = [{ topic: kafkaTopic, messages: message }]

        producer.send(payloads, (error, data) => {
            console.log("data: ", data)
            if (error) {
                console.error("Error publishing message:", error)
            } else {
                console.log("Published message:", message)
            }
        })
    }
})

producer.on("error", (error) => {
    console.error("Kafka producer error:", error)
})

// Handle shutdown gracefully
process.on("SIGINT", () => {
    producer.close(() => {
        console.log("Kafka producer closed.")
        process.exit()
    })
})
