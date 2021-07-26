# AWS Openapi UI

Generate and serve a UI for your openapi definition with AWS CDK

## Installation
```bash
$ yarn add aws-openapi-ui
```
## 🚀 Example usage
```typescript
new AwsOpenapiUi(scope, 'my-service', {
    openapiPath: '<path-to-spec>',
    servers: [
        'api.foo.com',
        'dev.api.foo.com'
    ]
  })
```


## ✌️ Get in touch with me

<a href="https://into-the-code.com" target="_blank"><img alt="Personal Website" src="https://img.shields.io/badge/Personal%20Website-%2312100E.svg?&style=for-the-badge&logoColor=white" /></a>
<a href="https://twitter.com/josuablejeru" target="_blank"><img alt="Twitter" src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" /></a>
<a href="https://www.linkedin.com/in/josua-blejeru-a2871a164" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/josuablejeru)

## 📝 License

Distributed under the MIT License. See LICENSE for more information.

## Acknowledgements
- https://github.com/swagger-api/swagger-ui