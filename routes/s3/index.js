const generateSimpleUploadUrl = require('./generateSimpleUploadUrl')
const generateMultipartUploadId = require('./generateMultipartUploadId')
const generateUploadPartUrl = require('./generateUploadPartUrl')
const completeUpload = require('./completeUpload')

module.exports = {
    getSimpleUploadUrl: async (fileName) => {
        return await generateSimpleUploadUrl(fileName)
    },
    getMultipartUploadId: async (fileName) => {
        return await generateMultipartUploadId(fileName)
    },
    getUploadPartUrl: async (body) => {
        return await generateUploadPartUrl(body)
    },
    completeUpload: async (body) => {
        return await completeUpload(body)
    }
}