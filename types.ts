const a = document.getElementById('a')! as HTMLInputElement
const b = document.getElementById('b')! as HTMLInputElement

const calc = document.getElementById('calc')

function add (a: number, b: number): number {
	return a + b
}

calc.addEventListener('click', () => {
  console.log(add(1, 2))
  console.log(add('1', '2'))
})
