class Vote {

    constructor() {
        // Wat we gaan gebruiken
            let that = this;
            this.batman = document.querySelector(".btn--batman");
            this.superman = document.querySelector(".btn--superman");
            
        // primus web sockets
        this.primus = Primus.connect("/", {
            reconnect: {
                max: Infinity // Number: The max delay before we try to reconnect.
                    ,
                min: 500 // Number: The minimum delay before we try reconnect.
                    ,
                retries: 10 // Number: How many times we should try to reconnect.
            }
        });

        this.primus.on("data", function (data) {
            if (data.action === "playhorn") {
                that.playHorn();
            }
        });   

        // allow for a click on our button
        this.superman.addEventListener("click", function (e) {
            that.primus.write({
                 "action": "playhorn"
            });
                e.preventDefault();
});

this.batman.addEventListener("click", function (e) {
    that.primus.write({
         "action": "playhorn"
    });
        e.preventDefault();
});


    }

    playHorn() {
        this.audio.volume = 0.1;
        this.audio.play();
        this.image.style.display = "block";
    }



}