import React from "react";
import PropTypes from "prop-types";
import styles from "./Text.module.css";

export default function Text({ children, size, weight, color }) {
	function fontSize(size) {
		return {
			extraSmall: "10px",
			small: "15px",
			medium: "20px",
			large: "25px",
			extraLarge: "30px",
		}[size];
	}

	function fontWeight(weight) {
		return {
			regular: "300",
			medium: "500",
			bold: "700",
			black: "900",
		}[weight];
	}

	return (
		<p
			className={styles.main}
			style={{
				fontSize: fontSize(size),
				fontWeight: fontWeight(weight),
				color: color,
			}}
		>
			{children}
		</p>
	);
}

Text.propTypes = {
	size: PropTypes.string,
	weight: PropTypes.string,
	color: PropTypes.string,
};
