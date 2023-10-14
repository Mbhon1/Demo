import {
  getItem,
  listItems,
  editItem,
  addItem,
  deleteItem,
} from "../models/washes.models.js";

export const getWash = (req, res) => {
  try {
    const resp = getItem(parseInt(req.params.id));
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const listWash = (req, res) => {
  try {
    const resp = listItems();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editWash = (req, res) => {
  try {
    const resp = editItem(parseInt(req.params.id), req.body);
    res.status(200).json(resp);
    console.log("edit complete")
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addWash = (req, res) => {
  try {
    const resp = addItem(req.body);
    res.status(200).json(resp);
    console.log("item added")
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteWash = (req, res) => {
  try {
    const resp = deleteItem(parseInt(req.params.id));
    res.status(200).json(resp);
    console.log("item deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};
