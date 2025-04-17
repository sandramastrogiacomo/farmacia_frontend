import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="w-full" style={{ backgroundColor: '#72D6B6' }}>
        <div className="container mx-auto flex justify-between items-center py-4 text-white">
        <Link to='/home' className="text-2xl font-bold">Vita Farma</Link>
          <div className="flex gap-4">
            <Link to = '/categorias' className="hover:underline">Listar Categorias</Link>
            <Link to = '/cadastrarcategoria' className="hover:underline">Cadastrar Categoria</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  