import React from 'react';

const CheckboxOrRadioGroup = (props) => (
	<div>
		<label className="form-label">{props.title}</label>
		<div className="checkbox-group">
			{props.options.map(option => {
				return (
					<label className="pt-control pt-checkbox" key={option}>
						<input
							name={props.setName}
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} />
							  <span className="pt-control-indicator"></span>
							  {option}
					</label>
				);
			})}
		</div>
	</div>
);



export default CheckboxOrRadioGroup;
