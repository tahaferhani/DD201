import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, FlatList } from "react-native"
import React, { useEffect, useState } from "react"
import Input from "../components/Input"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 20, paddingBottom: 0 }}>
                <Input placeholder="Search for a product" />
            </View>
            <FlatList
                contentContainerStyle={{ flexGrow: 1 }}
                data={products}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, padding: 10 }}>
                            <Image style={styles.productImage} source={{ uri: item.image }} />
                            <Text style={styles.productTitle}>{item.title}</Text>
                            <Text numberOfLines={3}>{item.description}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    productImage: {
        width: "100%",
        aspectRatio: 1 / 1.4
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    productPrice: {
        color: 'green',
        fontWeight: 'bold'
    }
})

export default Products