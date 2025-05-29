
const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 text-center text-foreground/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">Teacky</h3>
            <p className="text-sm">Transforming spaces with timeless elegance.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">SHOP</h3>
            <ul className="space-y-1">
              <li><a href="/products" className="hover:text-primary">Dining</a></li>
              <li><a href="/products" className="hover:text-primary">Bedroom</a></li>
              <li><a href="/products" className="hover:text-primary">Living</a></li>
              <li><a href="/products" className="hover:text-primary">Home Decor</a></li>
              <li><a href="/products" className="hover:text-primary">Office</a></li>
              <li><a href="/products" className="hover:text-primary">Outdoor</a></li>
              </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">PAGES</h3>
            <ul className="space-y-1">
              <li><a href="" className="hover:text-primary">Home</a></li>
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/gallery" className="hover:text-primary">Gallery</a></li>
              <li><a href="/faqs" className="hover:text-primary">Faqs </a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            
              </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">TERMS</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-primary">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-primary"> Privacy Policy</a></li>
              
              </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">FOLLOW US</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">Facebook</a></li>
              <li><a href="#" className="hover:text-primary">X</a></li>
      
              </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">CONTACT US</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-primary">+91 98323 43321</a></li>
              <li><a href="#" className="hover:text-primary">michael.mit@example.com</a></li>
              </ul>
          </div>

          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
