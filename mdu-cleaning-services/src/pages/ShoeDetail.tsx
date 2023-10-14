import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";

type ShoeIdProp = {
  id: string | number;
};

let shoes: ShoeIdProp;

const ShoeDetail = ({ setShoeToEdit }: any) => {
  const [shoe, setShoe] = useState<any>([]);
  const { shoeId } = useParams();

  const getShoe = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/shoes/${shoeId}`);

      if (response.status === 200) {
        setShoe(response.data);
        setShoeToEdit(response.data);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getShoe();
  }, []);

  const deleteShoe = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/shoes/${shoeId}`,
      );

      if (response.status == 200) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <h2>Shoe Detail</h2>
      {shoe && (
        <section>
          <p>Shoe name: {shoe.name}</p>
          <p>Shoe type: {shoe.type}</p>
          <p>Shoe price: {shoe.price}</p>

          <div>
            <Link to={`/${shoes?.id}/edit`}>
              <button>Edit Shoe</button>
            </Link>

            <Button onClick={() => deleteShoe()} text="Delete Shoe"/>
          </div>
        </section>
      )}
    </div>
  );
};

export default ShoeDetail;
