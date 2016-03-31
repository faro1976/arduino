#include <IRremote.h>
IRsend irsend;
decode_results results;
int codeLen;
unsigned int rawCodes[RAWBUF];
const int ledPin = 13;
//MAGNAT ON/OFF IR code
unsigned int rawCodesConst[RAWBUF]={8850,4500,500,650,450,650,450,650,450,650,450,650,500,1750,450,650,500,600,500,600,450,700,450,600,550,600,450,650,450,1750,500,650,450,600,550,600,500,600,450,1750,500,1750,450,1750,500,600,500,1750,450,650,500,1700,500,1700,500,650,450,650,500,600,450,1750,500,650,450,1750,450,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
int incomingByte = 0;
const String BOSE_ON = "bose:on";
const String BOSE_OFF = "bose:off";

void setup()
{
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);  
}



void loop() 
{
  if (Serial.available() > 0) {
    //read command until new line char (ascii 10)
    String str = Serial.readStringUntil('\n');    
//    Serial.print("msg received: [");
//    Serial.println(str);
//    Serial.println("]");
    //decode command
    if (str == BOSE_ON) {
//      Serial.println("sending on signal...");      
      digitalWrite(ledPin, HIGH);   
      sendIRCode();                              
    } else if (str == BOSE_OFF) {      
//      Serial.println("sending off signal...");            
      digitalWrite(ledPin, LOW);     
      sendIRCode();                 
    }
    //echo received received
//    Serial.print("msg sent: [");    
    Serial.print(str); 
    Serial.print("\n");     
//    Serial.println("]");
  }
}





void sendIRCode()
{
  irsend.sendRaw(rawCodesConst,67,38);
  
/*  Serial.print("[");
  
  printRawCodes(rawCodesConst);
  
  Serial.println("] code sent");
  delay(50);
//  irrecv.enableIRIn();  
  Serial.println("IR code transmitted");   */
  delay(1000);  
}




void printRawCodes(unsigned int code[])
{
  for (int i = 0; i < RAWBUF; i++)
  {
    Serial.print(code[i]);
    if (RAWBUF > (i+1)) Serial.print(",");
  }
}
