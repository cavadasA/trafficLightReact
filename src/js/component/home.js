import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("");
	return (
		<div className="row justify-content-center mt-5">
			<div className="col-1 bg-dark px-5 py-5 lights">
				<div className="row py-3">
					<span
						className={
							"red-dot" + (color === "red" ? " selected" : "")
						}
						onClick={() => setColor(() => "red")}></span>
				</div>
				<div className="row py-3">
					<span
						className={
							"yellow-dot" +
							(color === "yellow" ? " selected" : "")
						}
						onClick={() => setColor(() => "yellow")}></span>
				</div>
				<div className="row py-3">
					<span
						className={
							"green-dot" + (color === "green" ? " selected" : "")
						}
						onClick={() => setColor(() => "green")}></span>
				</div>
			</div>
		</div>
	);
}
