<?xml version="1.0" encoding="UTF-8"?>

<!-- Copyright © 2017 · infotexture · Roger W. Fienhold Sheen -->
<!-- See the accompanying LICENSE file for applicable license -->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:dita-ot="http://dita-ot.sourceforge.net/ns/201007/dita-ot"
                version="2.0"
                exclude-result-prefixes="xs dita-ot">

  <xsl:import href="plugin:org.dita.html5:xsl/dita2html5.xsl"/>
 
  <!-- Override to add <meta> elements to page heads -->
  <xsl:template match="*" mode="chapterHead">
    <head>
      <!-- initial meta information -->
      <xsl:call-template name="generateCharset"/>   <!-- Set the character set to UTF-8 -->
      <!-- ↓ Add <meta> element from Bootstrap starter template ↑ -->
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <!-- ↑ End customization · Continue with DITA-OT defaults ↓ -->
      <xsl:call-template name="generateDefaultCopyright"/> <!-- Generate a default copyright, if needed -->
      <xsl:call-template name="generateDefaultMeta"/> <!-- Standard meta for security, robots, etc -->
      <xsl:call-template name="getMeta"/>           <!-- Process metadata from topic prolog -->
      <xsl:call-template name="copyright"/>         <!-- Generate copyright, if specified manually -->
      <xsl:call-template name="generateCssLinks"/>  <!-- Generate links to CSS files -->
      <xsl:call-template name="generateChapterTitle"/> <!-- Generate the <title> element -->
         <xsl:call-template name="generateBreadcrumbs"/>

      <xsl:call-template name="gen-user-head" />    <!-- include user's XSL HEAD processing here -->
      <xsl:call-template name="gen-user-scripts" /> <!-- include user's XSL javascripts here -->
      <xsl:call-template name="gen-user-styles" />  <!-- include user's XSL style element and content here -->
      <xsl:call-template name="processHDF"/>        <!-- Add user HDF file, if specified -->
    </head>
  </xsl:template>

  <!-- Override to add Bootstrap container & row to page -->
  <!-- https://getbootstrap.com/docs/4.4/layout/grid/ -->
  <xsl:template match="*" mode="chapterBody">
    <body>
      <xsl:apply-templates select="." mode="addAttributesToHtmlBodyElement"/>
      <xsl:call-template name="setaname"/>  <!-- For HTML4 compatibility, if needed -->
      <xsl:apply-templates select="." mode="addHeaderToHtmlBodyElement"/>

      <!-- ↓ Add Bootstrap container & row -->
      <div class="container" id="content">  
        <div class="row">
<div class="col-lg-4">     
      <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light" style="max-width: 360px; max-height: 200px;">
 <!-- ↑ End customization · Continue with DITA-OT defaults ↓ -->
          <!-- Include a user's XSL call here to generate a toc based on what's a child of topic -->
              
        <xsl:call-template name="gen-user-sidetoc"/></div></div>
        <div class="col-lg-8">
             <xsl:apply-templates select="." mode="addContentToHtmlBodyElement"/>
   
            <xsl:apply-templates select="." mode="addFooterToHtmlBodyElement"/>

           <div class="float-right">  
           <nav aria-label="Page navigation example">
  <ul class="pagination  pull-right" >
    <li class="page-item"><a class="page-link" href="javascript:history.back()">Previous</a></li>
      <li class="page-item"><a class="page-link" href="javascript:history.forward()">Next</a></li>
  </ul>
</nav> </div>
 		<div class="fixed-bottom" style="border-radius:0; color: #bal; width:100%; background: linear-gradient(to right, #fff 50%, #e8e8e8);">
						<p style="text-align: right; margin-right: 25px">Metapercept Technology Services. All Rights Reserved</p>
					</div>
             <xsl:call-template name="generateBreadcrumbs"/>
</div>
      <!-- ↓ Close Bootstrap divs -->
        </div>
     
     
      </div>       
 

      <!-- ↑ End customization -->
    </body>
  </xsl:template>
  <!-- Override to add Bootstrap large grid classes. -->
  <!-- https://getbootstrap.com/docs/4.4/layout/grid -->
  
 

  <!-- <xsl:attribute-set name="main">
    <xsl:attribute name="class">col-lg-9</xsl:attribute>
    <xsl:attribute name="role">main</xsl:attribute>
      </xsl:attribute-set>

  <xsl:attribute-set name="toc">
    <xsl:attribute name="class">col-lg-3</xsl:attribute>
    <xsl:attribute name="role">toc</xsl:attribute>
  </xsl:attribute-set> -->
</xsl:stylesheet>
