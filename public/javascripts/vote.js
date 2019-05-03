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
                 "action": "votebatman",
                 "input" : input
            });
                e.preventDefault();
        });

        this.superman.addEventListener("click", function (e) {
            that.primus.write({
                 "action": "votesuperman",
                 "input" : input
            });
                e.preventDefault();
});

    }

    loginput(input){
        console.log(input);
        let votes = document.getElementById('batmanVotes');
        placetexthere.innerHTML  += votes + "<br>";
    }

    clearinput(){
        document.getElementById('input').value = "";
    }

   


}

let v = new Vote();