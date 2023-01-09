let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat)
{
    cats.push(cat);
}
function destructivelyPrependCat(cat)
{
    cats.unshift(cat);
}
function destructivelyRemoveLastCat()
{
    cats.pop();
}
function destructivelyRemoveFirstCat()
{
    cats.shift();
}
function appendCat(cat)
{
    let newCats = [...cats];
    newCats.push(cat);
    return newCats;
}
function prependCat(cat)
{
    let newCats = [...cats];
    newCats.unshift(cat);
    return newCats;
}
function removeLastCat()
{
    let newCats = cats.slice(0, -1);
    return newCats;
}
function removeFirstCat()
{
    let newCats = cats.slice(1);
    return newCats;
}