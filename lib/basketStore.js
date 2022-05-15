import AWS from "aws-sdk";
const client = new AWS.DynamoDB.DocumentClient({
    endpoint : "https://localhost:8000",
});

const addToBasket = () => {

    return client;
}