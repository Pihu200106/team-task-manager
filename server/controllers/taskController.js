const prisma = require("../prisma/prismaClient");

const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      dueDate,
      projectId,
      assignedTo,
    } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        dueDate: new Date(dueDate),
        projectId,
        assignedTo,
      },
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        project: true,
        user: true,
      },
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updatedTask = await prisma.task.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        status,
      },
    });

    res.status(200).json({
      message: "Task updated successfully",
      updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskStatus,
};