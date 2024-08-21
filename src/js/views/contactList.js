import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/contactList.css";

export const ContactList = () => (
	<div className="container mt-5">
		<h1 className="text-center mb-5">Contact List</h1>
		<div className="card mb-3" style={{width: "90%"}}>
			<div className="row g-0">
				<div className="col-md-3">
					<img src={rigoImage} className="img-fluid rounded-start ms-2 mt-2" alt="Rigo Image"/>
				</div>
				<div className="col-md-6">
					<div className="card-body">
						<h5 className="name card-title">Name</h5>
						<p className="direction card-text text-secondary">Direction</p>
						<p className="contact card-text text-secondary">Contact</p>
						<p className="mail card-text text-secondary">Mail</p>
					</div>
				</div>
				<div className="contactoptions col-md-3">
					<button>Edit</button>
					{/* modal */}
					<button type="button" className="btn text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
					Delete contact
					</button>
					<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">If the red button could destroy the world, would you press it?</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Are you sure you want to delete this contact? (Say yes, please!)
						</div>
						<div className="modal-footer">
							<button type="button" className="nodelete btn btn-light" data-bs-dismiss="modal">I will regret it</button>
							<button type="button" className="delete btn btn-danger">Destroy it!</button>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
