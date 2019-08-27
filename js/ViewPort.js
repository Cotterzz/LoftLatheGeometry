class ViewPort extends THREE.Object3D{
    constructor() {
        super();
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({canvas:document.getElementById("canvas3d"),antialias:true});
        this.renderer.physicallyCorrectLights = true;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    	this.scene.background = new THREE.Color( 0x7799ff );
        this.camera = new THREE.OrthographicCamera(window.innerWidth/-2, window.innerWidth/2, window.innerHeight/2, window.innerHeight/-2, -1000, 10000);
    	this.scene.add(this.camera);
    	this.camera.position.set(0, 0,100);
    	this.camera.near = 0.0001;
    	this.camera.lookAt(this.scene.position);
    	this.orbitcontrols = new THREE.OrbitControls(this.camera, document.getElementById("canvas3d"));
    	this.light = new THREE.AmbientLight("#ccff44", 2);
    	this.scene.add(this.light);
        this.light1 = new THREE.DirectionalLight("#ffffff",3);
        this.light1.position.set(0, 100, 50);
        this.scene.add(this.light1);
    	this.animate();

    }

    animate(){ requestAnimationFrame(() => { this.animate() } ); this.render(); } // in normal mode, this is called every frame, and calls the render function for every frame

	//vranimate(){ this.renderer.setAnimationLoop( () => { this.render() } )} // in VR mode, this is called once, and render is called every frame

    render(){ // this is called every frame, in both VR and standard mode, and the code is shared by both
        this.renderer.render(this.scene, this.camera);
        this.dispatchEvent({ type: "enterframe" });
    }
}