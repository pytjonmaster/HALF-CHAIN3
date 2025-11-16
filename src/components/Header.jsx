import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { User, LogOut, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const { user, signout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-[#0F1729]/50 to-[#121032]/50 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center w-full">
              <Link to="/" className="flex items-center">
                <img src="/images/Lychee.svg" alt="Lychee" className="h-4 w-auto" />
              </Link>
              <nav className="hidden md:flex ml-12 space-x-8 mx-auto">
                <Link to="/about" className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">About Us</Link>
                <Link to="/apartments" className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Apartments</Link>
                <Link to="/smart-contracts" className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Smart Contracts</Link>
                <Link to="/features" className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Features</Link>
                <Link to="/compliance" className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Compliance</Link>
                <Link to="/contact" className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Contact Us</Link>
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard" className="flex items-center space-x-2 text-foreground/80 hover:text-[#EC2F55] transition-colors">
                    <User className="h-5 w-5" />
                    <span className="text-sm">{user.email}</span>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleSignOut}
                    className="text-sm flex items-center space-x-2 border-[#EC2F55] text-[#EC2F55] hover:bg-[#EC2F55]/10"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign out</span>
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Link to="/signin">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`text-sm border-[#EC2F55] text-[#EC2F55] hover:bg-[#EC2F55]/10 ${location.pathname === '/signin' ? 'bg-muted' : ''}`}
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button 
                      size="sm" 
                      className={`text-sm bg-[#EC2F55] hover:bg-[#EC2F55] text-white ${location.pathname === '/signup' ? 'bg-[#EC2F55]' : ''}`}
                    >
                      Sign up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="text-foreground hover:text-[#EC2F55]"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">About Us</Link>
              <Link to="/apartments" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Apartments</Link>
              <Link to="/smart-contracts" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Smart Contracts</Link>
              <Link to="/features" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Features</Link>
              <Link to="/compliance" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Compliance</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-[#EC2F55] transition-colors text-sm">Contact Us</Link>
              <div className="pt-4 border-t border-border">
                {user ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/80">{user.email}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => { handleSignOut(); setIsOpen(false); }}
                      className="text-sm border-[#EC2F55] text-[#EC2F55] hover:bg-[#EC2F55]/10"
                    >
                      Sign out
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm" className="text-sm border-[#EC2F55] text-[#EC2F55] hover:bg-[#EC2F55]/10">Sign in</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button size="sm" className="text-sm bg-[#EC2F55] hover:bg-[#EC2F55] text-white">Sign up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 