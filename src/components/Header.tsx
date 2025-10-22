import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">Der Wächter</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-accent transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-foreground hover:text-accent transition-colors">
            Услуги
          </Link>
        </nav>
        
        <Button className="bg-accent hover:bg-accent/90">
          Связаться с нами
        </Button>
      </div>
    </header>
  );
};

export default Header;
