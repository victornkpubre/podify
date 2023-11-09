import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "@src/navigation/AuthNavigator"
import { PRIMARY } from "@utils/colors"
import LostPassword from "@views/auth/LostPassword"
import SignIn from "@views/auth/SignIn"
import SignUp from "@views/auth/SignUp"
import Verification from "@views/auth/Verification"
import { SafeAreaView, StyleSheet } from "react-native"

const App = () => {
  return <SafeAreaView>
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: PRIMARY,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16
  },
})

export default App