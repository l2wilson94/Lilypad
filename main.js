
const style = HTML `
	<style>
		
		.pad {
			color: rgb(240, 240, 240);
			font-family: UbuntuMono;
			font-size: 50px;
			background-color: rgb(74, 92, 126);
			display: inline-block;
			padding: 30px;
			border-radius: 40px;
			position: absolute;
			white-space: pre;
			tab-size: 4;
			margin: 15px;
		}
	
	</style>
`

document.head.appendChild(style)

const pad = HTML `
	<div class="pad"></pad>
`

document.body.appendChild(pad)

on.keydown(e => {
	
	pad.textContent += getCharFromKey(e.key)
	//e.preventDefault()
})

const getCharFromKey = (key) => {
	if (key == "Tab") return "	"
	if (key == "Enter") return "\n"
	if (key == "Shift") return ""
	return key
}

