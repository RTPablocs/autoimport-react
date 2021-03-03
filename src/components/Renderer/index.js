import React, {Component} from 'react';
import * as THREE from 'three'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

class Renderer extends Component {
    componentDidMount() {

        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75,  window.innerWidth / window.innerHeight, 0.1, 10);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(550, 300);
        document.body.appendChild(renderer.domElement);
        const loader = new GLTFLoader()
        loader.load( '../../assets/models/model.glb', function ( gltf ) {
            scene.add(gltf.scene);
        }, undefined, function ( error ) {

            console.error( error );

        } )
        camera.position.z = 5;
    }


    render() {
        return (
            <div/>
        );
    }
}

export default Renderer;