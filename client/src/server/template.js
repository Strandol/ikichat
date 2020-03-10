
const template = (title, initialState = {}, app = '') => `
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>${title}</title>
		<link href="style.build.css" rel="stylesheet">
	</head>
	</head>
	<body>
		<div id="root">${app}</div>
		<script>
			window.__STATE__ = ${JSON.stringify(initialState)}
		</script>
		<script src="bundle.js" charset="utf-8"></script>
	</body>
</html>
`

export default template
