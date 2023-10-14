import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

const EditShoe = ({ shoeToEdit }: any) => {
  const [shoeName, setShoeName] = useState(shoeToEdit?.name);
  const [shoeType, setShoeType] = useState(shoeToEdit?.type);
  const [shoePrice, setShoePrice] = useState(shoeToEdit?.price);

  const editShoe = async () => {
    try {
      const shoeData = {
        id: shoeToEdit.id,
        name: shoeName,
        type: shoeType,
        price: shoePrice,
      };

      const response = await axios.put(
        `http://localhost:3000/shoes/${shoeToEdit.id}`,
        shoeData,
        { headers: { "Content-Type": "application/json" } },
      );

      if (response.status === 200) {
        window.location.href = `/${shoeToEdit.id}`;
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <h2>Edit Shoe</h2>

      <div>
        <label htmlFor="">Shoe Name</label>
        <Input
          type="text"
          value={shoeName}
          onChange={(e) => setShoeName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Shoe Type</label>
        <Input
          type="text"
          value={shoeType}
          onChange={(e) => setShoeType(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Shoe Price</label>
        <Input
          type="text"
          value={shoePrice}
          onChange={(e) => setShoePrice(e.target.value)}
        />
      </div>

      <Button onClick={() => editShoe()} text="Save Changes"/>
    </div>
  );
};

export default EditShoe;
