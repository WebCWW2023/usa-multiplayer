import * as THREE from "three";
import { bannerNameArray } from "../game.js";

var texture1 = new THREE.TextureLoader().load('../static/texture/banner.jpg');
texture1.flipY = false;
texture1.minFilter = THREE.LinearFilter;
var texture2 = new THREE.TextureLoader().load('../static/texture/banner2.jpg');
texture2.flipY = false;
texture2.minFilter = THREE.LinearFilter;

let glassColor = new THREE.Color(0x575757);
const wallGlassMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5, color: glassColor });
const banner1_material = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });

const UpdateMaterial = (object) => {

    let type;
    switch (object.material.name) {
        /*-----------------banner-------------------*/
        case 'screen':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        case 'h1_Hording01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'h2_Hording01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'h3_Hording01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'h4_Hording01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'h5_Hording01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'h6_Hording01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        /*-----------------booth-------------------*/
        case 'B1_baner_01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B1_baner_02':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B1_baner_03':
            object.material.map = texture2;
            bannerNameArray.push(object.name);
            break;
        case 'B1_baner_04':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B1_baner_05':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'B2_baner_01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B2_baner_02':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B2_baner_03':
            object.material.map = texture2;
            bannerNameArray.push(object.name);
            break;
        case 'B2_baner_04':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B2_baner_05':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        case 'B3_baner_01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B3_baner_02':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B3_baner_03':
            object.material.map = texture2;
            bannerNameArray.push(object.name);
            break;
        case 'B3_baner_04':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B3_baner_05':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'B4_baner_01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B4_baner_02':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B4_baner_03':
            object.material.map = texture2;
            bannerNameArray.push(object.name);
            break;
        case 'B4_baner_04':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B4_baner_05':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;



        case 'B5_baner_01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B5_baner_02':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B5_baner_03':
            object.material.map = texture2;
            bannerNameArray.push(object.name);
            break;
        case 'B5_baner_04':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B5_baner_05':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'B6_baner_01':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B6_baner_02':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B6_baner_03':
            object.material.map = texture2;
            bannerNameArray.push(object.name);
            break;
        case 'B6_baner_04':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B6_baner_05':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        default:
            break;
    }



}

export { UpdateMaterial }