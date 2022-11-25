const checkRolMddl = (roles) => async (req, res, next) => {
  try {
    const { user } = req;
    const rolesUser = user.role;

    const checkRol = roles.some((x) => rolesUser.includes(x));

    if (!checkRol)
      return res.status(403).json({ message: "Not permissions rol" });

    next();
  } catch (err) {
    res.status(422).json({ error: "Error en auth middleware" });
  }
};

module.exports = { checkRolMddl };
