import React, { Component } from "react";
import { Text, View, Image, StyleSheet ,Button} from "react-native";

class Search extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Search.js</Text>
                <Button title="Go back"
            onPress = {() => this.props.navigation.navigate("Home")}
            color="blue" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})

export default Search;