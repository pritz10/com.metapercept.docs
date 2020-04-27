
      var tree;
      
      function treeInit() {
      tree = new YAHOO.widget.TreeView("treeDiv1");
      var root = tree.getRoot();
    
    
    
    var objd4e18 = { label: "Introduction", href:"Concept/introduction.html", target:"contentwin" };
    var d4e18 = new YAHOO.widget.TextNode(objd4e18, root, false);var objd4e25 = { label: "About DITAxPresso", href:"Concept/about_product.html", target:"contentwin" };
    var d4e25 = new YAHOO.widget.TextNode(objd4e25, d4e18, false);var objd4e35 = { label: "Target Users", href:"Concept/target_user.html", target:"contentwin" };
    var d4e35 = new YAHOO.widget.TextNode(objd4e35, d4e18, false);
    var objd4e46 = { label: "Managing a Project", href:"Concept/projects_in_ditaxpresso.html", target:"contentwin" };
    var d4e46 = new YAHOO.widget.TextNode(objd4e46, root, false);var objd4e53 = { label: "Creating a New Project", href:"Tasks/create_project.html", target:"contentwin" };
    var d4e53 = new YAHOO.widget.TextNode(objd4e53, d4e46, false);var objd4e60 = { label: "Opening an Existing Project", href:"Tasks/open_project.html", target:"contentwin" };
    var d4e60 = new YAHOO.widget.TextNode(objd4e60, d4e46, false);var objd4e67 = { label: "Selecting from Multiple Maps", href:"Tasks/multiple_maps.html", target:"contentwin" };
    var d4e67 = new YAHOO.widget.TextNode(objd4e67, d4e46, false);
    var objd4e75 = { label: "Default Publishing", href:"Concept/publisher.html", target:"contentwin" };
    var d4e75 = new YAHOO.widget.TextNode(objd4e75, root, false);var objd4e82 = { label: "DITA Map to WebHelp", href:"Tasks/dita_to_html.html", target:"contentwin" };
    var d4e82 = new YAHOO.widget.TextNode(objd4e82, d4e75, false);var objd4e89 = { label: "DITA Map to PDF", href:"Tasks/dita_to_pdf.html", target:"contentwin" };
    var d4e89 = new YAHOO.widget.TextNode(objd4e89, d4e75, false);var objd4e96 = { label: "DITA map to Word", href:"Tasks/dita_to_word.html", target:"contentwin" };
    var d4e96 = new YAHOO.widget.TextNode(objd4e96, d4e75, false);var objd4e103 = { label: "DITA map to Markdown", href:"Tasks/dita_to_markdown.html", target:"contentwin" };
    var d4e103 = new YAHOO.widget.TextNode(objd4e103, d4e75, false);
    var objd4e133 = { label: "Using DITAxPresso Styler", href:"Concept/using_styler.html", target:"contentwin" };
    var d4e133 = new YAHOO.widget.TextNode(objd4e133, root, false);var objd4e140 = { label: "Customize XSLT for PDF", href:"Tasks/customizing_pdf.html", target:"contentwin" };
    var d4e140 = new YAHOO.widget.TextNode(objd4e140, d4e133, false);var objd4e147 = { label: "Style Frontpage", href:"Tasks/frontpage.html", target:"contentwin" };
    var d4e147 = new YAHOO.widget.TextNode(objd4e147, d4e140, false);var objd4e154 = { label: "Style Page Header and Footer", href:"Tasks/header_footer.html", target:"contentwin" };
    var d4e154 = new YAHOO.widget.TextNode(objd4e154, d4e140, false);var objd4e161 = { label: "Style TOC", href:"Tasks/toc.html", target:"contentwin" };
    var d4e161 = new YAHOO.widget.TextNode(objd4e161, d4e140, false);var objd4e168 = { label: "Style Tables", href:"Tasks/tables.html", target:"contentwin" };
    var d4e168 = new YAHOO.widget.TextNode(objd4e168, d4e140, false);var objd4e175 = { label: "Style Lists", href:"Tasks/lists.html", target:"contentwin" };
    var d4e175 = new YAHOO.widget.TextNode(objd4e175, d4e140, false);var objd4e182 = { label: "Style Commons", href:"Tasks/commons.html", target:"contentwin" };
    var d4e182 = new YAHOO.widget.TextNode(objd4e182, d4e140, false);var objd4e189 = { label: "Customize XSLT for WebHelp", href:"Tasks/customizing_html.html", target:"contentwin" };
    var d4e189 = new YAHOO.widget.TextNode(objd4e189, d4e133, false);var objd4e196 = { label: "Choose Themes", href:"Tasks/xslt_themes.html", target:"contentwin" };
    var d4e196 = new YAHOO.widget.TextNode(objd4e196, d4e189, false);var objd4e203 = { label: "Style Header", href:"Tasks/xslt_header.html", target:"contentwin" };
    var d4e203 = new YAHOO.widget.TextNode(objd4e203, d4e189, false);var objd4e210 = { label: "Style Concept Topics", href:"Tasks/xslt_concept.html", target:"contentwin" };
    var d4e210 = new YAHOO.widget.TextNode(objd4e210, d4e189, false);var objd4e217 = { label: "Style Task Topics", href:"Tasks/xslt_task.html", target:"contentwin" };
    var d4e217 = new YAHOO.widget.TextNode(objd4e217, d4e189, false);var objd4e224 = { label: "Style Topics", href:"Tasks/xslt_topics.html", target:"contentwin" };
    var d4e224 = new YAHOO.widget.TextNode(objd4e224, d4e189, false);var objd4e231 = { label: "Setting Plugin to Default Attributes", href:"Tasks/default_plugin_settings.html", target:"contentwin" };
    var d4e231 = new YAHOO.widget.TextNode(objd4e231, d4e133, false);
    var objd4e239 = { label: "Building in DITAxPresso", href:"Concept/builder.html", target:"contentwin" };
    var d4e239 = new YAHOO.widget.TextNode(objd4e239, root, false);var objd4e246 = { label: "Opening Builder", href:"Tasks/open_builder.html", target:"contentwin" };
    var d4e246 = new YAHOO.widget.TextNode(objd4e246, d4e239, false);var objd4e253 = { label: "Modifying DITA map", href:"Tasks/modify_map.html", target:"contentwin" };
    var d4e253 = new YAHOO.widget.TextNode(objd4e253, d4e239, false);
    
    var objd4e269 = { label: "Glossary", href:"Glossary/DITAxPresso_glossary.html", target:"contentwin" };
    var d4e269 = new YAHOO.widget.TextNode(objd4e269, root, false);
    

      tree.draw(); 
      } 
      
      YAHOO.util.Event.addListener(window, "load", treeInit); 
    