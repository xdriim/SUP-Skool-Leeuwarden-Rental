import { ProductGrid } from "./ProductGrid";
import style from "./App.module.css";
import GenerateHeader from "./Header";
import GenerateFooter from "./Footer";

export function App() {
  return (
    <div>
      <GenerateHeader />
      <main>
        <ProductGrid />
      </main>
      <GenerateFooter />
    </div>
  );
}