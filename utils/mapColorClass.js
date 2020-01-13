export default function mapColorClass( color ) {
	const colorClassMap = {
	  red: 'text-danger',
	  blue: 'text-info',
	  green: 'text-success',
	  black: 'text-black',
	};

	return colorClassMap[ color ] || '';
}
