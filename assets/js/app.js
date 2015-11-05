/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 88,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 15
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1.5,
                "opacity_min": 0.15,
                "sync": false
            }
        },
        "size": {
            "value": 2.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.15,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 110,
            "color": "#33b1f8",
            "opacity": 0.25,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;
/* config dom id (optional) + config particles params
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 10.5,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: 2,
    size_random: false,
    nb: 350,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#ccc',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'window', // "canvas" or "window"
    mode: 'grab', // "grab" or false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'bounce', // "out" or "bounce"
        density_auto: true,
        density_area: 1000 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true

});*/