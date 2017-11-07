new Vue({
    el: '#app',
    data: {
      gameActive: false,
      logs: [],
      player: {
        health: 100
      },
      monster: {
        health: 100
      }
    },
    methods: {
      attack: function() {
        var points = this.generateRandomPoints(1, 10);
        this.monster.health -= points;
        this.addLog('Player', 'monster', 'attacks', points);
        this.monasterAttack();
      },
      specialAttack: function() {
        var points = this.generateRandomPoints(1, 15);
        this.monster.health -= points;
        this.addLog('Player', 'monster', 'special attacks', points);

        this.monasterAttack()
      },
      heal: function() {
        var points = this.generateRandomPoints(1, 10);
        this.player.health += points;
        this.addLog('Player', 'self', 'heals', points);

        this.monasterAttack();
      },
      startGame: function() {
        this.gameActive = true;
      },
      reset: function(restartGame) {
        this.monster.health = 100;
        this.player.health = 100;
        this.logs = []
        this.gameActive = restartGame
      },
      monasterAttack: function() {
        var points = this.generateRandomPoints(1, 20);
        this.player.health -= points;
        this.addLog('Monster', 'player', 'attacks', points);
      },
      addLog: function(source, target, type, number) {
        this.logs.push({
          name: source === 'Player' ? 'player-turn' : 'monster-turn',
          text: source + ' ' + type + ' ' + target + ' for ' + number + ' points'
        })
      },
      generateRandomPoints: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      }
    },
    computed: {
      playerWidth: function() {
        return this.player.health + '%';
      },
      monsterWidth: function() {
        return this.monster.health + '%';
      }
    },
    watch: {
      monster: {
        handler: function () {
          if(this.monster.health <= 0){
            if(confirm("You win! Do you want to try again?")){
              this.reset(true);
            } else {
              this.reset(false);
            }
          }
        },
        deep: true
     },
     player: {
      handler: function () {
        if(this.player.health <= 0){
          if(confirm("You lose! Do you want to try again?")){
            this.reset(true);
          } else {
            this.reset(false);
          }
        }
      },
      deep: true
   }
    }
  });
  
