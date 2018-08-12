import React from 'react';

const CheckboxOrRadioGroup = (props) => (
	<div>
		<label className="form-label">{props.title}</label>
		<div className="checkbox-group">
			{props.options.map((option, index) => {
				return (
					<label className="pt-control pt-checkbox">
						<input
							name={props.setName}
							key={option + index}
							onChange={props.controlFunc}
							value={option.word}
							checked={option.selected}
							type={props.type} />
							  <span className="pt-control-indicator"></span>
							  {option.sentenceStructure}
					</label>
				);
			})}
		</div>
	</div>
);



export default CheckboxOrRadioGroup;
