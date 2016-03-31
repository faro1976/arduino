import socket
import sys
import serial

#execution mode (0=simulation,1=production)
execMode = int(sys.argv[1])

if execMode == 1:
	print 'starting in production mode...'
else:
	print 'starting in simulation mode...'

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to the port
server_address = ('', 10000)
print 'starting up on %s port %s' % server_address
sock.bind(server_address)

# Listen for incoming connections
sock.listen(1)

while 1:
   	 # Wait for a connection
	print 'waiting for a connection'
	(connection, client_address) = sock.accept()
	# Create serial port
	ser = serial.Serial('/dev/ttyACM0', 9600)

	try:
		print 'connection from', client_address		
		while 1:
			data = connection.recv(16)
			print 'received from user "%s"' % data
			if data:
				if execMode == 1:
					if data=="h":
						command = "/usr/bin/sudo /sbin/shutdown -h now"
						import subprocess
						process = subprocess.Popen(command.split(), stdout=subprocess.PIPE)
					else:
						ser.write(data)
						strSerIn = ser.readline()
				else:
					strSerIn = "dummy ACK\n"
				print 'received from arduino "%s"' % strSerIn
				connection.sendall(strSerIn)
			else:
				print 'no more data from', client_address
				print 'send stop to arduino'
				if execMode == 1:	
					ser.write('x\n')
				break
	    
	finally:
		# Clean up the connection
		connection.close()
		ser.close()

