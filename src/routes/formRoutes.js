const express = require("express");
const {
  getForms,
  getForm,
  createForm,
  updateForm,
  deleteForm,
} = require("../controllers/formController");

const router = express.Router();

// Routes
router.get("/forms", getForms);
router.get("/forms/:id", getForm);
router.post("/forms", createForm);
router.put("/forms/:id", updateForm);
router.delete("/forms/:id", deleteForm);

module.exports = router;
