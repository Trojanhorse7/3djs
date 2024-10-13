import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

//Canvas to hold the 3d Object
const canvas = document.getElementById('canvas')

//3d Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#f0f0f0')

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

//Objects
const geometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#645353' })
const dodecahedron = new THREE.Mesh(geometry, material)

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2)
const boxMaterial = new THREE.MeshLambertMaterial({color: '#b4b4b3' })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.y = -1.4
scene.add(dodecahedron)
scene.add(box)

//lights
const light = new THREE.SpotLight(0x006769, 100)
light.position.set(1,1,2)
scene.add(light)

// Renderer
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

//add orbit
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true
controls.enablePan = true

//add Animations
function animate() {
  requestAnimationFrame(animate)
  dodecahedron.rotation.x += 0.01
  dodecahedron.rotation.y += 0.01
  
  box.rotation.y += 0.005
  controls.update()
  renderer.render(scene, camera)
}

//Handle Window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

animate()