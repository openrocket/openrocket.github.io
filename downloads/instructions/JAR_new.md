<style>
	code {
      color: #c7254e;
      background-color: #f9f2f4;
    }
</style>

To use the .jar file, download it, and start it from the
command line with: `java -jar OpenRocket-${VERSION}$.jar`

You **must** use Java 11 or Java 17 for this to work. Java 17 is recommended.

<b style="color: red">Important note</b>: Java 17 can cause issues for some people, most noticeably the 3D view can be 
broken for Windows users. A workaround for this is to run the JAR file using the command:

`java --add-exports=java.base/java.lang=ALL-UNNAMED --add-exports=java.desktop/sun.awt=ALL-UNNAMED --add-exports=java.desktop/sun.java2d=ALL-UNNAMED -jar OpenRocket.jar`