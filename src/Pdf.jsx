import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const Pdf = (props) => {
  console.log(props);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src="/logo192.png" style={styles.logo} />
        <Text>Quote Details</Text>
        <View style={styles.section}>
          <Text>{props.value.firstname}</Text>
        </View>
        <View style={styles.section}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            ab deserunt illo voluptate accusamus placeat quos dolore
            exercitationem earum incidunt deleniti similique quod, libero
            obcaecati. Tempore adipisci molestiae architecto doloremque.
          </Text>
        </View>
      </Page>
    </Document>
  );
};
export default Pdf;
