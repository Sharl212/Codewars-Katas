function Automaton()
{  
  // this defines transition function
   this.states = { 
     "q1": ["q1", "q2"],
     "q2": ["q3", "q2"],
     "q3": ["q2", "q2"]
   };
}

Automaton.prototype.readCommands = function(commands)
{
  // we don't even have to store current state anywhere
  return "q2" === commands.reduce(function(state, input) {
      console.log(state)
    return this.states[state][input];
  }.bind(this), "q1");
}

var myAutomaton = new Automaton();

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.

var isAccepted = myAutomaton.readCommands(["1", "0", "0", "1"]);

isAccepted; 