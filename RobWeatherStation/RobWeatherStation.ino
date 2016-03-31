
#include <dht.h>
#include <Wire.h>
#include <Adafruit_MPL115A2.h>
#include <LiquidCrystal.h>

#define DHT22_PIN 10
#define temt6000Pin A0
#define TMP36_PIN A1
#define LED_PIN 9
#define BUTTON_PIN 8

Adafruit_MPL115A2 mpl115a2;
dht DHT;
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup(){
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);  
  digitalWrite(LED_PIN, HIGH);
  Serial.begin(9600);
  mpl115a2.begin();  
  
  lcd.begin(16, 2);
  lcd.print("      ROB      ");      
  lcd.setCursor(0, 1);    
  lcd.print("WEATHER STATION");    
  delay(2000);    
  lcd.clear();  
  lcd.print("initializing...");  
  delay(1000);      
  digitalWrite(LED_PIN, LOW);  
}

void loop(){
  digitalWrite(LED_PIN, HIGH);
  lcd.clear();
  lcd.setCursor(0, 0);  
  lcd.print("sensors reading");      
  lcd.setCursor(0, 1);    
  lcd.print("...");
  
  // READ DATA TEMT6000
  int lightVal = analogRead(temt6000Pin);
  //calcolo lux
  //max_read : max_volts = value_read : volts => 1024 : 5 = val : ?
  float volts = 5 * (float)lightVal / 1024.0;
  float amps = volts / 10000.0; //resistenza 10khom
  float microamps = amps * 1000000.0;
  float luxVal = microamps * 2.0;
  Serial.print("TEMT6000 \t Light,voltage:");
  Serial.print(lightVal);  
  Serial.print(", Lux: ");
  Serial.println(luxVal, 1);
  delay(1000);  
  lcd.print(".");

  // READ DATA DHT22
  Serial.print("DHT22 \t");
  int chk = DHT.read22(DHT22_PIN);
  switch (chk)
  {
    case DHTLIB_OK:  
                Serial.print("OK,\t"); 
                break;
    case DHTLIB_ERROR_CHECKSUM: 
                Serial.print("Checksum error,\t"); 
                break;
    case DHTLIB_ERROR_TIMEOUT: 
                Serial.print("Time out error,\t"); 
                break;
    default: 
                Serial.print("Unknown error,\t"); 
                break;
  }
  Serial.print(DHT.humidity, 1);
  Serial.print(",\t");
  Serial.println(DHT.temperature, 1);
  delay(1000);  
  lcd.print(".");  
  
  // READ DATA MPL115A2  
  float pressureKPA = 0, temperatureC = 0;
  pressureKPA = mpl115a2.getPressure();  
  Serial.print("MPL115A2 \t Pressure (kPa): ");
  Serial.print(pressureKPA, 4);
  Serial.print(" kPa");
  temperatureC = mpl115a2.getTemperature();  
  Serial.print("; Temp (*C): ");
  Serial.print(temperatureC, 1);
  Serial.print(" *C");
  //calcolo altezza con pressione atmosferica a livello del mare standard (101325 Pa = 101.325 KPa)
  //altitude = 44330 * [1 - (p/p0)^(1/5.255)]
  const float p0 = 101325;
  float altitude = 0;    
  altitude = (float)44330 * (1 - pow(((float) (pressureKPA*1000)/p0), 0.190295));
  Serial.print("; Altitude: ");
  Serial.print(altitude, 1);
  Serial.println(" meters");  
  delay(1000);
  lcd.print(".");  

  //READ DATA TMP36
  float tmp36Val = analogRead(TMP36_PIN);  
  float voltageVal = (tmp36Val / 1024.0) * 5.0;
  float temperatureVal = (voltageVal - 0.5) * 100;  
  Serial.print("TMP36 \t (*C)");  
  Serial.println(temperatureVal);    
  delay(1000);    
  lcd.print(".");
  
  digitalWrite(LED_PIN, LOW);    
  lcd.clear();  
  int buttonState = digitalRead(BUTTON_PIN);
  Serial.print("button state: ");
  Serial.println(buttonState);
  if (buttonState == HIGH) {     
    //debug mode
    lcd.setCursor(0, 0);    
    lcd.print("DEBUG INFO..... ");  
    lcd.setCursor(0, 1);        
    lcd.print(millis()/1000);  
    lcd.print(" secs");      
    delay(2000);        
    lcd.clear();      
    lcd.setCursor(0, 0);    
    lcd.print("DHT22 RH%:");    
    lcd.setCursor(0, 1);        
    lcd.print(DHT.humidity);
    delay(2000);        
    lcd.clear();      
    lcd.setCursor(0, 0);    
    lcd.print("DHT22 temp *C:");        
    lcd.setCursor(0, 1);            
    lcd.print(DHT.temperature);
    delay(2000);        
    lcd.clear();      
    lcd.setCursor(0, 0);    
    lcd.print("TMP36 temp *C:");        
    lcd.setCursor(0, 1);        
    lcd.print(temperatureVal);
    delay(2000);        
    lcd.clear();      
    lcd.setCursor(0, 0);        
    lcd.print("MPL115A2 kPa:");   
    lcd.setCursor(0, 1);        
    lcd.print(pressureKPA);
    delay(2000);        
    lcd.clear();      
    lcd.setCursor(0, 0);  
    lcd.print("MPL115A2 temp*C:");       
    lcd.setCursor(0, 1);        
    lcd.print(temperatureC);
    delay(2000);        
    lcd.clear();      
    lcd.setCursor(0, 0);      
    lcd.print("----------------");
  } else {
    //standard mode
    lcd.setCursor(0, 0);    
    lcd.print("secs from start");
    lcd.setCursor(0, 1);        
    lcd.print(millis()/1000);
    delay(1000);       
    
    lcd.clear();      
    lcd.setCursor(0, 0);  
    lcd.print("hum ");            
    lcd.print(DHT.humidity, 1);
    lcd.print(" RH%");        
    lcd.setCursor(0, 1);      
    lcd.print("temp ");                
    lcd.print(DHT.temperature, 2);  
    lcd.print(" *C");    
    delay(10000);    
    
    lcd.clear();      
    lcd.setCursor(0, 0);   
    lcd.print("press ");        
    lcd.print(pressureKPA, 2);
    lcd.print(" kPa");  
    lcd.setCursor(0, 1);        
    lcd.print("altitude ");        
    lcd.print(altitude, 1);    
    lcd.print(" m");        
    delay(10000);        
    
    lcd.clear();      
    lcd.setCursor(0, 0);   
    lcd.print("light ");            
    lcd.print(luxVal, 0);
    lcd.print(" lux");    
  }
  
  delay(10000);
}

