const createUser = (req, res) => {
  const userData = req.body

  res.status(201).json({
    message: "User created successfully",
    user: userData
  })
}

module.exports = {
  createUser
}