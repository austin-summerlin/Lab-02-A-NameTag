const input = document.getElementById("input");
const button = document.getElementById("button");
const pronouns = document.getElementById("pronouns")
const pink = document.getElementById("pink");
const font = document.getElementById("font");
const topp = document.getElementById("topp");
const middles = document.getElementById("middles");
const bottoms = document.getElementById("bottoms");
const blue = document.getElementById("blue")
const purple = document.getElementById("purple")
// console.log();


button.addEventListener('click', () => {
    middles.textContent = input.value;
    input.value = '';

});

pink.addEventListener('click', () => {
    topp.style.backgroundColor = 'pink';
});

pink.addEventListener('click', () => {
    bottoms.style.backgroundColor = 'pink';
});
pronouns.addEventListener('click', () => {
    bottoms.textContent = input.value;
    input.value = '';
});
blue.addEventListener('click', () => {
    topp.style.backgroundColor = 'blue';
});

blue.addEventListener('click', () => {
    bottoms.style.backgroundColor = 'blue';
});
purple.addEventListener('click', () => {
    topp.style.backgroundColor = 'purple';
});

purple.addEventListener('click', () => {
    bottoms.style.backgroundColor = 'purple';
});