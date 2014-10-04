from chatterbotapi import ChatterBotFactory, ChatterBotType
# Download the twilio-python library from http://twilio.com/docs/libraries
#from twilio.rest import TwilioRestClient
from random import randint

# function getResponse:
# Takes in an input message and a session and returns cleverbot message based on that session
def getResponse(inputMSG, botsession):
    print 'input> ' + inputMSG
    s = botsession.think(inputMSG);
    print 'bot1> ' + s
    return s
	
# function getSession:
# creates a new cleverbot factory and returns it as a session
def getSession():
	factory = ChatterBotFactory()
    rInt = randint(0,1)
    if rInt == 1:
        bot1 = factory.create(ChatterBotType.CLEVERBOT)
    else:
        bot1 = factory.create(ChatterBotType.PANDORABOTS, 'b0dafd24ee35a477')
    
	return bot1.create_session()