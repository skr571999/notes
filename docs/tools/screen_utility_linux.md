# Screen Commands in Linux

By using Screen command in Linux we can start multiple shell session at the same time and use them. 

## Resource

- https://www.geeksforgeeks.org/screen-command-in-linux-with-examples/

## Usage

- Installing Screen
	- sudo apt install screen
- Start a Screen Session
	- sudo screen
	- sudo screen -S SESSION_NAME
- See the List of the Screens
	- sudo screen -ls
- To detach a Screen
	- screen -d SESSION_ID
- To attach to a detached Screen
	- screen -r SESSION_ID
- To Close a Screen
	- I - Go to that screen
	- II - type exit
- To attach to a not detached Screen
	- screen -x SESSION_ID
- To rename a session
	- I - Go to that Session Screen
	- II - (CTRL + A) + type :sessionname NEW_SESSION_NAME
- To see the current Session name
	- I - Go to that Session
	- II - echo $STY 