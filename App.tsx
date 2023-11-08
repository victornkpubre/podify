import { PRIMARY } from "@utils/colors"
import LostPassword from "@views/LostPassword"
import SignIn from "@views/SignIn"
import SignUp from "@views/SignUp"
import Verification from "@views/Verification"
import { SafeAreaView, StyleSheet } from "react-native"

const App = () => {
  return <SafeAreaView style={styles.container}>
    <Verification/>
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