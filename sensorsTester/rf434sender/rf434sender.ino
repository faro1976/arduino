/*
  SimpleSend
  This sketch transmits a short text message using the VirtualWire library
  connect the Transmitter data pin to Arduino pin 12
*/

#include <VirtualWire.h>

void setup()
{
    // Initialize the IO and ISR
    vw_setup(2000);           // Bits per sec
  pinMode(13, OUTPUT);         
}

void loop()
{
    digitalWrite(13, HIGH);
    send("hello");
    delay(1000);
    digitalWrite(13, LOW);    
    delay(1000);    
}

void send (char *message)
{
  vw_send((uint8_t *)message, strlen(message));
  vw_wait_tx(); // Wait until the whole message is gone
}
