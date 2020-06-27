/*
    Calculate the area of a rectangle.
    length: The length of the rectangle.
    width: The width of the rectangle.
    Return a number denoting the rectangle's area.
*/
function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}
getArea(18, 15);

/*
    Calculate the perimeter of a rectangle.
    length: The length of the rectangle.
    width: The width of the rectangle.
    Return a number denoting the perimeter of a rectangle.
*/
function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
}
console.log(getPerimeter(16, 11));