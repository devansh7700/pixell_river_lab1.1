import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Department from "./components/department/Department";
import { departments } from "./data/employees";

function App() {
  return (
    <>
      <Header />

      <main>
        {departments.map((dept) => (
          <Department key={dept.name} department={dept} />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
