import './reset.css'
import * as THREE from 'three'
import * as Spine from '@esotericsoftware/spine-threejs'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GUI } from 'lil-gui'
import { setResizeEvent } from '~/utils/resizeWindow/resizeWindow'

const VITE_GITHUB_PAGES_PATH =
  import.meta.env.BASE_URL !== '/' ? `${import.meta.env.BASE_URL}` : ''
const ASSETS_PATH = `${VITE_GITHUB_PAGES_PATH}/assets`

const width = window.innerWidth || 800
const height = window.innerHeight || 600
const devicePixelRatio = window.devicePixelRatio || 1

// レンダラー
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
})
renderer.setPixelRatio(devicePixelRatio)
renderer.setSize(width, height)
renderer.shadowMap.enabled = true

// lil-gui: コントロールパネル
const gui = new GUI()

// シーン
const scene = new THREE.Scene()

// カメラ
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000)
camera.position.set(10, 10, 10)
camera.lookAt(new THREE.Vector3(0, 0, 0))

// 地面
const planeGeometry = new THREE.PlaneGeometry(16, 16)
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x213573 })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -Math.PI / 2
plane.material.side = THREE.DoubleSide
plane.receiveShadow = true
scene.add(plane)

// 平行光源
const directionalLight = new THREE.DirectionalLight(0xffffff)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

// 環境光源
const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
scene.add(ambientLight)

// スポットライト
const spotLight = new THREE.SpotLight(0xffffff, 48, 32, Math.PI / 4, 10, 0.5)
spotLight.position.set(0, 8, 0)
spotLight.castShadow = true
spotLight.shadow.mapSize.set(4096, 4096)
scene.add(spotLight)
// スポットライト ヘルパー
const spotLightHepler = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHepler)
// スポットライト lil-gui
const spotLightFolder = gui.addFolder('SpotLight')
spotLightFolder
  .addColor({ color: 0xffffff }, 'color')
  .onChange((value: string) => {
    spotLight.color = new THREE.Color(value)
  })
spotLightFolder
  .add({ intensity: 48 }, 'intensity', 12, 200, 0.1)
  .onChange((value: number) => {
    spotLight.intensity = value
  })
spotLightFolder
  .add({ distance: 32 }, 'distance', 12, 60, 0.1)
  .onChange((value: number) => {
    spotLight.distance = value
  })
spotLightFolder
  .add({ positionX: 0 }, 'positionX', -10, 10, 0.1)
  .onChange((value: number) => {
    spotLight.position.x = value
  })
spotLightFolder
  .add({ positionY: 8 }, 'positionY', 0, 20, 0.1)
  .onChange((value: number) => {
    spotLight.position.y = value
  })
spotLightFolder
  .add({ positionZ: 0 }, 'positionZ', -10, 10, 0.1)
  .onChange((value: number) => {
    spotLight.position.z = value
  })
spotLightFolder
  .add({ showLight: true }, 'showLight')
  .onChange((value: boolean) => {
    ambientLight.visible = value
  })
spotLightFolder
  .add({ showHelper: true }, 'showHelper')
  .onChange((value: boolean) => {
    spotLightHepler.visible = value
  })

// サンプル立方体
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.75,
  roughness: 0
})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.set(-1.5, 3, 0)
box.castShadow = true
scene.add(box)
// 立方体 lil-gui
const boxFolder = gui.addFolder('BoxFolder')
boxFolder
  .add({ positionX: -1.5 }, 'positionX', -10, 10, 0.001)
  .onChange((value: number) => {
    box.position.x = value
  })
boxFolder
  .add({ positionY: 3 }, 'positionY', 0, 20, 0.001)
  .onChange((value: number) => {
    box.position.y = value
  })
boxFolder
  .add({ positionZ: 0 }, 'positionZ', -10, 10, 0.001)
  .onChange((value: number) => {
    box.position.z = value
  })

// Spine
let isAddedSpine = false
let spineSkeletonMesh: Spine.SkeletonMesh

// Spine Asset Manager
const assetManager = new Spine.AssetManager(`${ASSETS_PATH}/spines/`)
assetManager.loadText('model.json')
assetManager.loadTextureAtlas('model.atlas')
// Spine lil-gui
const spineFolder = gui.addFolder('SpineFolder')
spineFolder.add({ wind: 0 }, 'wind', -20, 20, 0.1).onChange((value: number) => {
  if (!spineSkeletonMesh) return
  // 物理コンストレイントの更新
  spineSkeletonMesh.skeleton.physicsConstraints.map((constraint) => {
    constraint.wind = value
  })
})
spineFolder
  .add({ positionX: 1.5 }, 'positionX', -10, 10, 0.001)
  .onChange((value: number) => {
    if (!spineSkeletonMesh) return
    spineSkeletonMesh.position.x = value
  })
spineFolder
  .add({ positionY: 2.5 }, 'positionY', 0, 20, 0.001)
  .onChange((value: number) => {
    if (!spineSkeletonMesh) return
    spineSkeletonMesh.position.y = value
  })
spineFolder
  .add({ positionZ: 2.5 }, 'positionZ', -10, 10, 0.001)
  .onChange((value: number) => {
    if (!spineSkeletonMesh) return
    spineSkeletonMesh.position.z = value
  })

// OrbitController
const orbitController = new OrbitControls(camera, renderer.domElement)
orbitController.maxPolarAngle = Math.PI // Math.PI * 0.5
orbitController.minDistance = 0.1
orbitController.maxDistance = 10000
orbitController.autoRotateSpeed = 1.0

// div 要素に追加
const wrapper = document.querySelector<HTMLDivElement>('#app')!
wrapper.appendChild(renderer.domElement)

// window リサイズイベント
setResizeEvent({
  onResize: () => {
    const width = window.innerWidth
    const height = window.innerHeight
    // レンダラーを更新
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.setSize(width, height)
    // カメラを更新
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
})

// 画面に表示＋アニメーション
let lastFrameTime = Date.now() / 1000
const ticker = () => {
  requestAnimationFrame(ticker)

  // 時刻更新
  const now = Date.now() / 1000
  const delta = now - lastFrameTime
  lastFrameTime = now

  // Spine Asset 読み込み後の処理
  if (assetManager.isLoadingComplete()) {
    if (!isAddedSpine) {
      const atlas: Spine.TextureAtlas = assetManager.require('model.atlas')
      const atlasLoader = new Spine.AtlasAttachmentLoader(atlas)
      const skeletonJson = new Spine.SkeletonJson(atlasLoader)
      const skeletonData = skeletonJson.readSkeletonData(
        assetManager.require('model.json')
      )
      // spine mesh
      spineSkeletonMesh = new Spine.SkeletonMesh(
        skeletonData,
        (parameters: THREE.ShaderMaterialParameters) => {
          parameters.depthWrite = false // true の場合はチラつきが発生する様子
          parameters.depthTest = true
          parameters.alphaTest = 0.001
        }
      )
      // spine skeleton の調整
      const skeletonWidth = skeletonData.width
      const skeletonHeight = skeletonData.height
      const skeletonAspectRatio = skeletonWidth / skeletonHeight
      spineSkeletonMesh.scale.set(
        (5 / skeletonWidth) * skeletonAspectRatio,
        5 / skeletonHeight,
        0
      )
      spineSkeletonMesh.rotation.x = -Math.PI / 2
      spineSkeletonMesh.position.set(1.5, 2.5, 2.5)
      // TODO: 立方体と同じように影をつけられるようにしたい
      spineSkeletonMesh.castShadow = true // ?
      spineSkeletonMesh.receiveShadow = true // ?

      spineSkeletonMesh.state.setAnimation(0, 'animation', true)
      scene.add(spineSkeletonMesh)
    }
    isAddedSpine = true
  }

  // 立方体 回転
  box.rotation.x += 0.01
  box.rotation.y += 0.01
  box.rotation.z += 0.01

  spotLight.lookAt(new THREE.Vector3(0, 0, 0))

  // Spine Skeleton　更新
  // ※Spine の SkeletonMesh は update() を呼び出さないとアニメーションが再生されない
  if (spineSkeletonMesh) {
    spineSkeletonMesh.update(delta)
  }
  // ヘルパー更新
  spotLightHepler.update()
  // OrbitController更新
  orbitController.update()

  renderer.render(scene, camera)
}
ticker()
