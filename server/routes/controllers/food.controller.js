import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getMenus = async (req, res) => {
  try {
    const menus = await prisma.foods.findMany(); 

    res.json({ success: true, menu: menus });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const createMenu = async (req, res) => {
  try {
    const { type, price, category} = req.body;      

    const newMenu = await prisma.foods.create({   
      data:{
        type: type,
        price: price,
        category:category,
      },
    });

    res.json({ success: true, menu: { ...newMenu } });
  } catch (e) {
    console.error(e);  
    res.status(500).json({ success: false, message: e.message });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMenu = await prisma.foods.delete({
      where: { id: parseInt(id) },
    });

    res.json({ success: true, menu: { ...deletedMenu } });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, price, category } = req.body;

   
    if (!type && !price && !category) {
      return res.status(400).json({ success: false, message: 'No fields to update' });
    }

 
    const existingFood = await prisma.foods.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingFood) {
      return res.status(404).json({ success: false, message: 'Food item not found' });
    }

    
    const updatedFood = await prisma.foods.update({
      where: { id: parseInt(id) },
      data: {
        type: type ?? existingFood.type,
        price: price ?? existingFood.price,
        category:category ?? existingFood.category
      },
    });

    res.json({ success: true, menu: updatedFood });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
};


export const getMenuById = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await prisma.foods.findUnique({
      where: { id: parseInt(id) },
    });

    if (!food) {
      return res.status(404).json({ success: false, message: 'Food item not found' });
    }

    res.json({ success: true, menu: food });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
};
