const aws = require('aws-sdk')
const { constants, baseS3InitConfig } = require('./s3GeneralConfig')

const s3 = new aws.S3(baseS3InitConfig)

async function generateSimpleUploadUrl (fileName) {
    const params = {
        Bucket: constants.bucket,
        Key: fileName,
        Expires: Date.now() + constants.expires
    }

    const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
    console.log('uploadUrl', uploadUrl);
    return uploadUrl
}

module.exports = generateSimpleUploadUrl