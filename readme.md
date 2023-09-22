# Node.js Kafka Project

This project demonstrates how to work with Apache Kafka using Node.js and the `kafka-node` library.

## Prerequisites

Before running the scripts in this project, ensure that you have the following prerequisites installed:

-   Node.js: [Download and Install Node.js](https://nodejs.org/)

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone <repository-url>
    cd node-kafka-project

    ```

2. Install project dependencies
    ```bash
    npm install
    ```
3. Run docker-compose.yml file
    ```bash
    docker-compose up -d
    ```
4. Create a Kafka topic
    ```bash
    npm run create-topic
    ```
5. Run Consumer
    ```bash
    npm run consume
    ```
6. Run Producer
    ```bash
    npm run produce
    ```
