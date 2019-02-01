import React from "react";

// Import the styles
import { styles } from "../styles";

const Button = ({ content }) => {
  return <button style={styles.BannerButton}>{content}</button>;
};

export default Button;
