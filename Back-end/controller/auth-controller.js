const bcrypt = require("bcryptjs");
const User = require("../modal/user-modal");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Log the request body to debug the issue
  console.log("Request body:", req.body);

  // Check if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please provide all required fields (username, email, password)" });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Log the salt to ensure it is being generated correctly
    console.log("Generated salt:", salt);

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, salt);

    // Log the hashed password to ensure it's being hashed correctly
    console.log("Hashed password:", hashedPassword);

    // Create the new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser };
