import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    // Validate request body
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill the full reservation form!", 400));
    }

    try {
        // Create a new reservation
        const reservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
        });

        // Send success response
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully!",
            // reservation,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationError = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationError.join(", "), 400));
        }
        return next(error);
    }
};
