#This is where random ideas come to life

##Module:Ears
Contains app.js which runs a server on port 3000 that will listen to what is said through the mic.
It will then hand off this data to the translator module

##Module:Location
This module will monitor the physical location of the robot. It currently uses the ip of its internet connection to determine where it is located.
This will help the robot know when it is appropriate to speak out loud.

##Module:Mouth
This module is where the speak functionality for the bot is located.
Currently the speak function is implemented using Mac's say command

##Module:Temporal Lobe
This module is where the bot determines the meaning of words and then finds the best course of action to respond to those words.
The frontal cortex is typically what will control the resonse to reason, but currently reason and action are not seperated.

