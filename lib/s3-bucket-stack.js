"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3BucketStack = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
class S3BucketStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines the s3 stack 
        this.bucket = new s3.Bucket(this, "patika-bucket", {
            versioned: false,
            bucketName: "patika-bucket",
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });
    }
}
exports.S3BucketStack = S3BucketStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtYnVja2V0LXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiczMtYnVja2V0LXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFHekMsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFJMUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQztZQUNoRCxTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsZUFBZTtZQUMzQixnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTO1lBQ2pELGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87U0FDekMsQ0FBQyxDQUFDO0lBSUwsQ0FBQztDQUNGO0FBbkJELHNDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCAqIGFzIHMzIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtczNcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGJ1Y2tldDogczMuQnVja2V0OyAvL1Jlc291cmNlIHNoYXJpbmcgYmV0d2VlbiBzdGFja3NcclxuXHJcbiAgXHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgLy8gVGhlIGNvZGUgdGhhdCBkZWZpbmVzIHRoZSBzMyBzdGFjayBcclxuICAgIHRoaXMuYnVja2V0ID0gbmV3IHMzLkJ1Y2tldCh0aGlzLCBcInBhdGlrYS1idWNrZXRcIix7XHJcbiAgICAgIHZlcnNpb25lZDogZmFsc2UsXHJcbiAgICAgIGJ1Y2tldE5hbWU6IFwicGF0aWthLWJ1Y2tldFwiLFxyXG4gICAgICBwdWJsaWNSZWFkQWNjZXNzOiBmYWxzZSxcclxuICAgICAgYmxvY2tQdWJsaWNBY2Nlc3M6IHMzLkJsb2NrUHVibGljQWNjZXNzLkJMT0NLX0FMTCxcclxuICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWVxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICB9XHJcbn0gICJdfQ==