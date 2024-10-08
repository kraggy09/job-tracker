import jwt from "jsonwebtoken";

export const generateToken = async (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d", // Token expires in 30 days
    });
    console.log(token);
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};
