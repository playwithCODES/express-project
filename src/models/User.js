import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "User name is required"],  // Changed from require to required
    minLength: [2, "user name can not be less than 2 characters"],
  },
  email: {
    type: String,
    require: [true, "Email is required "],  // Changed from require to required
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        return emailRegex.test(value);
      },
      message: "Invalid email address",  // Fixed spelling of 'Invalid'
    },
  },
  password: {
    type: String,
    require: [true, "Password is required"],  // Changed from require to required
    minLength: [6, "Password must be at least 6 characters long"],
  },
  roles: {
    type: [String],
    default: ["USER"],
    enum: ["USER", "ADMIN", "MERCHANT"],
  },
  phone: {
    type: String,
    require: [true, "Phone Number is required"],  // Changed from require to required
    minLength: [6, "Invalid Phone number"],
    maxLength: [13, "Invalid Phone number"],
  },
  address: {
    city: {
      type: String,
      require: [true, "Address City is required"],  // Changed from require to required
    },
    province: {
      type: String,
      require: [true, "Address Province is required"],  // Changed from require to required
    },
    street: String,
    country: {
      type: String,
      default: "Nepal",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Fixed the function call without parentheses
  },
  profileImageUrl: String,
  isActive: {
    type: Boolean,
    default: true,
  },
});

const model = mongoose.model("User", userSchema);
export default model;
