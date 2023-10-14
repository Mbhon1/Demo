import db from "../../db/db.js";

export const getItem = (id) => {
  try {
    const wash = db?.washType?.filter((wash) => wash?.id === id)[0];
    return wash;
  } catch (error) {
    console.log("Error", error);
  }
};

export const listItems = () => {
  try {
    return db?.washType;
  } catch (error) {
    console.log("Error", error);
  }
};

export const editItem = (id, data) => {
  try {
    const index = db.washType.findIndex((wash) => wash.id === id);

    if (index === -1) throw new Error("Wash not found");
    else {
      db.washType[index] = data;
      return db.washType[index];
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export const addItem = (data) => {
  try {
    const newWashType = {
      id: db.washType.length + 1,
      ...data,
    };
    db.washType.push(newWashType);
    return newWashType;
  } catch (error) {
    console.log("Error", error);
  }
};

export const deleteItem = (id) => {
  try {
    const index = db.washType.FindIndex((wash) => wash.id === id);

    if (index === -1) throw new Error("Wash type not found");
    else {
      db.washType.splice(index, 1);
      return db.washType;
    }
  } catch (error) {}
};
