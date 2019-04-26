class Vote {

    constructor() {
        // Wat we gaan gebruiken
            let that = this;
            this.batman = document.querySelector(".btn--batman");
            this.superman = document.querySelector(".btn--superman");
            this.batman = document.querySelector(".batman img")
            this.imageSuperman = document.querySelector(".superman img");
            
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
            if (data.action === "votebatman") {
                that.votebatman();
            }else if(data.action === "votesuperman"){
                that.votesuperman();
            }
        });   

        // klik op een van de knoppe
        this.batman.addEventListener("click", function (e) {
            that.primus.write({
                 "action": "votebatman"
            });
                e.preventDefault();
        });

        this.superman.addEventListener("click", function (e) {
            that.primus.write({
                 "action": "votesuperman"
            });
                e.preventDefault();
});




    }

    votebatman() {
        this.batman.style.display = "block";
    }

    votesuperman() {
        this.superman.style.display = "block";
    }


}

let v = new Vote();