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

Download the Linux installer above for the <font
color="red"><i>NEW</i></font> OpenRocket beta release, saying yes to
whatever security prompts your browser presents. Then, navigate to the
directory in which you downloaded the installer, make it executable,
and run it.
<html>
<pre>
<code>% cd Downloads</code> <em>(or wherever you downloaded it to)</em>
<code>% chmod +x OpenRocket_unix_22_02_beta_02.sh
% ./OpenRocket_unix_22_02_beta_02.sh</code>
</pre>
</html>

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
        <img src="downloads/instructions/img/Linux_22.02.beta.02/linux-1.png" alt="Installation Wizard Welcome" width="240">
      </td>
      <td>
        Click <strong>Next</strong> to start the installation process|
      </td>
    </tr>
    <tr>
      <td>
        <img src="downloads/instructions/img/Linux_22.02.beta.02/linux-2.png" alt="Select Destination Directory" width="240">
      </td>
      <td>
        Select the directory in which you wish to install OpenRocket. The
        default will be in a level just under your home directory. Click
        <strong>Next</strong> to continue.
      </td>
    </tr>
    <tr>
      <td>
	    <img src="downloads/instructions/img/Linux_22.02.beta.02/linux-3.png" alt="Enable File Association" width="240">
	  </td>
      <td>
	    If you wish to be able to double-click on a design file to
		edit it with OpenRocket, leave the first checkbox checked. If
		you wish to put an icon for OpenRocket on the desktop, leave
		the second checkbox checked. Click <strong>Next</strong> to
		continue. <em>Unfortunately, in this Beta release, the installer
		isn't able to actually create the desktop icon. It won't hurt
		anything to leave the box checked; instructions for creating a
		desktop icon after OpenRocket is installed are below.</em>
      </td>
    </tr>
    <tr>
      <td>
	    <img src="downloads/instructions/img/Linux_22.02.beta.02/linux-4.png" alt="Installation Progress" width="240">
      </td>
      <td>
	    As the OpenRocket application is installed, the installation
	    progress is displayed.
	  </td>
    </tr>
    <tr>
      <td>
	    <img src="downloads/instructions/img/Linux_22.02.beta.02/linux-5.png" alt="Final Prompt" width="240">
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
installation directory. Three that will be of the most use to you are

- **OpenRocket**\
  The OpenRocket executable.\
  You can run OpenRocket by giving the command\
  ```% ./OpenRocket```
  
- **OpenRocket 22.02.beta.02.desktop**\
  The OpenRocket desktop file.\
  As stated above, the installer isn't capable of actually creating the desktop icon at this time. You can create an OpenRocket desktop icon by copying this file to your desktop with\
  ```% cp 'OpenRocket 22.02.beta.02.desktop' ../Desktop```

- **uninstall**\
  The uninstaller.\
  You can uninstall OpenRocket with the command\
  ```% ./uninstall```\
  Unfortunately, the uninstaller does not fully empty and delete the installation directory.  To do this, give the commands\
  ```% cd ..```\
  ```% rm -r OpenRocket```

You will also be able to run OpenRocket from your desktop's menu.  It will appear in the "Other" software category.
