import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, emailAddress, phoneNumber, password } =
      req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const parsedPhone = parseInt(phoneNumber);

    const newUser = await prisma.users.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: parsedPhone,
        password: hashedPassword,
      },
    });

    res.json({ success: true, user: { ...newUser, password: undefined } });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const loginUser = async (req, res) => {
  const { emailAddress, password } = req.body;
  try {
    const user = await prisma.users.findFirst({
      where: { emailAddress,},
    });

    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (passwordMatch) {
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          emailAddress: user.emailAddress,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "30m",
        });
        res.cookie("access_token", token, { httpOnly: true });
        res.status(200).json({ success: true, data: payload });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Wrong credentials entered" });
      }
    } else {
      res
        .status(401)
        .json({ success: false, message: "Wrong credentials entered" });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
