function Home() {
    return (
      <div className="pt-20"> {/* Padding-top para não ficar escondido atrás do navbar fixo */}
        <div className="flex justify-center items-center py-10" style={{ backgroundColor: '#72D6B6' }}>
          <div className="container grid grid-cols-1 md:grid-cols-2 text-white items-center">
            {/* Texto */}
            <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left px-4">
              <h2 className="text-5xl font-bold">Vita Farma</h2>
              <p className="text-xl">Sua saúde a um clique de distância!</p>
            </div>
            {/* Imagem */}
            <div className="flex justify-center">
              <img 
                src="https://ik.imagekit.io/o30b32vbc/vitafarma.png?updatedAt=1744818647321"
                alt="Imagem da Página Home"
                className="w-2/3 max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  