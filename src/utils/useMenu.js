import { useState, useEffect} from "react";

export default function useMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        if(isMenuOpen){
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = 0;
            document.body.style.left = 0;
            document.body.style.right = 0;
            document.body.style.bottom = 0;


        }else{
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.top = 'unset';
            document.body.style.left = 'unset';
            document.body.style.right = 'unset';
            document.body.style.bottom = 'unset';
            
        }
    }, [isMenuOpen])

    return { isMenuOpen, toggleMenu}
}
