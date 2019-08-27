var viewport = new ViewPort();
viewport.addEventListener("enterframe", enterframe)


var head = new HeadExample();
viewport.scene.add(head);

//head.position.x = -50;

//head.position.y = 90;

head.scale.x =  head.scale.z = 12;
head.scale.y = -12;

function enterframe(){
	head.rotation.y -= 0.04;
}