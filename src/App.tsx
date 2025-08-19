import { Content } from "./components/content"
import { Footer } from "./components/footer"

import { Header } from "./components/header"


function App() {
  return (
    <>
      <Header/>
      <main>
        <Content 
          title="Aula de revisão" content="Essa aula é massa"
        />
      </main>
      

      <Footer />
    </>
  
)
}

export default App
