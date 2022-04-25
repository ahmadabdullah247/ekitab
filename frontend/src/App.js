
import { NavBar } from './components/common/navbar'
import { HeroBullets } from './components/common/hero'

function App() {
  const links = [
    { "link": "/about", "label": "Features" },
    { "link": "/contact", "label": "Contact" }
  ]
  return (
    <div className="App">
      <NavBar links={links} />
      <HeroBullets />
    </div>
  );
}

export default App;
