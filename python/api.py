from chatterbotapi import ChatterBotFactory, ChatterBotType
# Download the twilio-python library from http://twilio.com/docs/libraries
#from twilio.rest import TwilioRestClient
import sys
from random import randint
import time
	
# function getSession:
# creates a new cleverbot factory and returns it as a session
def getSession():
    factory = ChatterBotFactory()
    bot1 = factory.create(ChatterBotType.CLEVERBOT)    
    return bot1.create_session()

botSession = getSession()

while True:
    line = raw_input()
    print botSession.think(line)
    sys.stdout.flush()
    time.sleep(.01)