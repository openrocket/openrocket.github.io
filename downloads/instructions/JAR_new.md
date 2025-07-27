<style>
	code {
      color: #c7254e;
      background-color: #f9f2f4;
    }
</style>

You **must** use Java 17. To run the .jar file, download it, and start it from the command line with: `java -jar OpenRocket-${VERSION}$.jar`

<b style="color: red">Important note 1</b>: Java 17 can cause issues for some people, most noticeably the 3D view can be 
broken for Windows users. A workaround for this is to run the JAR file using the command:

`java --add-exports=java.base/java.lang=ALL-UNNAMED --add-exports=java.desktop/sun.awt=ALL-UNNAMED --add-exports=java.desktop/sun.java2d=ALL-UNNAMED -jar OpenRocket.jar`

If your Java VM does not start with the above arguments, you can try omitting the `--add-exports=java.base/java.lang=ALL-UNNAMED` argument, so run:

`java --add-exports=java.desktop/sun.awt=ALL-UNNAMED --add-exports=java.desktop/sun.java2d=ALL-UNNAMED -jar OpenRocket.jar`

<b style="color: red">Important note 2</b>: Some Windows users experience UI issues like window ghosting. A workaround for this is to run the JAR file using the command:

`java -Dsun.java2d.noddraw=true -Dsun.java2d.d3d=false -Dsun.java2d.ddforcevram=true -Dsun.java2d.ddblit=false -Dswing.useflipBufferStrategy=True -jar OpenRocket.jar`

If you also experience issues with the 3D view, you can combine the two commands:

`java -Dsun.java2d.noddraw=true -Dsun.java2d.d3d=false -Dsun.java2d.ddforcevram=true -Dsun.java2d.ddblit=false -Dswing.useflipBufferStrategy=True --add-exports=java.desktop/sun.awt=ALL-UNNAMED --add-exports=java.desktop/sun.java2d=ALL-UNNAMED -jar OpenRocket.jar`
