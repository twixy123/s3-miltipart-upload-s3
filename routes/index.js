const Router = require('koa-router')
const router = new Router()

const s3Model = require('./s3')

router.get('/', async (ctx) => {
    try {
        ctx.body = 'Hello world'
    } catch (error) {
        ctx.status = 500
        ctx.body = { success: false }
    }
})

router.get('/get-simple-upload-url', async (ctx) => {
    try {
        const url = await s3Model.getSimpleUploadUrl(ctx.query.fileName)
        ctx.body = { url }
    } catch (error) {
        ctx.status = 500
        ctx.body = { success: false }
    }
})

router.get('/get-multipart-upload-id', async (ctx) => {
    try {
        const multipartUploadId = await s3Model.getMultipartUploadId(ctx.query.fileName)
        ctx.body = { multipartUploadId }
    } catch (error) {
        ctx.status = 500
        ctx.body = { success: false }
    }
})

router.post('/get-upload-part-url', async (ctx) => {
    try {
        const url = await s3Model.getUploadPartUrl(ctx.request.body)
        ctx.body = { url }
    } catch (error) {
        ctx.status = 500
        ctx.body = { success: false }
    }
})

router.post('/complete-upload', async (ctx) => {
    try {
        const location = await s3Model.completeUpload(ctx.request.body)
        ctx.body = { location }
    } catch (error) {
        ctx.status = 500
        ctx.body = { success: false }
    }
})





module.exports = router