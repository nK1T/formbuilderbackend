const Form = require("../models/Form");

// Fetch all forms
const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving forms", error });
  }
};

// Fetch a single form by ID
const getForm = async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findById(id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving form", error });
  }
};

// Create a new form
const createForm = async (req, res) => {
  const { title, inputs } = req.body;
  try {
    const newForm = new Form({ title, inputs });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(500).json({ message: "Error creating form", error });
  }
};

// Update a form by ID
const updateForm = async (req, res) => {
  const { id } = req.params;
  const { title, inputs } = req.body;
  try {
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      { title, inputs },
      { new: true }
    );
    if (!updatedForm) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(500).json({ message: "Error updating form", error });
  }
};

// Delete a form by ID
const deleteForm = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedForm = await Form.findByIdAndDelete(id);
    if (!deletedForm) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting form", error });
  }
};

module.exports = {
  getForms,
  getForm,
  createForm,
  updateForm,
  deleteForm,
};
