function Navbar() {
    return (
      <div className="fixed w-full top-0 z-50" style={{ backgroundColor: '#72D6B6' }}>
        <div className="container mx-auto flex justify-between items-center py-4 text-white">
          <span className="font-bold text-lg">Vita Farma</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Listar Categorias</a>
            <a href="#" className="hover:underline">Cadastrar Categoria</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  