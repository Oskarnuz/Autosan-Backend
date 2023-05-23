const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
const cookie = require("cookie");

module.exports = {
  async signUp(req, res) {
    try {
      const { fullName, email } = req.body;

      const encPassword = await bcrypt.hash(req.body.password, 8);
      
      const user = await User.create({
        fullName,
        email,
        password: encPassword,
      });

      res.status(201).json({
        message: "User Created Successfully",
        data: { user },
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: "User could not created", error: error.message });
    }
  },

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Wrong email or password");
      }
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        throw new Error("Wrong email or password");
      }

      const token = jwt.sign({ id: user._id, fullName: user.fullName }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24,
      });
    
      res
        .status(200)
        .json({ message: "User login successfully", token });
    } catch (error) {
      res
        .status(400)
        .json({ message: "User could not login", error: error.message });
    }
  },

  async createUser(req, res) {
    try {
      const data = req.body;

      const user = await User.create({ ...data });

      res.status(201).json({ message: 'User created', data: user });

    } catch (error) {
      res.status(400).json({ message: 'User could not be created', error: error.message });
    }
  },

  async listUsers(req, res) {
    try {
      const users = await User.find();

      res.status(200).json({ message: "Users found", data: users });
    } catch (error) {
      res.status(400).json({ message: 'User not found', error });
    }
  },

  async showUser(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User found", data: user });
    } catch (error) {
      res.status(400).json({ message: 'User not found', error });
    }
  },

  async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const data = req.body;

      const user = await User.findByIdAndUpdate(userId, data, { new: true });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User updated", data: user });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Failed to update user", error: error.message });
    }
  },
};
