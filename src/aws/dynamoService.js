import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const REGION = "us-east-1";

const client = new DynamoDBClient({
    region: REGION,
    credentials: {
        accessKeyId: "AKIAYSE4N5PX43FO75QI",
        secretAccessKey: "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"
    }
});

const ddbDocClient = DynamoDBDocumentClient.from(client);

export const getIngredients = async (recipeName) => {
    const command = new GetCommand({
        TableName: "Recipes",
        Key: { recipeName: recipeName }
    });

    try {
        const response = await ddbDocClient.send(command);
        return response.Item?.ingredients || [];
    } catch (err) {
        console.error("DynamoDB fetch error:", err);
        return [];
    }
};
