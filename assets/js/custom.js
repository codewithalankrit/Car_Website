$(document).ready(function () {
  'use strict';

  /*==================================
* Author        : "ThemeSine"
* Template Name : CarVilla HTML Template
* Version       : 1.0
==================================== */

  /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. welcome animation support
3. owl carousel
4. 3D Car Viewer
======================================*/

  // 1. Scroll To Top
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.return-to-top').fadeIn();
    } else {
      $('.return-to-top').fadeOut();
    }
  });
  $('.return-to-top').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });

  // 2. welcome animation support

  $(window).load(function () {
    $('.welcome-hero-txt h2,.welcome-hero-txt p')
      .removeClass('animated fadeInUp')
      .css({ opacity: '0' });
    $('.welcome-hero-txt button').removeClass('animated fadeInDown').css({ opacity: '0' });
  });

  $(window).load(function () {
    $('.welcome-hero-txt h2,.welcome-hero-txt p')
      .addClass('animated fadeInUp')
      .css({ opacity: '0' });
    $('.welcome-hero-txt button').addClass('animated fadeInDown').css({ opacity: '0' });
  });

  // 3. owl carousel

  // i.  new-cars-carousel

  $('#new-cars-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: true,
    mouseDrag: true,
    nav: false,
    smartSpeed: 1000,
    transitionStyle: 'fade',
    animateIn: 'fadeIn',
    animateOut: 'fadeOutLeft',
    // navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });

  // ii. .testimonial-carousel

  var owl = $('.testimonial-carousel');
  owl.owlCarousel({
    items: 3,
    margin: 0,

    loop: true,
    autoplay: true,
    smartSpeed: 1000,

    //nav:false,
    //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

    dots: false,
    autoplayHoverPause: false,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // iii. .brand-item (carousel)

  $('.brand-item').owlCarousel({
    items: 6,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    dots: false,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      415: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000]);
  });
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay');
  });

  // 4. 3D Car Viewer
  let scene, camera, renderer, controls, car;
  const carModels = {
    NexonEV: 'assets/models/nexon_ev.glb',
    Creta: 'assets/models/creta.glb',
    GrandVitara: 'assets/models/suzuki_grand_vitara.glb',
    Seltos: 'assets/models/seltos.glb',
    Fortuner: 'assets/models/fortuner.glb',
    Hector: 'assets/models/hector.glb',
  };

  function init3DViewer() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fb);

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(document.getElementById('car3dViewer').offsetWidth, 500);
    document.getElementById('car3dViewer').appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Add controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
  }

  function loadCarModel(modelPath) {
    const loader = new THREE.GLTFLoader();
    loader.load(
      modelPath,
      function (gltf) {
        if (car) scene.remove(car);
        car = gltf.scene;
        scene.add(car);

        // Center the model
        const box = new THREE.Box3().setFromObject(car);
        const center = box.getCenter(new THREE.Vector3());
        car.position.sub(center);

        // Scale the model
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        car.scale.multiplyScalar(scale);
      },
      undefined,
      function (error) {
        console.error('Error loading model:', error);
      }
    );
  }

  function onWindowResize() {
    const container = document.getElementById('car3dViewer');
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  // Initialize 3D viewer when modal is shown
  $('#car3dModal').on('show.bs.modal', function () {
    init3DViewer();
    animate();
  });

  // Clean up when modal is hidden
  $('#car3dModal').on('hidden.bs.modal', function () {
    if (renderer) {
      renderer.dispose();
      document.getElementById('car3dViewer').innerHTML = '';
    }
  });

  // Handle car image clicks
  $('.featured-cars-img').on('click', function () {
    const carName = $(this).closest('.single-featured-cars').find('h2 a').text().trim();
    const modelPath = carModels[carName.replace(/\s+/g, '')];
    if (modelPath) {
      $('#car3dModal').modal('show');
      loadCarModel(modelPath);
    }
  });
});
