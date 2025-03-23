import { User } from "../models/user_model.js";
import { sendEmail } from "../utils/mailing.js";
import { userValidator } from "../validators/validator.js";
import bcrypt, { hash } from "bcrypt";



export const registerUser = async (req, res) => {
    const { error, value } = userValidator.validate(req.body)
    if (error) {
        return res.status(400).json({ message: error.details[0].message })//debugging error
    }
    console.log("value", value)

    const existingUser = await User.findOne({ email: value.email });
    console.log("existingUser", existingUser);

    if (existingUser) {
        return res.status(409).json({ message: "User already registered" })
    } else {
        const hashedPassword = await bcrypt.hash(value.password, 12)
        //const newUser = User.create(...value, value.password=hashedPassword)
        const newUser = await User.create({
            userName: value.userName,
            email: value.email,
            password: hashedPassword
        })

        const sendWelcomeEmail = await sendEmail(newUser.email, "Welcome to Notes", newUser.userName);
        console.log(sendWelcomeEmail);


        // const sendWelcomeEmail = await sendEmail(newUser.email, "Welcome to Notes",
        //     `Hello ${newUser.userName}, You are welcome`)
        //     console.log(sendWelcomeEmail)

        return res.status(201).json({
            message: "User created successfully",
            data: newUser
        })




    }

}