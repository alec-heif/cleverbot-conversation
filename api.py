from chatterbotapi import ChatterBotFactory, ChatterBotType
# Download the twilio-python library from http://twilio.com/docs/libraries
#from twilio.rest import TwilioRestClient
import sys
from random import randint
	
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
	
	
botSession = getSession()

for line in sys.stdin:
    return botSession.think(line)