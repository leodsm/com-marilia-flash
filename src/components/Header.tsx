import { Search, Menu, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

const Header = () => {
  const menuItems = [
    "Marília",
    "Região",
    "Brasil",
    "Mundo",
    "Entretenimento"
  ];

  interface UserInfo {
    name: string;
    picture: string;
  }

  const [user, setUser] = useState<UserInfo | null>(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const profile = await res.json();
        setUser(profile);
      } catch (err) {
        console.error(err);
      }
    },
    onError: () => console.log("Login Failed"),
  });

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-header border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl lg:text-2xl font-bold text-primary tracking-tight">
              Com<span className="text-coral">Marília</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'text-coral border-b-2 border-coral pb-1' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
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
                placeholder="Buscar..."
                className="w-48 lg:w-64 pr-10 bg-secondary border-border rounded-full text-sm"
              />
              <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Action Buttons */}
            <Button size="sm" variant="ghost" className="hidden md:flex">
              <Bell className="h-4 w-4" />
            </Button>
            
              {user ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-8 h-8 rounded-full hidden md:block"
                />
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="hidden md:flex"
                  onClick={() => login()}
                >
                  <User className="h-4 w-4 mr-2" />
                  Entrar
                </Button>
              )}

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