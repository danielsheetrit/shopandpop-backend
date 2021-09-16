const admin = require('firebase-admin')
const serviceAccount = require('../service-account.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const firestore = admin.firestore()

const getProducts = async (req, res) => {

    const { category } = req.params

    try {
        const products = []

        const productsCollection = await firestore.collection('shopandpop')
        const snapshot = (category !== 'explore')
            ? await productsCollection.where('category', '==', `${category}`).get()
            : await productsCollection.get()

        if (!snapshot.size) throw new Error('No such category');

        snapshot.forEach(doc => {

            const product = {
                id: doc.id,
                ...doc.data()
            }

            products.push(product)
        })

        res.status(200).send(products)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getSingleProduct = async (req, res) => {

    const { id } = req.params
    
    try {
        const productsCollection = await firestore.collection('shopandpop')
        const snapshot =
            await productsCollection.where(admin.firestore.FieldPath.documentId(), '==', id).get()

        if (!snapshot.size) throw new Error('Product not found');
        if (snapshot.size > 1) throw new Error('Multiple products selection is forbidden');

        let singleProduct = {};

        snapshot.forEach(doc => {

            singleProduct = {
                id: doc.id,
                ...doc.data()
            }

        })

        res.status(200).send(singleProduct)

    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getProducts,
    getSingleProduct
}