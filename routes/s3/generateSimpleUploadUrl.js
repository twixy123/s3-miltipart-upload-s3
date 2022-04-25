const aws = require('aws-sdk')
const { constants, baseS3InitConfig } = require('./s3GeneralConfig')

const s3 = new aws.S3(baseS3InitConfig)

async function generateSimpleUploadUrl (fileName) {
    const params = {
        Bucket: constants.bucket,
        Key: fileName,
        Expires: Date.now() + constants.expires
    }

    console.log('params', params);
    console.log('baseS3InitConfig', baseS3InitConfig);

    const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
    return uploadUrl
}

module.exports = generateSimpleUploadUrl