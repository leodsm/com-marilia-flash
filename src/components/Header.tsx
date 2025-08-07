import { Search, Menu, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const menuItems = [
    "Notícias",
    "Comunidade", 
    "Cultura Pop",
    "Curiosidades",
    "Contato"
  ];

  return (
    <header className="sticky top-0 z-50 bg-card shadow-header border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary">
              Com<span className="text-coral">Marília</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-3">
            {/* Desktop Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                placeholder="Buscar notícias..."
                className="w-64 pr-10 bg-background border-border rounded-full"
              />
              <Search className="absolute right-3 h-4 w-4 text-gray-warm" />
            </div>

            {/* Action Buttons */}
            <Button size="sm" variant="ghost" className="hidden md:flex">
              <Bell className="h-4 w-4" />
            </Button>
            
            <Button size="sm" variant="outline" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>

            {/* Mobile Search */}
            <Button size="sm" variant="ghost" className="md:hidden">
              <Search className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Button size="sm" variant="ghost" className="lg:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;