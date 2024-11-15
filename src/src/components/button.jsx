export default function Button(props) {
	const { text } = props;

	return (
		<button class="button" {...props}>
			{text}
		</button>
	);
}
