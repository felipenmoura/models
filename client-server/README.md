# Model for Client and Server Apps

This is a model for apps using both server and client code with Babel and Browserify.

### Entering Dev Mode

This mode starts both ```gulp watch``` AND ```node server```, so you can access the page on your browser, as well as work on your files with the watch task.
To do so, run:

```gulp dev```

### Structure

In the **portable** directory, are the files you can use in both client and server sides, this way you can create functions, like validators, for example, only once, and use these files as you will, in both sides.

The directories **client** and **server** are, as you can imagine, used to deal with files that are specific for each side of your application.

It currently uses **gulp**, **express** and **stylus**.

