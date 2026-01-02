import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],  // Corrected from require to required
    minLength: [2, "user name can not be less than 2 characters"],
  },
 email: {
  type: String,
  required: [true, "Email is required"],
  unique: true,  
  trim: true,
  lowercase: true,
  validate: {
    validator: (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    },
    message: "Invalid email address",
  },
},

  password: {
    type: String,
    required: [true, "Password is required"],  // Corrected from require to required
    minLength: [6, "Password must be at least 6 characters long"],
  },
  roles: {
    type: [String],
    default: ["USER"],
    enum: ["USER", "ADMIN", "MERCHANT"],
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required"],  // Corrected from require to required
    minLength: [6, "Invalid Phone number"],
    maxLength: [13, "Invalid Phone number"],
  },
  address: {
    city: {
      type: String,
      required: [true, "Address City is required"],  // Corrected from require to required
    },
    province: {
      type: String,
      required: [true, "Address Province is required"],  // Corrected from require to required
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
