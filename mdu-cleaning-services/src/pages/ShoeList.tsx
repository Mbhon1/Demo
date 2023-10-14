
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";

type ShoesProps = {
  id: string | number;
  name: string;
  price: string | number;
  type: string;
};

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);

  const getShoes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/shoes");

      if (response.status === 200) {
        setShoes(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getShoes();
  }, []);

  return (
    <div>
      <h2>Shoe list</h2>
      {shoes?.map((shoe: ShoesProps) => {
        return (
          <div key={shoe?.id}>
            <p>
              {shoe?.name} - {shoe?.type} - {shoe?.price}
            </p>

            <Link to={`/${shoe?.id}`}>
              <Button text="Shoe Detail"/>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShoeList;
