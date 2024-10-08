import { StyleSheet, Text, View } from "react-native"

const MealDetails = ({duration, complexity, affordability}) => {
  return (
    <View style={styles.details}>
          <Text style={styles.detailsItem}>{duration}m</Text>
          <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
        </View>
  )
}
export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center",
      },
      detailsItem: {
        marginHorizontal: 8,
        fontSize: 12,
      },
})