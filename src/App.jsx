import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes> 
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/projects" element={<Projects />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
