// Your code here!
function createcircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createcircle(1);
circle.draw();

/*const circle = {
    radius: 1,
    location: {
        x: 1, y: 1
    },
    draw: function () {
        console.log('draw');
    }


};
circle.draw();*/