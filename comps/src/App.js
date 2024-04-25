import Accordion from './components/Accordion';

function App() {

  const items = [
    {
      id: 'arguments',
      label: 'react on Proj',
      content: ' you can'
    },
    {
      id: 'bay',
      label: 'react on Proj',
      content: ' you can'
    },
    {
      id: 'kakao',
      label: 'react on Proj',
      content: ' you can'
    }
    
  ]
  return <Accordion items={items}/>
}

export default App;
