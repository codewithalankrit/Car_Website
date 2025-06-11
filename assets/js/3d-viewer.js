// Initialize Three.js scene
let scene, camera, renderer, controls, model;

function init3DViewer() {
  console.log('Initializing 3D viewer...');

  // Get container dimensions
  const container = document.getElementById('car3dViewer');

  // Remove any existing canvas elements from the container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  // Create camera
  camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Add lights
  let ambientLight, directionalLight, backLight, fillLight, hemisphereLight;

  // Get the current car model from the modal title
  const modalTitle = document.querySelector('#car3dModal .modal-title').textContent;
  let modelPath =
    'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/suzuki_grand_vitara.glb'; // Default model path

  // Set model path based on the car name
  switch (modalTitle) {
    case 'Hyundai Creta':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2023_hyundai_creta.glb';
      // Reduced lighting for Creta
      ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
      backLight = new THREE.DirectionalLight(0xffffff, 0.8);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
      break;
    case 'Pagani Utopia':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2023_pagani_utopia.glb';
      // Reduced lighting for Pagani Utopia
      ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.4);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
      break;
    case 'Pagani Huayra BC':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/pagani_huayra_bc.glb';
      // Increased lighting for Huayra BC
      ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
      backLight = new THREE.DirectionalLight(0xffffff, 0.6);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      break;
    case 'Lamborghini Aventador':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/lamborghini_aventador_with_interior.glb';
      // Further reduced lighting for Aventador
      ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.4);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
      break;
    case 'Lamborghini Huracan':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/lamborghini_huracan.glb';
      // Further reduced lighting for Huracan
      ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.4);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
      break;
    case 'Lamborghini Urus':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2023_lamborghini_urus_performante.glb';
      // Further reduced lighting for Urus
      ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.4);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
      break;
    case 'Hennessey Venom F5':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2023_hennessey_venom_f5_roadster.glb';
      // Further increased lighting for Venom F5
      ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
      backLight = new THREE.DirectionalLight(0xffffff, 1.2);
      fillLight = new THREE.DirectionalLight(0xffffff, 1.1);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
      break;
    case 'Hennessey Exorcist':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2018_hennessey_the_exorcist_camaro_zl1.glb';
      // Reduced lighting for Exorcist
      ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
      backLight = new THREE.DirectionalLight(0xffffff, 0.8);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
      break;
    case 'Hennessey Vehnom GT':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/hennessy_vehnom_gt_2010_fully_rigged_free.glb';
      // Further increased lighting for Vehnom GT
      ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
      directionalLight = new THREE.DirectionalLight(0xffffff, 1.9);
      backLight = new THREE.DirectionalLight(0xffffff, 1.8);
      fillLight = new THREE.DirectionalLight(0xffffff, 1.7);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.8);
      break;
    case 'Ferrari SF90 Stradale':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/ferrari_sf90_stradale.glb';
      // Further increased lighting for SF90 Stradale
      ambientLight = new THREE.AmbientLight(0xffffff, 2.8);
      directionalLight = new THREE.DirectionalLight(0xffffff, 2.9);
      backLight = new THREE.DirectionalLight(0xffffff, 2.8);
      fillLight = new THREE.DirectionalLight(0xffffff, 2.7);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2.8);
      break;
    case 'Ferrari 296 GTB':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2023_ferrari_296_gts.glb';
      // Reduced lighting for 296 GTB
      ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
      directionalLight = new THREE.DirectionalLight(0xffffff, 1.9);
      backLight = new THREE.DirectionalLight(0xffffff, 1.8);
      fillLight = new THREE.DirectionalLight(0xffffff, 1.7);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.8);
      break;
    case 'Ferrari Purosangue':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2023_ferrari_purosangue.glb';
      // Further reduced lighting for Purosangue
      ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
      backLight = new THREE.DirectionalLight(0xffffff, 0.8);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
      break;
    case 'McLaren 765LT':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2022_mclaren_765lt_spider.glb';
      // Reduced lighting for 765LT
      ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
      backLight = new THREE.DirectionalLight(0xffffff, 0.6);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      break;
    case 'McLaren Senna':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/mclaren_senna_free.glb';
      // Reduced lighting for Senna
      ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.4);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
      break;
    case 'Bugatti Chiron':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2022_bugatti_chiron_profilee.glb';
      // Set lighting for Chiron
      ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.4);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
      break;
    case 'Bugatti Divo':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/bugati_divo.glb';
      // Maximum lighting for Divo
      ambientLight = new THREE.AmbientLight(0xffffff, 5.0);
      directionalLight = new THREE.DirectionalLight(0xffffff, 5.5);
      backLight = new THREE.DirectionalLight(0xffffff, 5.0);
      fillLight = new THREE.DirectionalLight(0xffffff, 4.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 4.5);
      break;
    case 'Bugatti Centodieci':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2019_bugatti_centodieci.glb';
      // Increased lighting for Centodieci
      ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
      backLight = new THREE.DirectionalLight(0xffffff, 1.2);
      fillLight = new THREE.DirectionalLight(0xffffff, 1.1);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
      break;
    case 'Grand Vitara':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/suzuki_grand_vitara.glb';
      // Further increased bright lighting for Grand Vitara
      ambientLight = new THREE.AmbientLight(0xffffff, 5.0);
      directionalLight = new THREE.DirectionalLight(0xffffff, 5.5);
      backLight = new THREE.DirectionalLight(0xffffff, 5.0);
      fillLight = new THREE.DirectionalLight(0xffffff, 4.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 4.5);
      break;
    case 'BYD Sealion 7':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2024_byd_sealion_7.glb';
      // Bright lighting for BYD Sealion 7
      ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
      directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
      backLight = new THREE.DirectionalLight(0xffffff, 1.5);
      fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
      break;
    case 'Skoda Superb':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2017_skoda_superb.glb';
      // Set lighting for Skoda Superb
      ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
      directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
      backLight = new THREE.DirectionalLight(0xffffff, 1.0);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
      break;
    case 'MG Hector':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/mg_hector.glb';
      // Further reduced lighting for MG Hector
      ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
      backLight = new THREE.DirectionalLight(0xffffff, 0.5);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
      break;
    case 'Toyota Fortuner':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/toyota_fortuner_2021.glb';
      // Set lighting for Toyota Fortuner
      ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
      directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
      backLight = new THREE.DirectionalLight(0xffffff, 2.0);
      fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
      break;
    case 'Honda City':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/honda_city_2017.glb';
      // Set lighting for Honda City
      ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
      directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
      backLight = new THREE.DirectionalLight(0xffffff, 2.0);
      fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
      break;
    case 'Volkswagen Virtus':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2022_volkswagen_virtus_gt.glb';
      // Reduced lighting for Volkswagen Virtus GT
      ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
      backLight = new THREE.DirectionalLight(0xffffff, 0.8);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
      break;
    case 'BMW 3-Series':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/bmwM3.glb';
      // Adjusted lighting for BMW M3 interior
      ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.6);
      backLight.position.set(-5, 5, -5);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      fillLight.position.set(0, 2, 0);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.3);
      break;
    case 'Audi RS Q8':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2023_audi_rs_q8.glb';
      // Further reduced lighting for Audi RS Q8
      ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
      backLight = new THREE.DirectionalLight(0xffffff, 0.8);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
      break;
    case 'Porsche 911 Carrera S':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/porsche_911_carrera_s_991.glb';
      // Reduced lighting for Porsche 911
      ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
      backLight = new THREE.DirectionalLight(0xffffff, 0.2);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.15);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
      break;
    case 'Koenigsegg Jesko':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2020_koenigsegg_jesko.glb';
      // Drastically reduced lighting for Koenigsegg Jesko
      ambientLight = new THREE.AmbientLight(0xffffff, 0.01);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.01);
      backLight = new THREE.DirectionalLight(0xffffff, 0.01);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.01);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.01);
      break;
    case 'Koenigsegg Gemera':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2021_koenigsegg_gemera.glb';
      // Reduced lighting for Gemera
      ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
      backLight = new THREE.DirectionalLight(0xffffff, 0.2);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.15);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
      break;
    case 'Koenigsegg Regera':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2015_koenigsegg_regera.glb';
      // Extremely reduced lighting for Regera
      ambientLight = new THREE.AmbientLight(0xffffff, 0.01);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.01);
      backLight = new THREE.DirectionalLight(0xffffff, 0.01);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.01);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.01);
      break;
    case 'McLaren Artura':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2025_mclaren_artura_spider.glb';
      // Further reduced lighting for Artura
      ambientLight = new THREE.AmbientLight(0xffffff, 0.005);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.005);
      backLight = new THREE.DirectionalLight(0xffffff, 0.005);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.005);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.005);
      break;
    case 'Rimac Nevera':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/rimac_nevera.glb';
      // Greatly increased lighting for Nevera
      ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.5);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
      break;
    case 'Rimac Concept One':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2016_rimac_concept_s.glb';
      // Set lighting for Concept One
      ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight = new THREE.DirectionalLight(0xffffff, 0.5);
      fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
      break;
    case 'Aston Martin Valkyrie':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/aston_martin_valkyrie.glb';
      // Greatly increased lighting for Valkyrie
      ambientLight = new THREE.AmbientLight(0xffffff, 3.0);
      directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
      backLight = new THREE.DirectionalLight(0xffffff, 3.0);
      fillLight = new THREE.DirectionalLight(0xffffff, 3.0);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 3.0);
      break;
    case 'Aston Martin Vulcan':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/aston_martin_vulcan.glb';
      // Greatly increased lighting for Vulcan
      ambientLight = new THREE.AmbientLight(0xffffff, 3.0);
      directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
      backLight = new THREE.DirectionalLight(0xffffff, 3.0);
      fillLight = new THREE.DirectionalLight(0xffffff, 3.0);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 3.0);
      break;
    case 'Aston Martin One-77':
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/2011_aston_martin_one-77.glb';
      // Increased lighting for One-77
      ambientLight = new THREE.AmbientLight(0xffffff, 5.0);
      directionalLight = new THREE.DirectionalLight(0xffffff, 5.5);
      backLight = new THREE.DirectionalLight(0xffffff, 5.0);
      fillLight = new THREE.DirectionalLight(0xffffff, 4.5);
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 4.5);
      break;
    // Add more cases for other car models as needed
    default:
      modelPath =
        'https://github.com/codewithalankrit/Car_Website/releases/download/v1.0.0/suzuki_grand_vitara.glb';
  }

  // Load the 3D model
  const loader = new THREE.GLTFLoader();
  loader.load(
    modelPath,
    function (gltf) {
      model = gltf.scene;
      scene.add(model);

      // Center the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Calculate the maximum dimension
      const maxDim = Math.max(size.x, size.y, size.z);
      console.log('Calculated scale factor:', 8.0 / maxDim);

      // Scale the model to a desired visual size
      let targetScaledMaxDim = 8.0;
      let distanceMultiplier = 0.8;
      let verticalOffset = 1.0;

      // Adjust settings based on the car model
      if (modalTitle === 'Pagani Utopia') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Pagani Huayra BC') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.0;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Pagani Huayra BC') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.0;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Lamborghini Aventador') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Lamborghini Huracan') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Lamborghini Urus') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Hennessey Venom F5') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Hennessey Exorcist') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Hennessey Vehnom GT') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Ferrari SF90 Stradale') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Ferrari 296 GTB') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Ferrari Purosangue') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'McLaren 765LT') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'McLaren Senna') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 3.0;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Bugatti Chiron') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Bugatti Divo') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Bugatti Centodieci') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Hyundai Creta') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 3.0;
        verticalOffset = 0.8;
      } else if (modalTitle === 'BYD Sealion 7') {
        targetScaledMaxDim = 4.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Skoda Superb') {
        targetScaledMaxDim = 3.5;
        distanceMultiplier = 2.8;
        verticalOffset = 0.8;
      } else if (modalTitle === 'MG Hector') {
        targetScaledMaxDim = 3.5;
        distanceMultiplier = 1.2;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Toyota Fortuner') {
        targetScaledMaxDim = 3.5;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Honda City') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 0.1;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Volkswagen Virtus') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'BMW 3-Series') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Audi RS Q8') {
        targetScaledMaxDim = 3.5;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Porsche 911 Carrera S') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Koenigsegg Gemera') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Koenigsegg Regera') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'McLaren Artura') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Rimac Concept One') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Aston Martin Valkyrie') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      } else if (modalTitle === 'Aston Martin Vulcan') {
        targetScaledMaxDim = 3.0;
        distanceMultiplier = 2.5;
        verticalOffset = 0.8;
      }

      const scale = targetScaledMaxDim / maxDim;
      model.scale.multiplyScalar(scale);

      // Recalculate bounding box after scaling
      const scaledBox = new THREE.Box3().setFromObject(model);
      const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
      const scaledSize = scaledBox.getSize(new THREE.Vector3());

      // Apply a vertical offset to visually center the model
      model.position.sub(scaledCenter);

      // Add a small additional offset to visually lift it
      model.position.y += verticalOffset;

      // Calculate optimal camera distance
      const fov = camera.fov * (Math.PI / 180);
      const aspect = camera.aspect;
      let distance;

      if (scaledSize.y > scaledSize.x * aspect) {
        distance = scaledSize.y / 2 / Math.tan(fov / 2);
      } else {
        distance = scaledSize.x / 2 / (Math.tan(fov / 2) * aspect);
      }

      // Add a buffer to the distance so the model isn't right at the edge
      distance *= distanceMultiplier;

      // Position camera at a good viewing angle
      camera.position.set(distance * 0.8, model.position.y + scaledSize.y * 0.2, distance * 0.8);
      camera.near = 0.1;
      camera.far = 1000;
      camera.updateProjectionMatrix();

      // Point camera at the model's new Y position
      const targetY = model.position.y + scaledSize.y * 0.2;
      camera.lookAt(0, targetY, 0);
      controls.target.set(0, targetY, 0);

      // Adjust controls
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.0;
      controls.minDistance = distance * 0.5;
      controls.maxDistance = distance * 2.0;
      controls.update();

      model.traverse(node => {
        if (node.isMesh) {
          console.log('Mesh found:', node.name, node.material);
          // Ensure materials are not black and are visible
          if (Array.isArray(node.material)) {
            node.material.forEach(material => {
              if (material.color && material.color.getHex() === 0x000000) {
                console.warn('Material is black:', material);
                material.color.setHex(0xaaaaaa); // Set to a default grey to make it visible
              }
              // Add glass effect to window materials
              if (
                node.name.toLowerCase().includes('glass') ||
                node.name.toLowerCase().includes('window') ||
                node.name.toLowerCase().includes('windshield')
              ) {
                material.transparent = true;
                material.opacity = 0.3;
                material.refractionRatio = 0.98;
                material.reflectivity = 1;
                material.envMapIntensity = 1;
                material.roughness = 0;
                material.metalness = 1;
              }
              // Handle tire materials specifically
              if (
                node.name.toLowerCase().includes('tire') ||
                node.name.toLowerCase().includes('wheel')
              ) {
                material.roughness = 0.8;
                material.metalness = 0.2;
                material.needsUpdate = true;
              }
              material.needsUpdate = true;
            });
          } else if (node.material) {
            if (node.material.color && node.material.color.getHex() === 0x000000) {
              console.warn('Material is black:', node.material);
              node.material.color.setHex(0xaaaaaa); // Set to a default grey to make it visible
            }
            // Add glass effect to window materials
            if (
              node.name.toLowerCase().includes('glass') ||
              node.name.toLowerCase().includes('window') ||
              node.name.toLowerCase().includes('windshield')
            ) {
              node.material.transparent = true;
              node.material.opacity = 0.3;
              node.material.refractionRatio = 0.98;
              node.material.reflectivity = 1;
              node.material.envMapIntensity = 1;
              node.material.roughness = 0;
              node.material.metalness = 1;
            }
            // Handle tire materials specifically
            if (
              node.name.toLowerCase().includes('tire') ||
              node.name.toLowerCase().includes('wheel')
            ) {
              node.material.roughness = 0.8;
              node.material.metalness = 0.2;
              node.material.needsUpdate = true;
            }
            node.material.needsUpdate = true;
          }
        }
      });
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    function (error) {
      console.error('An error happened', error);
    }
  );

  // Position and add lights
  directionalLight.position.set(5, 5, 5);
  backLight.position.set(-5, 5, -5);
  fillLight.position.set(0, 5, 0);

  scene.add(ambientLight);
  scene.add(directionalLight);
  scene.add(backLight);
  scene.add(fillLight);
  scene.add(hemisphereLight);

  // Adjust existing lights
  ambientLight.intensity = 0.1; // Reduced from 0.5
  directionalLight.intensity = 0.1; // Reduced from 0.5
  directionalLight.position.set(5, 5, 5);

  // Add point lights for better illumination
  const pointLight1 = new THREE.PointLight(0xffffff, 0.1); // Reduced from 0.5
  pointLight1.position.set(10, 10, 10);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xffffff, 0.1); // Reduced from 0.5
  pointLight2.position.set(-10, 10, -10);
  scene.add(pointLight2);

  // Add additional point lights for more coverage
  const pointLight3 = new THREE.PointLight(0xffffff, 0.08); // Reduced from 0.4
  pointLight3.position.set(0, 15, 0);
  scene.add(pointLight3);

  const pointLight4 = new THREE.PointLight(0xffffff, 0.08); // Reduced from 0.4
  pointLight4.position.set(0, -15, 0);
  scene.add(pointLight4);

  // Add one more point light for extra brightness
  const pointLight5 = new THREE.PointLight(0xffffff, 0.08); // Reduced from 0.4
  pointLight5.position.set(0, 0, 15);
  scene.add(pointLight5);

  // Adjust existing hemisphere light
  hemisphereLight.intensity = 0.08; // Reduced from 0.4

  // Add orbit controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);

  // Start animation loop
  animate();
}

function onWindowResize() {
  const container = document.getElementById('car3dViewer');
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  console.log('Window resized: Renderer size set to W=' + width + ', H=' + height);
  console.log('Canvas element after resize:', renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  if (controls) controls.update();
  if (renderer && scene && camera) renderer.render(scene, camera);
}

// Initialize viewer when modal is shown
$(document).ready(function () {
  console.log('Document ready, setting up modal handlers');

  $('#car3dModal').on('shown.bs.modal', function () {
    console.log('Modal shown, initializing viewer');
    init3DViewer();
  });

  // Clean up when modal is hidden
  $('#car3dModal').on('hidden.bs.modal', function () {
    console.log('Modal hidden, cleaning up');
    if (renderer) {
      renderer.dispose();
    }
    if (controls) {
      controls.dispose();
    }
    const container = document.getElementById('car3dViewer');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  });

  // Add event listener for ESC key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      $('#car3dModal').modal('hide');
      // Resume carousel when modal is closed
      $('#new-cars-carousel').trigger('play.owl.autoplay');
    }
  });

  // Pause carousel when BMW 3-Series is opened
  $('#car3dModal').on('show.bs.modal', function (e) {
    if (document.querySelector('#car3dModal .modal-title').textContent === 'BMW 3-Series') {
      $('#new-cars-carousel').trigger('stop.owl.autoplay');
    }
  });

  // Resume carousel when modal is closed
  $('#car3dModal').on('hidden.bs.modal', function (e) {
    $('#new-cars-carousel').trigger('play.owl.autoplay');
  });

  // Initialize the viewer
  init3DViewer();
  animate();
});

function handleSearch() {
  const year = document.getElementById('yearSelect').value;
  const make = document.getElementById('makeSelect').value;
  const model = document.getElementById('modelSelect').value;

  if (year === '2025') {
    if (make === 'koenigsegg') {
      if (model === 'jesko') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Koenigsegg Jesko';
        $('#car3dModal').modal('show');
      } else if (model === 'gemera') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Koenigsegg Gemera';
        $('#car3dModal').modal('show');
      } else if (model === 'regera') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Koenigsegg Regera';
        $('#car3dModal').modal('show');
      }
    } else if (make === 'rimac') {
      if (model === 'nevera') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Rimac Nevera';
        $('#car3dModal').modal('show');
      } else if (model === 'concept-one') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Rimac Concept One';
        $('#car3dModal').modal('show');
      }
    } else if (make === 'aston martin') {
      if (model === 'valkyrie') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Aston Martin Valkyrie';
        $('#car3dModal').modal('show');
      } else if (model === 'vulcan') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Aston Martin Vulcan';
        $('#car3dModal').modal('show');
      } else if (model === 'one-77') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Aston Martin One-77';
        $('#car3dModal').modal('show');
      }
    }
  } else if (year === '2023') {
    if (make === 'pagani') {
      if (model === 'utopia') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Pagani Utopia';
        $('#car3dModal').modal('show');
      } else if (model === 'huayra-bc') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Pagani Huayra BC';
        $('#car3dModal').modal('show');
      }
    } else if (make === 'lamborghini') {
      if (model === 'aventador') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Lamborghini Aventador';
        $('#car3dModal').modal('show');
      } else if (model === 'huracan') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Lamborghini Huracan';
        $('#car3dModal').modal('show');
      } else if (model === 'urus') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Lamborghini Urus';
        $('#car3dModal').modal('show');
      }
    } else if (make === 'hennessey') {
      if (model === 'venom-f5') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Hennessey Venom F5';
        $('#car3dModal').modal('show');
      } else if (model === 'exorcist') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Hennessey Exorcist';
        $('#car3dModal').modal('show');
      } else if (model === 'vehnom-gt') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Hennessey Vehnom GT';
        $('#car3dModal').modal('show');
      }
    }
  } else if (year === '2024') {
    if (make === 'ferrari') {
      if (model === 'sf90-stradale') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Ferrari SF90 Stradale';
        $('#car3dModal').modal('show');
      } else if (model === '296-gtb') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Ferrari 296 GTB';
        $('#car3dModal').modal('show');
      } else if (model === 'purosangue') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Ferrari Purosangue';
        $('#car3dModal').modal('show');
      }
    } else if (make === 'mclaren') {
      if (model === '765lt') {
        document.querySelector('#car3dModal .modal-title').textContent = 'McLaren 765LT';
        $('#car3dModal').modal('show');
      } else if (model === 'senna') {
        document.querySelector('#car3dModal .modal-title').textContent = 'McLaren Senna';
        $('#car3dModal').modal('show');
      } else if (model === 'artura') {
        document.querySelector('#car3dModal .modal-title').textContent = 'McLaren Artura';
        $('#car3dModal').modal('show');
      }
    } else if (make === 'bugatti') {
      if (model === 'chiron') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Bugatti Chiron';
        $('#car3dModal').modal('show');
      } else if (model === 'divo') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Bugatti Divo';
        $('#car3dModal').modal('show');
      } else if (model === 'centodieci') {
        document.querySelector('#car3dModal .modal-title').textContent = 'Bugatti Centodieci';
        $('#car3dModal').modal('show');
      }
    }
  }
}

// Add event listener for search button
document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.querySelector('.model-search-btn');
  if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
  }
});

function handleMakeChange() {
  const makeSelect = document.getElementById('makeSelect');
  const modelSelect = document.getElementById('modelSelect');
  const conditionSelect = document.getElementById('conditionSelect');
  const priceSelect = document.getElementById('priceSelect');
  const searchButton = document.getElementById('searchButton');

  // Clear existing model options
  modelSelect.innerHTML = '<option value="" disabled selected>Select Model</option>';

  if (makeSelect.value === 'aston martin') {
    // Add Aston Martin models
    const models = [
      { value: 'valkyrie', text: 'Valkyrie' },
      { value: 'vulcan', text: 'Vulcan' },
      { value: 'one-77', text: 'One-77' },
    ];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.value;
      option.textContent = model.text;
      modelSelect.appendChild(option);
    });
  } else if (makeSelect.value === 'pagani') {
    // Add Pagani models
    const models = [
      { value: 'utopia', text: 'Utopia' },
      { value: 'huayra-bc', text: 'Huayra BC' },
    ];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.value;
      option.textContent = model.text;
      modelSelect.appendChild(option);
    });
  }
  // ... Add other make options as needed ...

  // Enable model select
  modelSelect.disabled = false;

  // Disable condition and price selects until model is selected
  conditionSelect.disabled = true;
  priceSelect.disabled = true;
  searchButton.disabled = true;
}
