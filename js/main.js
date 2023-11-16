const { createApp } = Vue;

createApp( {
    data() {
        return {
            slides: [
                {
                    immagine: 'https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-787.jpg',
                    nome: 'Smartphone XYZ',
                    descrizione: 'Uno smartphone potente con caratteristiche avanzate e display nitido.',
                    prezzo: 499.99
                },
                {
                    immagine: 'https://img.freepik.com/free-psd/laptop-blue-background-mock-up_1022-178.jpg',
                    nome: 'Laptop ABC',
                    descrizione: 'Un laptop leggero e performante, ideale per la produttività in movimento.',
                    prezzo: 899.99
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg',
                    nome: 'Fotocamera 123',
                    descrizione: 'Una fotocamera professionale con alta risoluzione e molte funzionalità.',
                    prezzo: 699.99
                }
            ],

            currentImg: 1,
            isPlaying: false,
            isReversed: false,
            // animation: false,
            // isUp: false,
            // isDown: false,
            // order: {
            //     1: 'one',
            //     2: 'two',
            //     3: 'three',
            //     4: 'four',
            //     5: 'five'
            // }
        }
    },
    
    methods: {
        reorder: function () {
            this.order.a = 'three';
            this.order.b = 'one';
            this.order.c = 'two';
          },

        previousImage() {
            if (this.currentImg === 0) this.currentImg = this.slides.length;
            this.currentImg--;
            this.shiftCardsDown();
        },

        nextImage() {
            if (this.currentImg === this.slides.length-1) this.currentImg = -1;
            this.currentImg++;  
        },

        selectThumbnail(i) {
            console.log(i);
            if (!this.animation) {
                this.currentImg = i;
            }
        },

        autoPlay() {
    
            console.log(this.isPlaying);
            this.isPlaying = !this.isPlaying;
            if (this.isPlaying) {
                myInterval = setInterval(() => {
                    if (!this.isReversed) {
                        if (this.currentImg === this.slides.length-1) this.currentImg = -1;
                        this.currentImg++; 
                    } else {
                        this.previousImage();
                    }
                }, 3000);
            } else {
                clearInterval(myInterval);
            }
        },

        reverse() {
            this.isReversed = !this.isReversed;
        }

        // delay(ms) {
        //     return new Promise(res => setTimeout(res, ms));
        // },

        // async shiftCardsDown() {
        //     this.animation = true;
        //     this.isDown = true;
        //     await this.delay(500);
        //     this.reorder();
        //     this.isDown = false;
        //     this.animation = false;
        // }
    }
}).mount( '#app' );