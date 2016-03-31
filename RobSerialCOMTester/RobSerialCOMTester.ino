void setup()
{
  Serial.begin(9600);
}



void loop() 
{
      Serial.println("hello"); 

      
  if (Serial.available() > 0) {
    //read command until new line char (ascii 10)
    String str = Serial.readStringUntil('\n');    
/*    Serial.print("msg received: [");
    Serial.println(str);
    Serial.println("]");*/
    //echo received received
//    Serial.print("msg sent: [");    
    Serial.println(str); 
//    Serial.println("]");
  }
}




