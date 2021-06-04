import React from "react";
import pdf from "@react-pdf/renderer";
const { Text, StyleSheet } = pdf;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    marginBottom: 10,
    textTransform: "uppercase",
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
