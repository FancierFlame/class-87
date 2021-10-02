var canvas = new fabric.Canvas('my_canvas');

var player_x = 10;
var player_y = 10;

var block_width_img = 30;
var block_height_img = 30;

var player_object = "" ;
var block_img_object = "" ; 

function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
        player_object = Img ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(130);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_img) {
    fabric.Image.fromURL(get_img,function(Img) {
        block_img_object = Img ;
        block_img_object.scaleToWidth(block_width_img);
        block_img_object.scaleToHeight(block_height_img);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypress = e.keyCode;
    console.log(keypress);

    if (e.shiftKey == true && keypress == "38") {
        block_height_img = block_height_img + 10;
        block_width_img = block_width_img +10;
        console.log("shift and up have been pressed");
        document.getElementById("span_width").innerHTML = block_width_img;
        document.getElementById("span_height").innerHTML = block_height_img;
    }

    if (e.shiftKey == true && keypress == "40") {
        block_height_img = block_height_img - 10;
        block_width_img = block_width_img - 10;
        console.log("shift and down have been pressed");
        document.getElementById("span_width").innerHTML = block_width_img;
        document.getElementById("span_height").innerHTML = block_height_img;
    }

    if (keypress == '38') {
        up();
        console.log("up");
    }

    if (keypress == '40') {
        down();
        console.log("down");
    }

    if (keypress == "37") {
        left();
        console.log("left");
    }

    if (keypress == "39") {
        right();
        console.log("right");
    }

    if (keypress == "83") {
      new_image("cloud.jpg");
      console.log("s"); 
    }

    if (keypress == "68") {
        new_image("dark_green.png");
        console.log("d"); 
      }

      if (keypress == "71") {
        new_image("ground.png");
        console.log("g"); 
      }

      if (keypress == "76") {
        new_image("light_green.png");
        console.log("l"); 
      }

      if (keypress == "78") {
        new_image("roof.jpg");
        console.log("n"); 
      }

      if (keypress == "79") {
        new_image("trunk.jpg");
        console.log("o"); 
      }

      if (keypress == "85") {
        new_image("unique.png");
        console.log("u"); 
      }

      if (keypress == "66") {
        new_image("wall.jpg");
        console.log("b"); 
      }

      if (keypress == "89") {
        new_image("yellow_wall.png");
        console.log("y"); 
      }

      if (e.shiftKey == true && keypress == "90") {
        canvas.remove(block_img_object);
      }
}

function down() {
  if (player_y <=650) {
    player_y = player_y + block_height_img;
    canvas.remove(player_object);
    player_update();
  }
}

function up() {
  if (player_y > 0) {
    player_y = player_y - block_height_img;
    canvas.remove(player_object);
    player_update();
  }
}

function left() {
  if (player_x > 0) {
    player_x = player_x - block_width_img;
    canvas.remove(player_object);
    player_update();
  }
}

function right() {
  if (player_x <= 750) {
    player_x = player_x + block_width_img;
    canvas.remove(player_object);
    player_update();
  }
}

function clear_area() {
  canvas.clearRect(0,0, canvas.width, canvas.height);
}
