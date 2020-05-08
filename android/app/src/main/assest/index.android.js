import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Linking } from "react-native";

render() {
    return (
        <View style={styles.container}>
            <Button
                title="Click Here To Open Instagram "
                onPress={() => Linking.openURL("https://www.instagram.com/ahmetemin_/")}
            />
        </View>
    );
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#e5e5e5"
        },
    })