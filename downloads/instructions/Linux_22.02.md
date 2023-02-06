<style>
	code {
    color: #c7254e;
    background-color: #f9f2f4;
  }
	th, td {
	  padding: 15px;
	}
  table {
	  padding: 5px;
	}
</style>

### Downloading the 22.02 Release	
Download the Linux installer above for the <font
color="red"><i>NEW</i></font> OpenRocket beta release, saying yes to
whatever security prompts your browser presents.

### Installing the 22.02 Release
Before you begin, close any instances of OpenRocket you may have
running.

If you would like to be able to run OpenRocket as an ordinary command,
make sure you have write access to <code>/usr/local/bin/</code>.

Then, navigate to the directory in which you downloaded the installer,
make it executable, and run it as follows:

 ```% cd Downloads``` <em>(or wherever you downloaded it to)</em> \
 ```% chmod +x OpenRocket-22.02-Linux.sh``` \
 ```% ./OpenRocket-22.02-Linux.sh```

The installer will now guide you through the process of installing
OpenRocket on your system. At any step you can click '''Cancel''' to
stop the process.
<html>
  <table class="left">
    <tr>
        <th style="text-align:center">
		  What you see
	    </th>
		<th style="text-align:center">
		  What you do
	    </th>
    </tr>
    <tr>
      <td>
        <a href="downloads/instructions/img/Linux_22.02/linux-1.png"><img src="downloads/instructions/img/Linux_22.02/linux-1.png" alt="Installation Wizard Welcome" width="240"></a>
      </td>
      <td>
        Click <strong>Next</strong> to start the installation process.
      </td>
    </tr>
    <tr>
      <td>
        <a href="downloads/instructions/img/Linux_22.02/linux-2.png"><img src="downloads/instructions/img/Linux_22.02/linux-2.png" alt="Select Destination Directory" width="240"></a>
      </td>
      <td>
        Select the directory in which you wish to install OpenRocket. The
        default will be in a level just under your home directory. Click
        <strong>Next</strong> to continue.
      </td>
    </tr>
    <tr>
      <td>
	    <a href="downloads/instructions/img/Linux_22.02/linux-3.png"><img src="downloads/instructions/img/Linux_22.02/linux-3.png" alt="Enable File Association" width="240"></a>
	  </td>
      <td>
	    If you wish to be able to double-click on a design file to
		edit it with OpenRocket, leave the checkbox checked. Click
		<strong>Next</strong> to continue.
      </td>
    </tr>
	<tr>
		<td>
			<a href="downloads/instructions/img/Linux_22.02/linux-4.png"><img src="downloads/instructions/img/Linux_22.02/linux-4.png" alt="Enable File Association" width="240"></a>
		</td>
		<td>
			If you wish to place an OpenRocket icon on your desktop,
			leave the "Create a desktop icon" checkbox checked.  Click
			<strong>Next</strong> to continue.
    <tr>
      <td>
	    <a href="downloads/instructions/img/Linux_22.02/linux-5.png"><img src="downloads/instructions/img/Linux_22.02/linux-5.png" alt="Installation Progress" width="240"></a>
      </td>
      <td>
	    As the OpenRocket application is installed, the installation
	    progress is displayed.
	  </td>
    </tr>
    <tr>
      <td>
	    <a href="downloads/instructions/img/Linux_22.02/linux-6.png"><img src="downloads/instructions/img/Linux_22.02/linux-6.png" alt="Final Prompt" width="240"></a>
	  </td>
      <td>
	    After the installation has finished, the final prompt appears,
	    stating that the installation process is complete. Click the
	    <strong>Finish</strong> button to exit from the installer.
	  </td>
    </tr>
  </table>
</html>

This process will have placed a number of files and directories in the
installation directory. Two that will be of the most use to you are

- **OpenRocket**: the OpenRocket executable.\
  You can run OpenRocket by giving the command\
  ```% ./OpenRocket```

- **uninstall**\: the uninstaller.\
  You can uninstall OpenRocket with the command\
  ```% ./uninstall```\
  Unfortunately, the uninstaller does not fully empty and delete the installation directory. To do this, give the commands\
  ```% cd ..```\
  ```% rm -r OpenRocket```

### Running OpenRocket ##
In addition to being able to execute OpenRocket from its installation
directory as described above, there are four other ways to run it:

- **From the Command Line**\
  If you had write access to <code>/usr/local/bin/</code> when you
  installed it, you will be able to run OpenRocket simply by typing the
  command\
  ```% OpenRocket```\
  just like any other application.

- **From Your Desktop Menu**
  You will also be able to run OpenRocket from your desktop's menu. It
  will appear in the "Other" software category.

- **From Your Desktop**
  If you enabled creating a desktop item when you installed
  OpenRocket, there will now be an OpenRocket icon on your desktop.
  Double-clicking the icon will execute OpenRocket.
  
  Note: many desktops require you to "trust" an application launcher.
  If this is the case, you will now see a dialog similar to this one:
  
  <a href="downloads/instructions/img/Linux_22.02/linux-7.png"><img src="downloads/instructions/img/Linux_22.02/linux-7.png" alt="Desktop Trust Dialog" width="240"></a>
  
  (the image shows the dialog from XFCE 4.18).  You will need to
  authorize execution of the program in order for it to launch the
  first time.
  
- **From a .ork File Icon**

  If you have saved a .ork file so it appears on the desktop, and you
  requested file associations, the .ork file will appear as an icon.
  Double-clicking the icon will execute OpenRocket and open the .ork
  file for editing.
