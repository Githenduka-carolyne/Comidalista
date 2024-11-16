import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const makebooking = async (req, res) => {
  try {
    const { table, date, time } = req.body;  

    const newTable = await prisma.tables.create({   
      data:{
        table:table,
        date: date,
        time: time,
      },
    });

    res.json({ success: true, booking: { ...newTable }});
  } catch (e) {
    console.error(e);  
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const menus = await prisma.tables.findMany(); 

    res.json({ success: true, menu: menus });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
};
