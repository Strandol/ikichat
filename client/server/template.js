
const template = (title, initialState = {}, app = '') => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>${title}</title>
		<link href="style.build.css" rel="stylesheet">
	</head>
	<body>
		<div id="root">${app}</div>
		<script>
			window.__STATE__ = ${JSON.stringify(initialState)}
		</script>
		<script src="client.js" charset="utf-8"></script>
	</body>
</html>
`

export default template
