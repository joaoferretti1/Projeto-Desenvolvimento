import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const titulo = 'Um dos carros mais rápidos do mundo' 
const autor = 'João'
const data = '15 de setembro de 2026'
const conteudo1 = 'Na foto abaixo, mostra um Bugatti Chiron Super Sport 300+, um dos carros mais rápidos do mundo, com um motor 8.0 litros W16 quadriturbo, foi registrada uma velocidade de 490km/h.'
const conteudo2 = 'E não é só a velocidade que é muito alta, o preço para adquirir esse carro é absurdo também, com um valor de 3,5 milhões de euros, que convertendo daria um pouco mais de 20,5 Milhões de reais, além de ser uma edição limitada com apenas 30 unidades produzidas.'

function App() {
  return(
    <>
       <Header />
       <Navigation />
       <main>
         <Article 
       titulo={titulo}
       autor={autor}
       data={data}
       conteudo1={conteudo1}
       conteudo2={conteudo2}
        />
       </main>
      
       <Sidebar />
       <Footer />
    </>
  )    
}

export default App

