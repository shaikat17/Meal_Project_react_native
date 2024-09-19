import { Image, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/MealDetails"

const MealDetailsScreen = ({ route }) => {
    const mealId = route.params.mealId

    const meal = MEALS.find((meal) => meal.id === mealId)
    
  return (
      <View>
          <Image source={{ uri: meal.imageUrl}} />
          <Text>
              {meal.title}
          </Text>
          <MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} />
          <View>
              <Text>Ingredient</Text>
              {meal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
              <Text>Steps</Text>
              {meal.steps.map(step => <Text key={step}>{step}</Text>)}
          </View>
      </View>
  )
}
export default MealDetailsScreen