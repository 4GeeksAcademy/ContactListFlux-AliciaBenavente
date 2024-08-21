import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/addcontact.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
		<form>
		<div class="row mb-3">
			<label for="FullName" class="col-sm-2 col-form-label">FullName</label>
			<div class="col-sm-10">
			<input type="text" class="form-control" id="FullName"/>
			</div>
		</div>
		<div class="row mb-3">
			<label for="Email" class="col-sm-2 col-form-label">Email</label>
			<div class="col-sm-10">
			<input type="email" class="form-control" id="Email"/>
			</div>
		</div>
		<div class="row mb-3">
			<label for="Phone" class="col-sm-2 col-form-label">Email</label>
			<div class="col-sm-10">
			<input type="number" class="form-control" id="Phone"/>
			</div>
		</div>
		<div class="row mb-3">
			<label for="Adress" class="col-sm-2 col-form-label">Password</label>
			<div class="col-sm-10">
			<input type="text" class="form-control" id="Adress"/>
			</div>
		</div>
		</form>


			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back to Contact List</button>
			</Link>
		</div>
	);
};
