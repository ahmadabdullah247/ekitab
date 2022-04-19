


describe('Books', () => {
    beforeAll(() => {
        process.env.DYNAMODB_TABLE = 'books-handler-test'
    })
    afterEach(async () => {
        jest.restoreAllMocks()
    })
})