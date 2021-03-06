import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as s3deploy from '@aws-cdk/aws-s3-deployment'
import { copyFile } from './utils'
import * as spec from './spec'

export interface AwsOpenapiUiProps {
  openapiPath: string,
  servers?: string[]
}

export class AwsOpenapiUi extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: AwsOpenapiUiProps) {
    super(scope, id);
    const swaggerUiPath = __dirname + '/swagger-ui'

    const specPath = swaggerUiPath + '/openapi.yaml'

    copyFile(props.openapiPath, specPath)
    if (props.servers) {
      spec.save(spec.addServerToSpec(props.openapiPath, props.servers), specPath)
    }

    const apiDocBucket = new s3.Bucket(this, `openapi`, {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      accessControl: s3.BucketAccessControl.PUBLIC_READ,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })

    new s3deploy.BucketDeployment(this, 'swagger-ui', {
      sources: [s3deploy.Source.asset(swaggerUiPath)],
      destinationBucket: apiDocBucket
    })
    console.log("swagger docs", apiDocBucket.bucketWebsiteUrl)
  }
}
