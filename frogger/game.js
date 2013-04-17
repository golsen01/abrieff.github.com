function startgame(){
  buffer = document.createElement('canvas'),
  canvas = document.getElementById('game');
  buffer.width = canvas.width;
  buffer.height = canvas.height;
   if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    sprites = new Image();
    sprites.src = "assets/frogger_sprites.png";
    dead_frog = new Image();
    dead_frog.src = "assets/dead_frog.png";
   }
  game_over_count = 0;
  render_canvas();
  map_sprite_objects();
  start_positions();
  startAnimation();
  window.addEventListener('keydown', check_user_input,true);
}

function startAnimation()
{
  delay = 33.333333;
  end = setInterval(game_loop, delay);
}
function render_canvas(){
 
    ctx.fillStyle = "rgb(25, 25, 112)";
    ctx.fillRect (0, 0, 399, 282);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect (0, 282, 399, 282.5);
    ctx.drawImage(sprites,11,9,327,37,11,9,327,37);
    ctx.drawImage(sprites,0,53,399,55,0,53,399,50);
    ctx.drawImage(sprites,0,118,399,37,0,278,399,37);
    ctx.drawImage(sprites,0,118,399,37,0,485,399,37);
    ctx.fillStyle = "rgb(178, 228, 98)";
    ctx.font="bolder 24px Times New Roman";
    ctx.fillText("Level:" , 70, 540);
    ctx.font="bolder 15px Times New Roman";
    ctx.fillText("Score:", 0, 560);
    ctx.fillText("HighScore:", 80, 560);
}
function map_sprite_objects() {
  logs = new Object;
  logs[0] = new Object;
  logs[1] = new Object;
  logs[2] = new Object;
  logs[2]["x"] = 7;
  logs[2]["y"] = 165;
  logs[2]["wid"] = 178;
  logs[2]["len"] = 22;
  logs[1]["x"] = 7;
  logs[1]["y"] = 198;
  logs[1]["wid"] = 117;
  logs[1]["len"] = 21;
  logs[0]["x"] = 7;
  logs[0]["y"] = 230;
  logs[0]["wid"] = 84;
  logs[0]["len"] = 21;
  cars = new Object();
  cars[0] = new Object;
  cars[1] = new Object;
  cars[2] = new Object;
  cars[3] = new Object;
  cars[0]["x"] = 10;
  cars[0]["y"] = 267;
  cars[0]["wid"] = 28;
  cars[0]["len"] = 20;
  cars[1]["x"] = 45;
  cars[1]["y"] = 265;
  cars[1]["wid"] = 29;
  cars[1]["len"] = 25;
  cars[2]["x"] = 81;
  cars[2]["y"] = 265;
  cars[2]["wid"] = 25;
  cars[2]["len"] = 25;
  cars[3]["x"] = 10;
  cars[3]["y"] = 301;
  cars[3]["wid"] = 25;
  cars[3]["len"] = 22;
  cars[4] = new Object;
  cars[4]["x"] = 105;
  cars[4]["y"] = 303;
  cars[4]["wid"] = 47;
  cars[4]["len"] = 18;
  frog_size_x = 30;
  frog_size_y = 30;
  frogs = new Object();
  frogs.up = new Object;
  frogs.up.stand = new Object;
  frogs.up.jump = new Object;
  frogs.down = new Object;
  frogs.down.stand = new Object;
  frogs.down.jump = new Object;
  frogs.left = new Object;
  frogs.left.stand = new Object;
  frogs.left.jump = new Object;
  frogs.right = new Object;
  frogs.right.stand = new Object;
  frogs.right.jump = new Object;
  frogs["up"]["stand"]["x"] = 12;
  frogs["up"]["stand"]["y"] = 369;
  frogs["up"]["stand"]["wid"] = 23;
  frogs["up"]["stand"]["len"] = 18;
  frogs["up"]["jump"]["x"] = 45;
  frogs["up"]["jump"]["y"] = 366;
  frogs["up"]["jump"]["wid"] = 22;
  frogs["up"]["jump"]["len"] = 26;
  frogs["down"]["stand"]["x"] = 80;
  frogs["down"]["stand"]["y"] = 369;
  frogs["down"]["stand"]["wid"] = 23;
  frogs["down"]["stand"]["len"] = 18;
  frogs["down"]["jump"]["x"] = 114;
  frogs["down"]["jump"]["y"] = 366;
  frogs["down"]["jump"]["wid"] = 22;
  frogs["down"]["jump"]["len"] = 26;
  frogs["right"]["stand"]["x"] = 12;
  frogs["right"]["stand"]["y"] = 334;
  frogs["right"]["stand"]["wid"] = 18;
  frogs["right"]["stand"]["len"] = 24;
  frogs["right"]["jump"]["x"] = 43;
  frogs["right"]["jump"]["y"] = 335;
  frogs["right"]["jump"]["wid"] = 25;
  frogs["right"]["jump"]["len"] = 23;
  frogs["left"]["stand"]["x"] = 82;
  frogs["left"]["stand"]["y"] = 335;
  frogs["left"]["stand"]["wid"] = 18;
  frogs["left"]["stand"]["len"] = 24;
  frogs["left"]["jump"]["x"] = 112;
  frogs["left"]["jump"]["y"] = 337;
  frogs["left"]["jump"]["wid"] = 26;
  frogs["left"]["jump"]["len"] = 23;
 /* turtle = new Array();
  turtle["biggest"]["x"];
  turtle["biggest"]["y"];
  turtle["biggest"]["wid"];
  turtle["biggest"]["len"];
  turtle["bigger"]["x"];
  turtle["bigger"]["y"];
  turtle["bigger"]["wid"];
  turtle["bigger"]["len"];
  turtle["big"]["x"];
  turtle["big"]["y"];
  turtle["big"]["wid"];
  turtle["big"]["len"];
  turtle["smaller"]["x"];
  turtle["smaller"]["y"];
  turtle["smaller"]["wid"];
  turtle["smaller"]["len"];
  turtle["smallest"]["x"];
  turtle["smallest"]["y"];
  turtle["smallest"]["wid"];
  turtle["smallest"]["len"];*/
  road_lanes = new Object();
  $("game_div").append(road_lanes);
  road_lane_width = 35;
  road_lanes[0] = new Object;
  road_lanes[0]["y"] = 485;
  road_lanes[1] = new Object;
  road_lanes[1]["y"] = 485-35;
  road_lanes[2] = new Object;
  road_lanes[2]["y"] = 485-(35*2);
  road_lanes[3] = new Object;
  road_lanes[4] = new Object;
  road_lanes[5] = new Object;
  road_lanes[6] = new Object;
  road_lanes[3]["y"]= 485-(35*3);
  road_lanes[4]["y"] = 484-(35*4);
  road_lanes[5]["y"] = 485-(35*5)+5;
  road_lanes[6]["y"] = 278;
  water_lanes = new Object;
   water_lane_width = 35;
  water_lanes[0] = new Object;
  water_lanes[0]["y"] = 278-35;
  water_lanes[1] = new Object;
  water_lanes[1]["y"] = 278-(35*2);
  water_lanes[2] = new Object;
  water_lanes[2]["y"] = 278-(35*3);
  water_lanes[3] = new Object;
  water_lanes[4] = new Object;
  water_lanes[3]["y"]= 278-(35*4);
  water_lanes[4]["y"] = 278-(35*5);
  end_zones = new Object;
  end_zones.y = 73;
  end_zones[0] = new Object;
  end_zones[1] = new Object;
  end_zones[2] = new Object;
  end_zones[3] = new Object;
  end_zones[4] = new Object
  end_zones[0].x = 12;
  end_zones[1].x = 95;
  end_zones[2].x = 180;
  end_zones[3].x = 266;
  end_zones[4].x = 351;
  end_zones.wid = 33;
  end_zones.len = 28;
  
  }
function start_positions()
{
  car_type = 0;
  var num_cars = 3;
  for (var lane_num = 1; lane_num <= 5; lane_num++){
    create_road_lane(lane_num, car_type, num_cars);
    car_type = car_type+1;
  }
  num_logs = 3;
  log_type = 0;
  for (var water_lane_num = 0; water_lane_num <= 4; water_lane_num = water_lane_num+1){
    create_water_lane(water_lane_num, log_type, num_logs);
    if (water_lane_num == 1 || water_lane_num == 3){
    log_type = log_type+1;
    
    }
  }
  frog_start_position_x = 200;
  frog_start_position_y = 490;
  frogger = new Object;
  frogger.x = frog_start_position_x;
  frogger.y = frog_start_position_y;
  frogger.direction = "up";
  frogger.dead = false;
  frogger.moved = false;
  image_lag = 0;
  $("frog").append(frogger);
  
  ctx.drawImage(sprites, frogs.up.stand.x, frogs.up.stand.y, frogs.up.stand.wid, frogs.up.stand.len, frog_start_position_x, frog_start_position_y, frog_size_x, frog_size_y);
  numlives = 3;
    level = 1;
    score = 0;
    if (game_over_count == 0){
    highscore = 0;
    }
    Level = 0;
    updateLevel(level);
    numLives();
    draw_score();
 }
  
function create_road_lane(lane_num, car_type, num_cars)
{
  if(lane_num == 1 || lane_num == 3 || lane_num == 5)
  {
    road_lanes[lane_num].car = new Object;
    road_lanes[lane_num].car[0] = new Object;
    road_lanes[lane_num].car[0].x = 50;
    ctx.drawImage(sprites, cars[car_type].x, cars[car_type].y, cars[car_type].wid, cars[car_type].len, road_lanes[lane_num].car[0].x, road_lanes[lane_num].y, cars[car_type].wid, cars[car_type].len);
    for(i = 1; i < num_cars; i++){
      road_lanes[lane_num].car[i] = new Object;
      road_lanes[lane_num].car[i].x = road_lanes[lane_num].car[i-1].x + 175; 
      ctx.drawImage(sprites, cars[car_type].x, cars[car_type].y, cars[car_type].wid, cars[car_type].len, road_lanes[lane_num].car[i].x, road_lanes[lane_num].y, cars[car_type].wid, cars[car_type].len);
    }
  }
   else{
    road_lanes[lane_num].car = new Object;
    road_lanes[lane_num].car[0] = new Object;
    road_lanes[lane_num].car[0].x = 300;
     ctx.drawImage(sprites, cars[car_type].x, cars[car_type].y, cars[car_type].wid, cars[car_type].len, road_lanes[lane_num].car[0].x, road_lanes[lane_num].y, cars[car_type].wid, cars[car_type].len);
    for(i = 1; i < num_cars; i++){
      road_lanes[lane_num].car[i] = new Object;
      road_lanes[lane_num].car[i].x = road_lanes[lane_num].car[i-1].x - 175; 
      ctx.drawImage(sprites, cars[car_type].x, cars[car_type].y, cars[car_type].wid, cars[car_type].len, road_lanes[lane_num].car[i].x, road_lanes[lane_num].y, cars[car_type].wid, cars[car_type].len);
    }
  }
}
function create_water_lane(lane_num, log_type, num_logs)
{ 
  if(lane_num == 0 || lane_num == 3)
  {
    water_lanes[lane_num].log = new Object;
    water_lanes[lane_num].log[0] = new Object;
    water_lanes[lane_num].log[0].x = 50;
    ctx.drawImage(sprites, logs[log_type].x, logs[log_type].y, logs[log_type].wid, logs[log_type].len, water_lanes[lane_num].log[0].x, water_lanes[lane_num].y, logs[log_type].wid, logs[log_type].len);
    for(i = 1; i < num_logs; i++){
      water_lanes[lane_num].log[i] = new Object;
      water_lanes[lane_num].log[i].x = water_lanes[lane_num].log[i-1].x + 175; 
      ctx.drawImage(sprites, logs[log_type].x, logs[log_type].y, logs[log_type].wid, logs[log_type].len, water_lanes[lane_num].log[i].x, water_lanes[lane_num].y, logs[log_type].wid, logs[log_type].len);
    }
  }
   else{
    water_lanes[lane_num].log = new Object;
    water_lanes[lane_num].log[0] = new Object;
    water_lanes[lane_num].log[0].x = 300;
     ctx.drawImage(sprites, logs[log_type].x, logs[log_type].y, logs[log_type].wid, logs[log_type].len, water_lanes[lane_num].log[0].x, water_lanes[lane_num].y, logs[log_type].wid, logs[log_type].len);
    for(i = 1; i < num_logs; i++){
      water_lanes[lane_num].log[i] = new Object;
      if (lane_num == 4){
      water_lanes[lane_num].log[i].x = water_lanes[lane_num].log[i-1].x - 250; 
      }
      else{
	water_lanes[lane_num].log[i].x = water_lanes[lane_num].log[i-1].x - 175; 
      }
	
     // console.log(log_type);
      ctx.drawImage(sprites, logs[log_type].x, logs[log_type].y, logs[log_type].wid, logs[log_type].len, water_lanes[lane_num].log[i].x, water_lanes[lane_num].y, logs[log_type].wid, logs[log_type].len);
    }
  }
}
  
function numLives()
{
  offset = 0;
  for(i=0; i<numlives; i++){
    ctx.drawImage(sprites, 10, 333, 22, 22, offset, 520, 18, 18);
    offset= offset+18;
  }
			   
}

function updateLevel(Level){
  ctx.fillStyle = "rgb(178, 228, 98)";
  ctx.font="bolder 24px Times New Roman"
  ctx.fillText(level, 140, 540)
}

function game_loop(){
  if (!game_over()){
    update();
    car_collision();
    on_log();
    redraw();
  }
  else {
    clearInterval(end);
    render_canvas();
    start_positions();
    startAnimation();
  }
}
function game_over(){
  
  if (numlives == 0){
    ctx.fillText("Game Over", 100, 300);
    var name = prompt("Game Over :( High Score! Enter Your Name:", "Name");
    game_over_count++;
    send_data = {"game_title":"frogger", "username":name, "score":score};
    jQuery.ajax({
          url: 'http://localhost:5000/submit.json',
          type: "POST",
          data: send_data,
          dataType: "json",
          beforeSend: function(x) {
            if (x && x.overrideMimeType) {
              x.overrideMimeType("application/j-son;charset=UTF-8");
            }
          },
       success: function (r) {
                    alert(r.d.username);
                }
    });
    if (score > highscore){
    highscore = score;
    }
    return true;
  }
  return false;
}

function update(){
  update_cars();
  update_logs();
}
function update_cars(){
  for (var lane_num = 1; lane_num <=5; lane_num++){
  if(lane_num == 1 || lane_num == 3 || lane_num == 5)
  {
 
    for(var i = 0; i < 3; i++){
      if(road_lanes[lane_num].car[i].x < 0-cars[lane_num-1].wid){
      road_lanes[lane_num].car[i].x = 480;
      }
      
      if (lane_num == 1){
      road_lanes[lane_num].car[i].x = road_lanes[lane_num].car[i].x - 2;
      }
      if (lane_num == 3){
	road_lanes[lane_num].car[i].x = road_lanes[lane_num].car[i].x - 3;
      }
       if (lane_num == 5){
	road_lanes[lane_num].car[i].x = road_lanes[lane_num].car[i].x - 4;
      }
    }
  }
  else{
    for(var i = 0; i < 3; i++){
      if(road_lanes[lane_num].car[i].x > 399+cars[lane_num-1].wid){
      road_lanes[lane_num].car[i].x = -126;
      }
      if (lane_num == 2){
      road_lanes[lane_num].car[i].x = road_lanes[lane_num].car[i].x + 3.5;
      }
      if (lane_num == 4){
	road_lanes[lane_num].car[i].x = road_lanes[lane_num].car[i].x + 2.5;
      }
      
    }
  }
  }
}  

function redraw(){
  ctx.clearRect(0,0,399,565);
  render_canvas();
  numLives();
  draw_score();
  draw_high_score();
  updateLevel();
  redraw_cars();
  redraw_logs();
  redraw_frog();
  draw_finished_frogs();
}
function redraw_cars(){
  car_type = 0;
  for (var i = 1; i <=5; i++){
    for (var j = 0; j < 3; j++){
       ctx.drawImage(sprites, cars[car_type].x, cars[car_type].y, cars[car_type].wid, cars[car_type].len, road_lanes[i].car[j].x, road_lanes[i].y, cars[car_type].wid, cars[car_type].len);
    }
    car_type++;
  }
}

function redraw_logs(){
   log_type = 0;
  for (var water_lane_num = 0; water_lane_num <=4; water_lane_num++){
    for (var j = 0; j < 3; j++){
       ctx.drawImage(sprites, logs[log_type].x, logs[log_type].y, logs[log_type].wid, logs[log_type].len, water_lanes[water_lane_num].log[j].x, water_lanes[water_lane_num].y, logs[log_type].wid, logs[log_type].len);
    }
    if (water_lane_num == 1 || water_lane_num == 3){
    log_type = log_type+1;
    
    }
  }
}
function check_user_input(e){
    switch(e.which)
    {

      case 37: //left
      frogger.direction = "left";
      frogger.x = frogger.x - 35; 
      frogger.moved = true;
      break;
      
      case 38:
      frogger.direction = "up";
      frogger.y = frogger.y  - 35;
      score = score + 10;
      frogger.moved = true;
      check_end_zone();
      break;
      
      case 39: 
      frogger.direction = "right";
      frogger.x = frogger.x +35;  
      frogger.moved = true;
      break;
      
      case 40:
      frogger.direction = "down";
      frogger.y = frogger.y + 35;
      frogger.moved = true;
      break;
    }
    e.preventDefault();
    
  }

function redraw_frog(){
  if (!frogger.dead){
    if(frogger.moved == true){
      ctx.drawImage(sprites, frogs[frogger.direction]["jump"].x, frogs[frogger.direction]["jump"].y, frogs[frogger.direction]["jump"].wid, frogs[frogger.direction]["jump"].len, frogger.x, frogger.y, frogs[frogger.direction]["jump"].wid, frogs[frogger.direction]["jump"].len);
      frogger.moved = false;
    }
    else if (frogger.done){
      frogger.x = frog_start_position_x;
  frogger.y = frog_start_position_y;
  ctx.drawImage(sprites, frogs[frogger.direction]["stand"].x, frogs[frogger.direction]["stand"].y, frogs[frogger.direction]["stand"].wid, frogs[frogger.direction]["stand"].len, frogger.x, frogger.y, frogs[frogger.direction]["stand"].wid, frogs[frogger.direction]["stand"].len);
    frogger.done = false;
      
    }  
  else{
  ctx.drawImage(sprites, frogs[frogger.direction]["stand"].x, frogs[frogger.direction]["stand"].y, frogs[frogger.direction]["stand"].wid, frogs[frogger.direction]["stand"].len, frogger.x, frogger.y, frogs[frogger.direction]["stand"].wid, frogs[frogger.direction]["stand"].len);
}
  }
else if (image_lag < 10) {
  ctx.drawImage(dead_frog, frogger.x, frogger.y, 30, 30);
  image_lag = image_lag + 1;
}
else{
  frogger.x = frog_start_position_x;
  frogger.y = frog_start_position_y;
  ctx.drawImage(sprites, frogs[frogger.direction]["stand"].x, frogs[frogger.direction]["stand"].y, frogs[frogger.direction]["stand"].wid, frogs[frogger.direction]["stand"].len, frogger.x, frogger.y, frogs[frogger.direction]["stand"].wid, frogs[frogger.direction]["stand"].len);
  frogger.dead = false;
  numlives--;
  image_lag = 0;
}
}
function update_logs()
{
  log_type = 0;
  for (var lane_num = 0; lane_num <=4; lane_num++){
    if(lane_num == 0 || lane_num == 2 || lane_num == 4)
    {
      
      for(var i = 0; i < 3; i++){
	if(water_lanes[lane_num].log[i].x < 0-logs[log_type].wid){
	  water_lanes[lane_num].log[i].x = 500;
	}
	
	if (lane_num == 0){
	  water_lanes[lane_num].log[i].x = water_lanes[lane_num].log[i].x - 1.5;
	}
	if (lane_num == 2){
	  water_lanes[lane_num].log[i].x = water_lanes[lane_num].log[i].x - 2;
	}
	if (lane_num == 4){
	  water_lanes[lane_num].log[i].x = water_lanes[lane_num].log[i].x - 2.5;
	}
      }
    }
    else{
      for(var i = 0; i < 3; i++){
	if(water_lanes[lane_num].log[i].x > 399+logs[log_type].wid){
	  water_lanes[lane_num].log[i].x = -126;
	}
	if (lane_num == 1){
	  water_lanes[lane_num].log[i].x = water_lanes[lane_num].log[i].x + 2.5;
	}
	if (lane_num == 3){
	  water_lanes[lane_num].log[i].x = water_lanes[lane_num].log[i].x + 1.5;
	}
	
      }
    }
     if (lane_num == 1 || lane_num == 3){
    log_type = log_type+1;
    
    }
  }
}
function car_collision(){
  for (var i = 1; i <=5; i++){
    if (Math.abs(frogger.y - road_lanes[i].y) < 10){
      for (var j = 0; j < 3; j++){
	if (Math.abs(frogger.x - road_lanes[i].car[j].x) < 7 ){
	  frogger.dead = true;
	}
      }
    }
  }
}
function on_log(){
  log_type = 0;
  for (var i = 0; i <=4; i++){
    if ((Math.abs(frogger.y - water_lanes[i].y) < 10) && frogger.y < 278){
      var log_counter = 0; 
      for (var j = 0; j < 3; j++){
	//alert(water_lanes[i].log[j].x);
	//alert(frogger.x);
	if ((frogger.x - water_lanes[i].log[j].x < logs[log_type].wid+5) && (frogger.x - water_lanes[i].log[j].x > -5))
	  //alert("running");
	  //alert(j);
	  return;
	}
      frogger.dead = true;
      return;
    }
    if (i == 1 || i == 3){
      log_type = log_type+1;
    }
  }
}
function draw_score(){
  ctx.fillText(score, 45, 560);
}
function draw_high_score(){
  ctx.fillText(highscore, 160, 560);
}
function draw_finished_frogs(){
  for (var i = 0; i < 5; i++){
    if (end_zones[i].frog == true){
      ctx.drawImage(sprites, frogs["down"]["stand"].x, frogs["down"]["stand"].y, frogs["down"]["stand"].wid, frogs["down"]["stand"].len, end_zones[i].x, end_zones.y, frogs["down"]["stand"].wid, frogs["down"]["stand"].len);
      }
  }
}
function check_end_zone(){
  if ((frogger.y - end_zones.y) < end_zones.len){
    for (var i = 0; i < 5; i++){
      if ((frogger.x - end_zones[i].x < end_zones.wid+5) && frogger.x - end_zones[i].x > -5){
	frogger.done = true;
	end_zones[i].frog = true;
	score = score + 50;
	check_all_frogs_done();
	return;
      }
    }
  }
}
function check_all_frogs_done(){
    var done_frogs = 0;
    for (var i = 0; i < 5; i++){
     if (end_zones[i].frog == true){
      done_frogs = done_frogs + 1;
      }
  }
  if (done_frogs == 5){
    score = score + 1000;
    new_level();
  }
}
function new_level(){
  level++;
  for (var i = 0; i < 5; i++){
    end_zones[i].frog = false;
  }
}
