const sinon = require('sinon');
const { SampleTransaction } = require('./SampleTransaction');

it("should mock transaction", async () => {
    const mockFirestore = {};
    const transaction = new SampleTransaction({});
    
    const transactionStub = sinon.stub().returns()

    sinon.stub(transaction, 'firestore').get(() => {
        return {
            runTransaction: (executor) => executor({ message: 'hullo' }),
        }
    })
    const res = await transaction.runQuery();
    console.log(res);
});