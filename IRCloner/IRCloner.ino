#include <IRremote.h>
int RECV_PIN = 11;
IRrecv irrecv(RECV_PIN);
IRsend irsend;
decode_results results;
int codeLen;
unsigned int rawCodes[RAWBUF];
const int buttonPin = 2;
const int ledPin = 6;
int buttonState = 0;
//unsigned int S_pwr[68]={4600,4350,700,1550,650,1550,650,1600,650,450,650,450,650,450,650,450,700,400,700,1550,650,1550,650,1600,650,450,650,450,650,450,700,450,650,450,650,450,650,1550,700,450,650,450,650,450,650,450,650,450,700,400,650,1600,650,450,650,1550,650,1600,650,1550,650,1550,700,1550,650,1550,650};
//unsigned int rawCodesConst[RAWBUF]={2600,950,350,950,400,450,400,500,1250,1400,350,500,400,500,350,500,400,500,800,950,350,500,850,500,350,950,400,450,400,500,800,500,400,500,350,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
unsigned int rawCodesConst[RAWBUF]={8850,4500,500,650,450,650,450,650,450,650,450,650,500,1750,450,650,500,600,500,600,450,700,450,600,550,600,450,650,450,1750,500,650,450,600,550,600,500,600,450,1750,500,1750,450,1750,500,600,500,1750,450,650,500,1700,500,1700,500,650,450,650,500,600,450,1750,500,650,450,1750,450,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};


void setup()
{
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);  
  pinMode(buttonPin, INPUT);
  irrecv.enableIRIn();
}



void loop() 
{
  buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH) {
    Serial.println("button pressed");
    digitalWrite(ledPin, HIGH);
    sendIRCode();
  } else {
    digitalWrite(ledPin, LOW);    
  }

  receiveIRCode();
 //if (!receiveIRCode())  sendIRCode();
}



boolean receiveIRCode()
{
  boolean ret = irrecv.decode(&results);
  if (ret) 
  {  
    digitalWrite(ledPin, HIGH);
    Serial.print("[");
    Serial.print(results.value, HEX);
    Serial.println("] hex code received");
    storeCode(&results);
    Serial.print("[");
    printRawCodes(rawCodes);
    Serial.print("] code stored ");
    Serial.print(codeLen);
    Serial.println(" len");    
    irrecv.resume();
    delay(1000);  
    Serial.println("IR code red");   
    digitalWrite(ledPin, LOW);
  }
  return ret;
}



void sendIRCode()
{
  irsend.sendRaw(rawCodes,codeLen,38);
  //irsend.sendRaw(rawCodesConst,67,38);
  
  Serial.print("[");
  
  printRawCodes(rawCodes);
  //printRawCodes(rawCodesConst);
  
  Serial.println("] code sent");
  delay(50);
  irrecv.enableIRIn();
  delay(1000);  
  Serial.println("IR code transmitted");   
}



void storeCode(decode_results *results) 
{
    codeLen = results->rawlen - 1;
    for (int i = 1; i <= codeLen; i++) {
      if (i % 2) {
        //mark
        rawCodes[i - 1] = results->rawbuf[i]*USECPERTICK - MARK_EXCESS;
      } 
      else {
        //space
        rawCodes[i - 1] = results->rawbuf[i]*USECPERTICK + MARK_EXCESS;
      }
    }
}



void printRawCodes(unsigned int code[])
{
  for (int i = 0; i < RAWBUF; i++)
  {
    Serial.print(code[i]);
    if (RAWBUF > (i+1)) Serial.print(",");
  }
}
