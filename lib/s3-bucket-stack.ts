import * as cdk from 'aws-cdk-lib';
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from 'constructs';

export class S3BucketStack extends cdk.Stack {
 // public readonly bucket: s3.Bucket; //Resource sharing between stacks

  
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines the s3 stack 
    new s3.Bucket(this, "patika-bucket",{//Resource physical ID
      bucketName: "patika-bucket",
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    

    
  }
}  