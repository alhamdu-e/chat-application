function FormError({ children }) {
	return (
		<div>
			<p className="text-sm font-thin text-red-300">{children}</p>
		</div>
	);
}

export default FormError;
