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

        }
    },

    methods: {
        previousImage() {
            if (this.currentImg === 0) this.currentImg = this.slides.length;
            this.currentImg--;
        },

        nextImage() {
            if (this.currentImg === this.slides.length-1) this.currentImg = -1;
            this.currentImg++;  
        }
    }
}).mount( '#app' );