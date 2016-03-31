//Standard PWM DC control
int E1 = 5;     //M1 Speed Control
int E2 = 6;     //M2 Speed Control
int M1 = 4;    //M1 Direction Control
int M2 = 7;    //M1 Direction Control
 
///For previous Romeo, please use these pins.
//int E1 = 6;     //M1 Speed Control
//int E2 = 9;     //M2 Speed Control
//int M1 = 7;    //M1 Direction Control
//int M2 = 8;    //M1 Direction Control
 
char cmdDirection = 'x';  //direzione iniziale
int cmdSpeedGear = 200;  //velocità iniziale
 
void stop(void)                    //Stop
{
  digitalWrite(E1,LOW);   
  digitalWrite(E2,LOW);      
  Serial.println("Arduino: command STOP executed");  
}   

void advance(int a,int b)          //Move forward
{
  analogWrite (E1,a);
  digitalWrite(M1,HIGH);    
  analogWrite (E2,b);    
  digitalWrite(M2,HIGH);
  Serial.print("Arduino: command MOVE FORWARD executed at ");      
  Serial.println(a);          
}  

void back_off (int a,int b)          //Move backward
{
  analogWrite (E1,a);
  digitalWrite(M1,LOW);   
  analogWrite (E2,b);    
  digitalWrite(M2,LOW);
  Serial.print("Arduino: command MOVE BACKWARD executed at ");      
  Serial.println(a);            
}
void turn_L (int a,int b)             //Turn Left
{
  analogWrite (E1,a); 
  digitalWrite(M1,LOW);    
  analogWrite (E2,b);    
  digitalWrite(M2,HIGH);
  Serial.print("Arduino: command TURN LEFT executed at ");      
  Serial.println(a);      
}
void turn_R (int a,int b)             //Turn Right
{
  analogWrite (E1,a);
  digitalWrite(M1,HIGH);    
  analogWrite (E2,b);    
  digitalWrite(M2,LOW);
  Serial.print("Arduino: command TURN RIGHT executed at ");      
  Serial.println(a);      
}

void setup(void) 
{ 
  int i;
  for(i=4;i<=7;i++) {
    pinMode(i, OUTPUT);  
  }
  Serial.begin(19200);
} 

void loop(void) 
{
  
  if(Serial.available()){
    String str = Serial.readStringUntil('\n');    
//    char val = Serial.read();
    char val = str.charAt(0);
    if(val != -1)
    {
      if (val == 'g') {
        //ricevuto comando cambio velocità
        cmdSpeedGear = map(str.substring(1).toInt(), 0, 100, 0, 255);                
      } else {
        //ricevuto comando cambio direzione
        cmdDirection = val;
      }
      switch(cmdDirection)
      {
      case 'w'://Move Forward
        advance (cmdSpeedGear,cmdSpeedGear);
        break;
      case 's'://Move Backward
        back_off (cmdSpeedGear,cmdSpeedGear);
        break;
      case 'a'://Turn Left
        turn_L (cmdSpeedGear,cmdSpeedGear);
        break;       
      case 'd'://Turn Right
        turn_R (cmdSpeedGear,cmdSpeedGear);
        break;
      case 'x'://Stop
        stop();
        break;        
      case 'z'://Test
        Serial.println("Hello world!");
        break;
      default:
        Serial.print("Command not known: ");        
        Serial.println(cmdDirection);                
      }
    }
    else {
      Serial.print("Error received: ");
      Serial.println(str);      
    }
    delay(100);    
   }
}

