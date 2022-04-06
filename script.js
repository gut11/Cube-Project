let cube = document.getElementById("cube");
let side = document.getElementsByClassName("side");
let body = document.getElementsByTagName("body");
let rotate_x_deg = 0;
let rotate_y_deg = 0;
let last_y;
let last_X;
let width;
let height;
let depth;
let cube_styles;
let side_bar = document.getElementById("side-bar");
let button_sidebar = document.getElementById("button-sidebar");
let button_sidebar_container = document.getElementById("button-sidebar-container");
let form_sidebar = document.getElementById("form-sidebar");
let cont = 0;
let button_start = document.getElementById("button-start");
let header = document.getElementById("header");
let form_width = document.getElementById("width");
let apply_button = document.getElementById("apply-button");
let back_to_start_button = document.getElementById("back-to-start-button");





function rotate_cube(e){
    if(e.y < last_y)
    rotate_y_deg += +1.6;
    if(e.y > last_y)
    rotate_y_deg += -1.6;
    if(e.x < last_x)
    rotate_x_deg += -1.6;
    if(e.x > last_x)
    rotate_x_deg += +1.6;
    cube.style.transform = "rotateX(" + rotate_y_deg + "deg)" + "rotateY(" + rotate_x_deg + "deg)";
    last_y = e.y;
    last_x = e.x;
}


function add_mouse_move(e){
    e.preventDefault();
    last_y = e.y;
    last_x = e.x;
    document.addEventListener("mousemove", rotate_cube);
    body[0].style.cursor = "grab";
}


function kill_rotate_cube(event){
    document.removeEventListener("mousemove",rotate_cube);
    body[0].style.cursor = "default";
}

function open_close_sidebar(){
    if(cont % 2 == 0){
   side_bar.style = "animation-name: increase_width;";
   form_sidebar.style = "animation-name: reduce_left;";
   button_sidebar_container.style = "right: calc(164.25px + 75px); transition: 0.7s;";
   }else{
    side_bar.style = "animation-name: reduce_width; animation-duration: 0.5s; animation-delay:0s;";
    form_sidebar.style = "animation-name: increase_left; animation duration: 1.5s; animation-delay: 0s;";
    button_sidebar_container.style = "transition: 1s;";
   }
   cont++;
}


function start_cube(){
    header.style.display = "none";
    cube.style.display = "inline-block";
}

function apply_dimensions(){
    let form_width = document.getElementById("width");
    let form_height = document.getElementById("height");
    let form_depth = document.getElementById("depth");
    cube.style.setProperty("--width", form_width.value + "px");
    cube.style.setProperty("--height", form_height.value + "px");
    cube.style.setProperty("--depth", form_depth.value + "px");
}


function back_to_start(){
    header.style.display = "flex";
    cube.style.display = "none";
}


button_sidebar.addEventListener("click", open_close_sidebar);
button_start.addEventListener("click",start_cube);
apply_button.addEventListener("click",apply_dimensions);
back_to_start_button.addEventListener("click",back_to_start);
document.addEventListener("mouseup",kill_rotate_cube,false);
for(let i in side)
side[i].onmousedown = add_mouse_move;







