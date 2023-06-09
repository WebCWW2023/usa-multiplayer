import * as THREE from "three";
import { positionGUI, scaleGUI } from "../common/CommonFunction.js";
import { objectArray } from "../game.js";

let glassColor = new THREE.Color(0x575757);
let glassOpacity = 0.4;
const UpdateMesh = (cityGroup, hall, gui) => {

    let glassObjectsNames = ['Glass03', 'glass', 'Mod_202', 'Mod_101', 'Mod_102', 'Shop_04_012001', 'Shop_04_01001',];
    glassObjectsNames.map(item => {
        let glassObject = hall.scene.getObjectByName(item);
        let glassMaterial = new THREE.MeshBasicMaterial();
        glassMaterial.transparent = true;
        glassMaterial.opacity = glassOpacity;
        glassObject.material = glassMaterial;
    });

    let glassPot = hall.scene.getObjectByName('glass_pot010');
    glassPot.material.transparent = true;
    glassPot.material.opacity = glassOpacity;

    let transparentObject = hall.scene.getObjectByName('Cylinder008');
    let transparentObjectMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
    });
    transparentObject.material = transparentObjectMaterial;
    // var shop1_alpha = new THREE.TextureLoader().load('../../static/texture/shop1_alpha.png');
    // let shop1 = hall.scene.getObjectByName('Shop_03_011');
    // shop1.material.alphaMap = shop1_alpha;
    // shop1.material.transparent = true;
    // shop1.material.opacity = 1;
}

const addObjectToArray = (object) => {
    switch (object.material.name) {
        case '020_Tree':
            break;
        case '016_Tree':
            break;
        case '017_Tree':
            break;
        case '018_Tree':
            break;
        case '011_Tree':
            break;
        case '02_tree':
            break;
        case 'tree_03':
            break;
        case 'tree_05':
            break;
        case 'Bambu':
            break;
        default:
            objectArray.push(object);
            break;
    }
}
export { UpdateMesh, addObjectToArray }
