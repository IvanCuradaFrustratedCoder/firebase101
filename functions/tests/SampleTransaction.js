
class SampleTransaction {
    /**
     * @type {FirebaseFirestore.Firestore} - A firestore connection
     */
    firestore = null;

    constructor(firestore) {
        this.firestore = firestore;
    }

    async runQuery() {

        const transaction = async (executor) => {
            return executor.message;
        };

        const result = await this.firestore.runTransaction(transaction);

        return result;
    }
}

module.exports.SampleTransaction = SampleTransaction;