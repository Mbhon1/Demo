import { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";

const ShoeList = lazy(() => import("./pages/ShoeList"));
const ShoeDetail = lazy(() => import("./pages/ShoeDetail"));
const EditShoe = lazy(() => import("./pages/EditShoe"));
const AddShoe = lazy(() => import("./pages/AddShoe"));

export default function App() {
  const [shoeToEdit, setShoeToEdit] = useState(null);

  return (
    <section>
      <Router>
        <h1>Shoe Shelf</h1>

        <Link to="/add">
          <Button text="Add New Shoe" />
        </Link>

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <ShoeList />
              </Suspense>
            }
          />
          <Route
            path="/:shoeId"
            element={
              <Suspense fallback={<></>}>
                <ShoeDetail setShoeToEdit={setShoeToEdit} />
              </Suspense>
            }
          />
          <Route
            path="/:shoeId/edit"
            element={
              <Suspense fallback={<></>}>
                <EditShoe shoeToEdit={shoeToEdit} />
              </Suspense>
            }
          />
          <Route
            path="/add"
            element={
              <Suspense fallback={<></>}>
                <AddShoe />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </section>
  );
}
