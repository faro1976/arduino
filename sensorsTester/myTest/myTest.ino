static float floatvar = 12345.67;
static char sprintfbuffer[15];
static char dtostrfbuffer[15];
 
void setup() {
  sprintf(sprintfbuffer,"%f", floatvar);
  dtostrf(floatvar,8, 2, dtostrfbuffer);
 
  Serial.begin(9600);
  Serial.print("sprintf: ");
  Serial.println(sprintfbuffer);
  Serial.print("dtostrf: ");
  Serial.println(dtostrfbuffer);
}
 
void loop(){
}
