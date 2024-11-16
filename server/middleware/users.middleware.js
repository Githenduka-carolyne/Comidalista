import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const validateInfo = async (req, res, next) => {
  try {
    const { firstName, lastName, emailAddress, phoneNumber, password } =
      req.body;
    const parsedPhone = parseInt(phoneNumber);
    if (!firstName)
      return res
        .status(400)
        .json({ success: false, message: "First name required" });
    if (!lastName)
      return res
        .status(400)
        .json({ success: false, message: "Last name required" });
    if (!emailAddress)
      return res
        .status(400)
        .json({ success: false, message: "Email Address required" });
    if (!phoneNumber)
      return res
        .status(400)
        .json({ success: false, message: "Phone Number required" });
    if (!password)
      return res
        .status(400)
        .json({ success: false, message: "password required" });

    const existingUser = await prisma.users.findFirst({
      where: { emailAddress: emailAddress },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User already exists with this email address.",
        });
    }

    const existingphoneNumber = await prisma.users.findFirst({
      where: { phoneNumber: parsedPhone },
    });

    if (existingphoneNumber) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User already exists with this phone number.",
        });
    }

    next();
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
