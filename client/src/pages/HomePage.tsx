import LazyNav from "../components/LazyNav";
import { ModeToggle } from "@/components/mode-toggle";
import './HomePage.css'; // Assuming you are using CSS files for styling
function HomePage() {
  return (
    <div>
      <h1 className="text-amber-300">Hi !</h1>
      <LazyNav page = 'home'/>
    </div>
  )
}

export default HomePage
