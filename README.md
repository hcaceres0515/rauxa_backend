# Rauxa Challenge Backend

This project uses the AWS service. We have backend and frontend folder. In the backend part, we have installed sails instance to put it on EC2 and in the frontend part, we have installed react.js.

## Getting Started

You need to go to this link and you will see the image below:

![React App](https://s3.us-east-2.amazonaws.com/rauxabucket/react-frontend.png)

### Architecture

The architecture is represented in the image below:

![React App](https://s3.us-east-2.amazonaws.com/rauxabucket/RauxaArchitecture.png)

## Deployment

You need to deploy the API Gateway and run sails instance in EC2.

## Built With

* [Lambda](https://aws.amazon.com/es/lambda/features/) - Function that send image to S3 and save data in mysql instance.
![Lambda Function](https://s3.us-east-2.amazonaws.com/rauxabucket/lambda-function.png)
* [API Gateway](https://aws.amazon.com/es/api-gateway/) - Middleware to connect Lambda functions with frontend.
![API Gateway - Rauxa Service](https://s3.us-east-2.amazonaws.com/rauxabucket/api-gateway.png)
* [S3 Storage](https://aws.amazon.com/es/s3/) - Storage to save the original and thumbnail.
![Rauxa Bucket](https://s3.us-east-2.amazonaws.com/rauxabucket/s3-storage.png)
* [EC2](https://aws.amazon.com/es/ec2/) - Instance to host sails application.
![EC2 - Instance](https://s3.us-east-2.amazonaws.com/rauxabucket/ec2-instance.png)


## Authors

* **Harold Caceres** - *Initial work* - [hcaceres0515](https://github.com/hcaceres0515)
