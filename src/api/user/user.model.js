const { Schema, model, models } = require("mongoose");


const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: true,
      
      validate: [
        {
          async validator(value) {
            try {
              const emailDB = await models.user.findOne({ email: value });
              return !emailDB;
            } catch (error) {
              console.error(error);
              return false; 
            }
          },
          message: "email already exist",
        },
      ],
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("user", userSchema);

module.exports = User;