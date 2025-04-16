import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-auto" style={{ backgroundColor: '#72D6B6' }}>
      <div className="container mx-auto flex flex-col items-center py-4 text-white">
        <p className="text-xl font-bold">Vita Farma | &copy; {year}</p>
        <p className="text-lg">Acesse nossas redes sociais</p>
        <div className="flex gap-4">
          <a href="#"><LinkedinLogo size={32} weight="bold" /></a>
          <a href="#"><InstagramLogo size={32} weight="bold" /></a>
          <a href="#"><FacebookLogo size={32} weight="bold" /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
