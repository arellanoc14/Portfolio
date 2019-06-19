import React from "react";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/all";
const startState = { autoAlpha: 0, y: -50 };
const Contact = props => <Transition
	
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenLite.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			x: props.show ? 0 : 500,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
		
			<div className="alert alert-success">
				<h3 className="text-center mb-0">CONTACT</h3>
			</div>

			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="mail">Email</label>
						<input type="email" name="mail" id="mail" className="form-control"/>
					</div>
					<div className="form-group">
						<label htmlFor="comments">Comments</label>
						<textarea name="comments" id="comments" rows="5" className="form-control"></textarea>
					</div>
					<button className="btn gsap-btn">
						Submit
					</button>
				</div>
			</div>

		</div>
	</div>
</Transition>;
export default Contact