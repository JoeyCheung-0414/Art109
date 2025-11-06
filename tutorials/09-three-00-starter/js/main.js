
// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// My Code
let scene, camera, renderer, cube, capsule;

function init() {
    // ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
    scene = new THREE.Scene();

    // Lights-------
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1, 1, 1, 5);
    scene.add(light);

    const helper = new THREE.DirectionalLightHelper(light, 5);
    scene.add(helper);

    // Light 2-----
    const lightLeft = new THREE.DirectionalLight(0x00ffff, 3);
    light.position.set(1, 1, 1, -5);
    scene.add(lightLeft);

    const helperLeft = new THREE.DirectionalLightHelper(lightLeft, 5);
    scene.add(helperLeft);


    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models

    loader.load('assets/mc-cat.gltf', function (gltf) {
        const mcCat = gltf.scene;
        scene.add(mcCat);
        mcCat.scale.set(.3, .3, .3);

    })


    // ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
    // →→→→→→ Follow next steps in tutorial: 
    // // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

    const geometry = new THREE.BoxGeometry(4, 4, 4);
    
    const geometry2 = new THREE.CapsuleGeometry( 1, 1, 4, 15,);

    const material2 = new THREE.MeshBasicMaterial({ color: 0xc8ecf7 });

    const texture = new THREE.TextureLoader().load('textures/cat.jpg');
    const material = new THREE.MeshStandardMaterial({ map: texture });

    capsule = new THREE.Mesh(geometry2, material2);
    capsule.position.y = 5;
    scene.add(capsule);

    cube = new THREE.Mesh(geometry, material);
    cube.position.y = -2;
    scene.add(cube);

    camera.position.z = 10;
}


function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
