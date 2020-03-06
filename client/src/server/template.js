
const template = app => `
<html>
	<head>
		<title>Ikichat SSR</title>
		<link href="style.build.css" rel="stylesheet"></head>
	</head>
	<body>
		<h1>Ikichat SSR application</h1>
		<div id="root">${app}</div>
		<script src="bundle.js" charset="utf-8"></script>
	</body>
</html>
`

export default template
