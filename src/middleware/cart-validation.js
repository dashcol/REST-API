import { query, validationResult } from 'express-validator';

const validateCartItem = [
    // Validate productID
    query('productID').notEmpty().withMessage("Product ID is required"),
    
    // Validate quantity
    query('quantity')
      .notEmpty().withMessage("Quantity is required")
      .isInt({ min: 1 }).withMessage("Quantity must be a positive integer"),

    // Custom validation for userID (assuming it is passed via `req.userID`)
    (req, res, next) => {
        if (!req.userID) {
            return res.status(400).json({ error: "User ID is missing" });
        }
        next();
    },

    // Handle validation result
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export default validateCartItem;
