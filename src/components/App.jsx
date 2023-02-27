import { ProductGrid } from "./ProductGrid";
// import style from "./App.module.css";
import GenerateHeader from "./Header";
import GenerateFooter from "./Footer";
import { Routing } from "./../Router";

export function App() {
  return (
    <div>
      <GenerateHeader />
      <main>
        <Routing />
      </main>
      <GenerateFooter />
    </div>
  );
}