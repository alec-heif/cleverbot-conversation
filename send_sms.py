# Download the twilio-python library from http://twilio.com/docs/libraries
from twilio.rest import TwilioRestClient
 
# Find these values at https://twilio.com/user/account
account_sid = "AC85e3a1f973eed48e25413f64e880ac65"
auth_token = "ba5fedf59c42e20d1065148f23426e3a"
client = TwilioRestClient(account_sid, auth_token)
 
message = client.messages.create(to="+18583543675", from_="+14423336273",
                                     body="Hello there!")
