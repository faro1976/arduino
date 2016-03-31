void setup(){
  Serial.begin(9600);
}

void loop(){
  if(Serial.available()){
    String str = Serial.readStringUntil('\n');
    Serial.println("hello " + str);    
  }

  delay(1000);
}
