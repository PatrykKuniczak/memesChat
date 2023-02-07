import { FC } from "react";
import { ChangeEventHandler } from "react";
import { Label, Input, Error } from "./FormField.styled";

interface IFormFieldType {
	id: string;
	label: string;
	type: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	value?: string;
	error: string | false | undefined;
}

const FormField: FC<IFormFieldType> = formFieldData => {
	const { id, label, type, onChange, value, error } = formFieldData;

	return (
		<>
			<Label>{label}</Label>
			<Input
				type={type}
				name={id}
				id={id}
				onChange={onChange}
				value={value}
			/>
			{error && <Error>{error}</Error>}
		</>
	);
};

export default FormField;
