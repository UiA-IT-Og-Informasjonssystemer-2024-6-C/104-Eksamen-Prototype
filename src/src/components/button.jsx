export default function Button(props) {
	const { text, icon, ...restProps } = props;

	return (
		<button class="button" {...restProps}>
			{icon && <span className="icon">{<img src={icon} />}</span>}
			{text && <span className="text">{text}</span>}
		</button>
	);
}
