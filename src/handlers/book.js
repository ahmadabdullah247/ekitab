'use strict';
const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

let options = {}
if (process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
    }
}
const dynamoDb = new AWS.DynamoDB.DocumentClient(options);

async function create(event) {
    // if(!valid){
    //     return { statusCode: 400, body: JSON.stringify({ message: 'Invalid parameters' }) }
    // }
    const { author, filePath, summary, title } = JSON.parse(event.body);
    const timestamp = new Date().getTime();

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            author, filePath, summary, title,
            createdAt: timestamp,
            updatedAt: timestamp,
        },
    };

    try {
        console.log({ params })
        let data = await dynamoDb.put(params).promise()
        return { statusCode: 201, body: JSON.stringify({ message: 'Book created', data }) }
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ message: `Error creating book: ${error}` }) }
    }
}

async function list(event) {
    try {
        // TODO: Pagination
        let params = {
            TableName: process.env.DYNAMODB_TABLE,
        };
        // var params = { 
        //     TableName: process.env.DYNAMODB_TABLE, 
        //     // KeyConditionExpression: "createdAt = :createdAt",
        //     // ExpressionAttributeValues: {
        //     //     ":createdAt": "1647116547417"
        //     // },
        //     limit: 5 
        // }
        const { Items } = await dynamoDb.scan(params).promise()
        return { statusCode: 200, body: JSON.stringify(Items) }
    } catch (error) {
        console.log(error)
        return { statusCode: 500, body: JSON.stringify({ message: `Error retrieving books: ${error}` }) }
    }
}

async function index(event) {
    const id = event.pathParameters.id
    try {
        var params = { TableName: process.env.DYNAMODB_TABLE, Key: { id } }
        const { Item } = await dynamoDb.get(params).promise()
        return { statusCode: 200, body: JSON.stringify(Item) }
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ message: `Error retrieving books: ${error}` }) }
    }
}

module.exports = { create, list, index }