Event loop with callback queue
The event loop is fundamental concept in JS that governs how asynchronous operations are managed and executed whithin a single_threded environment.

The event loop contioniously check the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the callstack for execution.

This process ensures that the asynchronous code is executed when the call stack is clear.

Takeways:

JS is single-threaded. It provides us the logic where as the Web API provides the features.
Callback queue: When an asynchronous operation (like a setTimeOut or an event listner) is ready to be executed, its callback function is place in the callback queue.
Event loop: The event loop continiously checks the call stack and the callback queue and pushes the function from the callback to the callstack./