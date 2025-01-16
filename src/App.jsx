import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* esta sección es para la parte de los productos */}
            <h1 className="text-center mt-4 mb-5">lista de guisos</h1>
          </div>

          <div className="col-md-4">
            {/* esta sección es para la orden de compra */}
          </div>
        </div>
      </div>

      {/* esta sección es para el pie de página */}
      <footer className="bg-dark p-3 mt-5">
        <p className="text-center text-white">todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
