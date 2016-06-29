daydream outline - project - similar to nightmarejs but more detailed for Q/A purposes

all functionality resides in the webview tag except the screenCapture which will be used
though a IPC event

config file with config object from current nightmarejs

Send IPC events regarding:
    1. Successful completion - details
    2. Thrown error - details (issue with slideshow)
    3. Error - details/real error handle

How to use:
    1. Setup config object in config file
    2. Select test to perform in config file
    3. npm start to run the test
