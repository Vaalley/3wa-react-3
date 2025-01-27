import { Greeting } from './components/Greeting'

function App() {
  return (
    <>
      <h1>Greeting Examples</h1>

      {/* Basic example */}
      <Greeting name="Alice" />

      {/* With age */}
      <Greeting
        name="Bob"
        age={25}
        isOnline={true}
      />

      {/* With invalid age */}
      <Greeting
        name="Charlie"
        age={-5}
        isOnline={false}
      />

      {/* With hobbies */}
      <Greeting
        name="Diana"
        age={30}
        hobbies={["Reading", "Swimming", "Photography"]}
        isOnline={true}
      />
    </>
  )
}

export default App
