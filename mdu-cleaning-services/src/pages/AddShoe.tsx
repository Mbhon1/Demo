import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

const AddShoe = () => {
  const [shoeName, setShoeName] = useState("");
  const [shoeType, setShoeType] = useState("");
  const [shoePrice, setShoePrice] = useState("");

  const addShoe = async () => {
    try {
      const shoeData = {
        name: shoeName,
        type: shoeType,
        price: shoePrice,
      };

      const response = await axios.post(
        "http:localhost:3000/shoes/",
        shoeData,
        { headers: { "Content-Type": "application/json" } },
      );

      if (response.status === 200) {
        window.location.href = `/${response.data.id}`;
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div>
      <h2>Add shoe</h2>

      <div>
        <label htmlFor="">Shoe Name</label>
        <Input
          type="text"
          value={shoeName}
          onChange={(e: any) => setShoeName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Shoe type</label>
        <Input
          type="text"
          value={shoeType}
          onChange={(e: any) => setShoeType(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Shoe Price</label>
        <Input
          type="text"
          value={shoePrice}
          onChange={(e: any) => setShoePrice(e.target.value)}
        />
      </div>

      <Button text="Add Shoe" onClick={() => addShoe()}/>
    </div>
  );
};

export default AddShoe;
