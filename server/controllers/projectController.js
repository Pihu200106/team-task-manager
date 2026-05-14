const prisma = require("../prisma/prismaClient");

const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        createdById: req.user.id,
      },
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        createdBy: true,
      },
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProjects,
};