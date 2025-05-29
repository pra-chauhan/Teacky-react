import { ShoppingBag, User, Search, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "DINING", to: "/products" },
  { label: "BEDROOM", to: "/products" },
  { label: "LIVING", to: "/products" },
  { label: "HOMEDECOR", to: "/products" },
  { label: "OFFICE", to: "/products" },
  { label: "OUTDOOR", to: "/products" },
  { label: "SERVICES", to: "/services" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-serif text-primary">
          Teacky
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Bar (Hidden on xs) */}
          <div className="hidden sm:flex items-center border border-border rounded px-2 py-1 w-40 md:w-64">
            <Search className="h-5 w-5 text-foreground/70 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-sm bg-transparent text-foreground placeholder:text-foreground/50"
            />
          </div>

          {/* Icons */}
          <Button variant="ghost" size="icon" aria-label="Like">
            <Heart className="h-5 w-5 text-foreground/70 hover:text-red-500 transition-colors" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingBag className="h-5 w-5 text-foreground/70 hover:text-green-600 transition-colors" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User Account">
            <User className="h-5 w-5 text-foreground/70 hover:text-blue-600 transition-colors" />
          </Button>

          {/* Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background px-4 pb-4 pt-2 shadow-lg">
          <nav className="flex flex-col space-y-3 text-foreground/80">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
