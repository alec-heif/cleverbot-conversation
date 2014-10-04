from chatterbotapi import ChatterBotFactory, ChatterBotType
# Download the twilio-python library from http://twilio.com/docs/libraries
#from twilio.rest import TwilioRestClient
import sys
import time
from random import randint
	
# function getSession:
# creates a new cleverbot factory and returns it as a session
def getSession():
    factory = ChatterBotFactory()
    rInt = randint(0,1)
    bot1 = factory.create(ChatterBotType.CLEVERBOT)
	return bot1.create_session()
	
	
botSession = getSession()

while 1:
    time.sleep(0.01)
    for line in sys.stdin:
        print botSession.think(line)
