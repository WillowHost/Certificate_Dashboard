
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Menu } from "lucide-react";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavBarProps {
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
}

const NavBar: React.FC<NavBarProps> = ({ githubUrl, linkedinUrl, portfolioUrl }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute top-4 right-4 sm:right-6 z-20 flex items-center">
      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white/90 hover:bg-sky-50 shadow-sm h-10 w-10 flex items-center justify-center">
              <Menu size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm w-56 p-2">
            <DropdownMenuItem asChild className="py-3 px-4 my-1 hover:bg-sky-50">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-3" size={18} />
                GitHub
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="py-3 px-4 my-1 hover:bg-sky-50">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Linkedin className="mr-3" size={18} />
                LinkedIn
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="py-3 px-4 my-1 hover:bg-sky-50">
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-3" size={18} />
                Portfolio
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            <NavigationMenuItem>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-white/80 hover:bg-sky-50">
                  <Github className="mr-1" size={16} />
                  GitHub
                </Button>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-white/80 hover:bg-sky-50">
                  <Linkedin className="mr-1" size={16} />
                  LinkedIn
                </Button>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-white/80 hover:bg-sky-50">
                  <ExternalLink className="mr-1" size={16} />
                  Portfolio
                </Button>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
};

export default NavBar;
