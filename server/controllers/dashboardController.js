const prisma = require("../prisma/prismaClient");

const getDashboardStats = async (req, res) => {
  try {
    const totalTasks = await prisma.task.count();

    const completedTasks = await prisma.task.count({
      where: {
        status: "DONE",
      },
    });

    const pendingTasks = await prisma.task.count({
      where: {
        status: {
          not: "DONE",
        },
      },
    });

    const overdueTasks = await prisma.task.count({
      where: {
        dueDate: {
          lt: new Date(),
        },
        status: {
          not: "DONE",
        },
      },
    });

    res.status(200).json({
      totalTasks,
      completedTasks,
      pendingTasks,
      overdueTasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};