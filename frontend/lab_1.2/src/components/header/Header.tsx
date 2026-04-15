import "./Header.css";
import {SignedIn,SignedOut,SignInButton,UserButton,} from "@clerk/clerk-react";

function Header() {
  return (
    <header className="site-header">
      <h1>Pixell River Employee Directory</h1>
      <p>Welcome to the Pixell River Financial staff directory.</p>

      <div style={{ marginTop: "1rem" }}>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      
    </header>
  );
}

export default Header;