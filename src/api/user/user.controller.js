// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("./user.model");

// module.exports = {
//   async signUp(req, res) {
//     try {
//       const { fullName, email, password } = req.body;

//       const encPassword = await bcrypt.hash(password, 8);
//       const user = await User.create({
//         fullName,
//         email,
//         password: encPassword,
//       });

//       const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
//         expiresIn: 60 * 60 * 24,
//       });

//       res.status(201).json({
//         message: "User Created Successfully",
//         data: { fullName, email, token },
//       });
//     } catch (error) {
//       res
//         .status(400)
//         .json({ message: "User could not created", error: error.message });
//     }
//   },

//   async signIn(req, res) {
//     try {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new Error("Wrong email or password");
//       }
//       const isValid = await bcrypt.compare(password, user.password);

//       if (!isValid) {
//         throw new Error("Wrong email or password");
//       }

//       const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
//         expiresIn: 60 * 60 * 24,
//       });

//       res
//         .status(200)
//         .json({ message: "User login successfully", data: { email, token } });
//     } catch (error) {
//       res
//         .status(400)
//         .json({ message: "User could not login", error: error.message });
//     }
//   },

//   async createUser(req, res) {
//     try {
//     const data = req.body;

//     const user = await User.create({ ...data})

//     res.status(201).json({ message: 'User created', data: user})
    
//   } catch (error) {
//     res.status(400).json({ message: 'User could not created', data: error.message})
//   }
// },

//   async listUsers(req, res) {
//     try {
//       const users = await User.find()

//       res.status(200).json({ message: "Users found", data: users });
//     } catch (error) {
//       res.status(400).json({ message: 'User not found', data: error});
//     }
//   },

//   async showUser(req, res) {
//     try {
//       const { userId } = req.params;

//       const user = await User.findById(userId);

//       res.status(200).json({ message: "User found", data: user });
//     } catch (error) {
//       res.status(400).json({ message: 'User not found', data: error})
//     }
//   },

//   async updateUser(req, res) {
//     try {
//       const { userId } = req.params;
//       const data = req.body;

//       const user = await User.findByIdAndUpdate(userId, data, {new: true});

//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }

//       res.status(200).json({ message: "User updated", data: user });
//     } catch (error) {
//       res
//         .status(400)
//         .json({ message: "Failed to update user", error: error.message });
//     }
//   },

  
// };

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./user.model");

module.exports = {
  async signUp(req, res) {
    try {
      const { fullName, email, password } = req.body;

      const encPassword = await bcrypt.hash(password, 8);
      const user = await User.create({
        fullName,
        email,
        password: encPassword,
      });

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24,
      });

      res.status(201).json({
        message: "Usuario creado exitosamente",
        data: { fullName, email, token },
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: "No se pudo crear el usuario", error: error.message });
    }
  },

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Correo o contraseña incorrectos");
      }
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        throw new Error("Correo o contraseña incorrectos");
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24,
      });

      res.status(200).json({ message: "Usuario ha iniciado sesión correctamente", data: { email, token } });
    } catch (error) {
      res
        .status(400)
        .json({ message: "No se pudo iniciar sesión", error: error.message });
    }
  },

  async createUser(req, res) {
    try {
      const data = req.body;

      const user = await User.create({ ...data });

      res.status(201).json({ message: 'Usuario creado', data: user });
    } catch (error) {
      res.status(400).json({ message: 'No se pudo crear el usuario', error: error.message });
    }
  },

  async listUsers(req, res) {
    try {
      const users = await User.find();

      res.status(200).json({ message: "Usuarios encontrados", data: users });
    } catch (error) {
      res.status(400).json({ message: 'Usuarios no encontrados', data: error });
    }
  },

  async showUser(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findById(userId);

      res.status(200).json({ message: "Usuario encontrado", data: user });
    } catch (error) {
      res.status(400).json({ message: 'Usuario no encontrado', data: error });
    }
  },

  async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const data = req.body;

      const user = await User.findByIdAndUpdate(userId, data, { new: true });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.status(200).json({ message: "Usuario actualizado", data: user });
    } catch (error) {
      res
        .status(400)
        .json({ message: "No se pudo actualizar el usuario", error: error.message });
    }
  },
};
